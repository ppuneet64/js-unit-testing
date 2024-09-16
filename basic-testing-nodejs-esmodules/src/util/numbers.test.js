import { it, expect } from "vitest"
import { transformToNumber } from "./numbers"

it("should transform string to a number", () => {
    const res = transformToNumber("10")
    expect(res).toBeTypeOf("number")
})

it("should return Nan if no valid number string is provided", () => {
    const res = transformToNumber("hello")
    expect(res).toBeNaN()
})

it("should return 0 if no value is provided", () => {
    const res = transformToNumber()
    expect(res).toBeNaN()
})