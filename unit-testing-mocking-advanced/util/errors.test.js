import { describe, expect, it, beforeEach, afterEach } from "vitest"

import { HttpError, ValidationError } from "./errors"


describe("HttpError Test Suits", () => {
    let http = null
    beforeEach(() => {
        http = new HttpError(200, "Data Fetched", { code: 1 })
    })
    afterEach(() => {
        http = null
    })
    it("Should have status, message, data properties", () => {
        expect(http).toHaveProperty('statusCode')
        expect(http).toHaveProperty('message')
        expect(http).toHaveProperty('data')
    })
    it("Should have status, message, data values", () => {
        expect(http.statusCode).toBe(200)
        expect(http.message).toBe('Data Fetched')
        expect(http.data).toEqual({ code: 1 })
    })
})

describe("ValidationError Test Suits", () => {
    let validator = null
    beforeEach(() => {
        validator = new ValidationError("Data Fetched")
    })
    afterEach(() => {
        validator = null
    })
    it("Should have message properties", () => {
        expect(validator).toHaveProperty('message')
    })
    it("Should have message values", () => {
        expect(validator.message).toBe('Data Fetched')
    })
})