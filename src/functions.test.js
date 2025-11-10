import { describe, it, expect, beforeEach, afterEach } from "vitest"
import { processValues, structureTest, asyncFunction } from "./functions"

describe("processValues function", () => {
  it("skal håndterer både tal, strenge og null-værdier", () => {
    const example = [1, "hej", null, "verden", 4, undefined, "2"] 
    expect(processValues(example)).toEqual([2, "HEJ", "N/A", "VERDEN", 8, "N/A", "2"])
  })
})

describe("structureTest function", () => {
    let numbers

    beforeEach(() => {
        numbers = {a: 2, b: 4}
    })

    afterEach(() => {
        numbers = null
    })

    it("skal opsummere to tal", () => {
        expect(structureTest(numbers.a, numbers.b)).toBe(6)
    })

    it("skal minusere tal", () =>{
        expect(structureTest(-1, numbers.b)).toBe(3)
    })
})

describe("asyncFunction function", () => {
  it("test af asynkrone funktioner når success er true", async () => {
    const result = await asyncFunction(true)
    expect(result).toBe("success")
  })
  it("test af asynkrone funktioner når success er false", async () => {
    try{
        await asyncFunction(false)
        throw new Error("det er skåret noget galt")
    } catch (error){
        expect(error).toBe("resjected")
    }
  })
})

