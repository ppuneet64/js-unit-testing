import { expect, it, vi } from "vitest"
import { HttpError } from "./errors"
import { sendDataRequest } from "./http"
const testResponseData = {
    key: 1
}
const testFetch = vi.fn((url, request) => {
    return new Promise((resolve, reject) => {
        if (typeof request.body !== 'string') {
            reject('Please provide parsed data')
        }
        const testRes = {
            ok: true,
            status: "success",
            json() {
                return new Promise((resolve) => {
                    resolve(testResponseData)
                })
            }
        }
        resolve(testRes)
    })
})
vi.stubGlobal("fetch", testFetch)

it("should return response data", async () => {
    expect(sendDataRequest(testResponseData)).resolves.toEqual(testResponseData)
})
it("should parse request data ", async () => {
    //Regular way
    //return expect(sendDataRequest(testResponseData)).not.rejects.toEqual('Please provide parsed data')
    //New Way
    let errorMsg
    try {
        await sendDataRequest(testResponseData)
    } catch (error) {
        errorMsg = error
        expect(errorMsg).toBe('Please provide parsed data')
    }

})
it("should throw error", async () => {
    testFetch.mockImplementationOnce(() => {
        return new Promise((resolve, reject) => {
            reject('Something went wrong')
        })
    })
    expect(sendDataRequest(testResponseData)).rejects.toEqual('Something went wrong')
})
it("should throw HttpError", async () => {
    testFetch.mockImplementationOnce(() => {
        return new Promise((resolve, reject) => {
            const testRes = {
                ok: false,
                status: "success",
                json() {
                    return new Promise((resolve) => {
                        resolve(testResponseData)
                    })
                }
            }
            resolve(testRes)
        })
    })
    expect(sendDataRequest(testResponseData)).rejects.toBeInstanceOf(HttpError)
})

