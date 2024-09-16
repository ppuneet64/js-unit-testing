import { it, expect, describe } from "vitest"

import { validateNumber, validateStringNotEmpty } from "./validation"

describe("validateStringNotEmpty tests", () => {
    it("should throw error if string is empty ", () => {
        const resFn = () => {
            validateStringNotEmpty('')
        }
        expect(resFn).toThrowError()
    })
    it("should not throw error if string is not empty ", () => {
        const resFn = () => {
            validateStringNotEmpty('hello')
        }
        expect(resFn).not.toThrowError()
    })
})

describe("validateNumber tests", () => {
    it("should throw error if return value is not number ", () => {
        const resFn = () => {
            validateNumber('hello')
        }
        expect(resFn).toThrowError()
    })

    it("should not throw error if return value is number ", () => {
        const resFn = () => {
            validateNumber(10)
        }
        expect(resFn).not.toThrowError()
    })
})


