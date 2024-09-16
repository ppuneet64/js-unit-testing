import { it , expect } from "vitest"
import { add } from "./math"

it("Should summarize all number values", () => {
    const numbers = [1,2,3]
    const res = add(numbers)
    expect(res).toBe(6)
})

it("Should yeild NAN if a leaset one number is invalid", () => {
    const numbers = [1,2,"invalid"]
    const res = add(numbers)
    expect(res).toBeNaN()
})

it("should yeild a correct sum of values if string values is provided" , () => {
    const numbers = ["1",'2','3']
    const res = add(numbers)
    expect(res).toBe(6)
})
it("should throw an err if no value is passed", () => {
    const resFn = () => {
        add()
    }
    expect(resFn).toThrow()
})