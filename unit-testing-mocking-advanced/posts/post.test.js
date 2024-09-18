import { expect, it } from "vitest";
import { extractPostData } from "./posts";

it("provide title and content", () => {
    const testData = {
        title: "Hello",
        content: "Content"
    }
    const formData = {
        title: testData.title,
        content: testData.content,
        get(key) {
            return this[key]
        }
    }
    const actualData = extractPostData(formData)
    expect(actualData.title).toBe(testData.title)
    expect(actualData.content).toBe(testData.content)
})