// import {posNeg} from "../pos-neg.js";
//
//
// describe("monkeyTrouble", () => {
//     beforeEach(function () {
//     });
//     it("should return true if one is negative and one is positive. Except if the parameter 'negative' is true," +
//         " then return true only if both are negative.", function () {
//         const result = posNeg(1, -1, false);
//         expect(result).toEqual(true);
//     })
//     it("should return true if one is negative and one is positive. Except if the parameter 'negative' is true," +
//         " then return true only if both are negative.", function () {
//         const result = posNeg(-1, 1, false);
//         expect(result).toEqual(true);
//     })
//     it("should return true if one is negative and one is positive. Except if the parameter 'negative' is true," +
//         " then return true only if both are negative.", function () {
//         const result = posNeg(-4, -5, true);
//         expect(result).toEqual(true);
//     })
//     it("should return true if one is negative and one is positive. Except if the parameter 'negative' is true," +
//         " then return true only if both are negative.", function () {
//         const result = posNeg(-4, -5, false);
//         expect(result).toEqual(false);
//     })
//     it("should return true if one is negative and one is positive. Except if the parameter 'negative' is true," +
//         " then return true only if both are negative.", function () {
//         const result = posNeg(-4, 5, false);
//         expect(result).toEqual(true);
//     })
//     it("should return true if one is negative and one is positive. Except if the parameter 'negative' is true," +
//         " then return true only if both are negative.", function () {
//         const result = posNeg(-4, 5, true);
//         expect(result).toEqual(false);
//     })
//     it("should return true if one is negative and one is positive. Except if the parameter 'negative' is true," +
//         " then return true only if both are negative.", function () {
//         const result = posNeg(1, 1, false);
//         expect(result).toEqual(false);
//     })
//     it("should return true if one is negative and one is positive. Except if the parameter 'negative' is true," +
//         " then return true only if both are negative.", function () {
//         const result = posNeg(-1, -1, false);
//         expect(result).toEqual(false);
//     })
//     it("should return true if one is negative and one is positive. Except if the parameter 'negative' is true," +
//         " then return true only if both are negative.", function () {
//         const result = posNeg(1, -1, true);
//         expect(result).toEqual(false);
//     })
//     it("should return true if one is negative and one is positive. Except if the parameter 'negative' is true," +
//         " then return true only if both are negative.", function () {
//         const result = posNeg(-1, 1, true);
//         expect(result).toEqual(false);
//     })
//     it("should return true if one is negative and one is positive. Except if the parameter 'negative' is true," +
//         " then return true only if both are negative.", function () {
//         const result = posNeg(1, 1, true);
//         expect(result).toEqual(false);
//     })
//     it("should return true if one is negative and one is positive. Except if the parameter 'negative' is true," +
//         " then return true only if both are negative.", function () {
//         const result = posNeg(-1, -1, true);
//         expect(result).toEqual(true);
//     })
//     it("should return true if one is negative and one is positive. Except if the parameter 'negative' is true," +
//         " then return true only if both are negative.", function () {
//         const result = posNeg(5, -5, false);
//         expect(result).toEqual(true);
//     })
//     it("should return true if one is negative and one is positive. Except if the parameter 'negative' is true," +
//         " then return true only if both are negative.", function () {
//         const result = posNeg(-6, 6, false);
//         expect(result).toEqual(true);
//     })
//     it("should return true if one is negative and one is positive. Except if the parameter 'negative' is true," +
//         " then return true only if both are negative.", function () {
//         const result = posNeg(-5, -6, false);
//         expect(result).toEqual(false);
//     })
//     it("should return true if one is negative and one is positive. Except if the parameter 'negative' is true," +
//         " then return true only if both are negative.", function () {
//         const result = posNeg(-2, -1, false);
//         expect(result).toEqual(false);
//     })
//     it("should return true if one is negative and one is positive. Except if the parameter 'negative' is true," +
//         " then return true only if both are negative.", function () {
//         const result = posNeg(1, 2, false);
//         expect(result).toEqual(false);
//     })
//     it("should return true if one is negative and one is positive. Except if the parameter 'negative' is true," +
//         " then return true only if both are negative.", function () {
//         const result = posNeg(-5, 6, true);
//         expect(result).toEqual(false);
//     })
//     it("should return true if one is negative and one is positive. Except if the parameter 'negative' is true," +
//         " then return true only if both are negative.", function () {
//         const result = posNeg(-5, -5, true);
//         expect(result).toEqual(true);
//     })
//
// });