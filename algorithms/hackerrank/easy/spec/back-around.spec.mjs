import {backAround} from "../back-around.js"

describe("backAround", () => {
    beforeEach(function () {
    });
    it("should return a new string with the last char added at the front and back", function () {
        const result = backAround("cat");
        expect(result).toEqual("tcatt");
     })
    it("should return a new string with the last char added at the front and back", function () {
        const result = backAround("Hello");
        expect(result).toEqual("oHelloo");
    })
    it("should return a new string with the last char added at the front and back", function () {
        const result = backAround("a");
        expect(result).toEqual("aaa");
    })
    it("should return a new string with the last char added at the front and back", function () {
        const result = backAround("abc");
        expect(result).toEqual("cabcc");
    })
    it("should return a new string with the last char added at the front and back", function () {
        const result = backAround("read");
        expect(result).toEqual("dreadd");
    })
    it("should return a new string with the last char added at the front and back", function () {
        const result = backAround("boo");
        expect(result).toEqual("obooo");
    })

});