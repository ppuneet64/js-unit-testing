import { it, expect } from "vitest"
import { generateToken, generateTokenPromise } from "./async-example"

it("should generate token", ({ expect }) => {
    generateToken("ppuneet64@gmail.com", (err, token) => {
        expect(token).toBe(2)
    })
})

it("token is generated in promise", () => {
    expect(generateTokenPromise("test")).resolves.toBeDefined()
})
it("token is generated in promise with async manner", async () => {
    const token = await generateTokenPromise("test")
    expect(token).toBeDefined()
})