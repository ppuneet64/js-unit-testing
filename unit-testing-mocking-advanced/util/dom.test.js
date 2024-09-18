import { beforeEach, expect, it, vi } from "vitest"
import { showError } from "./dom"
import path from "path"
import fs from "fs"
import { Window } from "happy-dom"

const htmlData = fs.readFileSync(path.join(process.cwd(), 'index.html')).toString()

const window = new Window()
const document = window.document
document.write(htmlData)
vi.stubGlobal("document", document)

//Reset All document
beforeEach(() => {
    document.body.innerHTML = ''
    document.write(htmlData)
})

it("should add error in errors container", () => {
    showError("Hello Error")
    const errorEl = document.getElementById("errors")
    const errP = errorEl.firstElementChild
    expect(errP).not.toBeNull()
})

it("should not be erros initially", () => {
    const errorEl = document.getElementById("errors")
    const errP = errorEl.firstElementChild
    expect(errP).toBeNull()
})

it("should provid given error message", () => {
    showError("Hello Error")
    const errorEl = document.getElementById("errors")
    const errP = errorEl.firstElementChild
    expect(errP.textContent).toBe("Hello Error")
})