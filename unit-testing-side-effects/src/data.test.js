import { it, expect, vi } from "vitest"
import { generateReportData } from "./data"

it("logger method should have been called", () => {
    const logger = vi.fn()
    generateReportData(logger)
    expect(logger).toHaveBeenCalled()
})
