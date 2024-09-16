import { expect, it } from "vitest"

import { validateNotEmpty } from "./validation"

it("should throw error if text is empty", () => {
    const methodFn = () => {
        validateNotEmpty('', "Something went wrong")
    }
    expect(methodFn).toThrow()
})

it("should throw given error if text is empty", () => {
    const methodFn = () => {
        validateNotEmpty('', "Something went wrong")
    }
    expect(methodFn).toThrowError("Something went wrong")
})
it("should throw empty error if text is empty", () => {
    const methodFn = () => {
        validateNotEmpty('', "")
    }
    expect(methodFn).toThrowError("")
})

it("should not throw empty error if text is not empty", () => {
    const methodFn = () => {
        validateNotEmpty('hello', "")
    }
    expect(methodFn).not.toThrow()
})