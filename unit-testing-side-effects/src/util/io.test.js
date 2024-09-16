import { it, expect, vi } from "vitest"
import writeData from "./io"
import { promises as fs } from 'fs';
vi.mock('fs')
vi.mock('path')

it("should execute writefile method", () => {
    const fileName = "test.txt"
    const fileData = "Hello data"
    //writeData(fileData, fileName)
    return expect(writeData(fileData, fileName)).resolves.toBeUndefined()
    //return expect(fs.writeFile).toHaveBeenCalled()
})

it("should execute writefile method and called with params", () => {
    const fileName = "test.txt"
    const fileData = "Hello data"
    writeData(fileData, fileName)
    return expect(fs.writeFile).toHaveBeenCalledWith(fileName, fileData)
})
