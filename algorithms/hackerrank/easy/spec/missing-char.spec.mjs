// import {missingChar} from "../missing-char.js";
//
// describe("missing char", () => {
//     beforeEach(function () {
//     });
//     it("should return a new string where the char at index n has been removed", function () {
//         const result = missingChar("kitten", 1);
//         expect(result).toEqual("ktten");
//     })
//     it("should return a new string where the char at index n has been removed", function () {
//         const result = missingChar("kitten", 0);
//         expect(result).toEqual("itten");
//     })
//     it("should return a new string where the char at index n has been removed", function () {
//         const result = missingChar("kitten", 4);
//         expect(result).toEqual("kittn");
//     })
//     it("should return a new string where the char at index n has been removed", function () {
//         const result = missingChar("Hi", 0);
//         expect(result).toEqual("i");
//     })
//     it("should return a new string where the char at index n has been removed", function () {
//         const result = missingChar("Hi", 1);
//         expect(result).toEqual("H");
//     })
//     it("should return a new string where the char at index n has been removed", function () {
//         const result = missingChar("code", 0);
//         expect(result).toEqual("ode");
//     })
//     it("should return a new string where the char at index n has been removed", function () {
//         const result = missingChar("code", 1);
//         expect(result).toEqual("cde");
//     })
//     it("should return a new string where the char at index n has been removed", function () {
//         const result = missingChar("code", 2);
//         expect(result).toEqual("coe");
//     })
//     it("should return a new string where the char at index n has been removed", function () {
//         const result = missingChar("code", 3);
//         expect(result).toEqual("cod");
//     })
//     it("should return a new string where the char at index n has been removed", function () {
//         const result = missingChar("chocolate", 8);
//         expect(result).toEqual("chocolat");
//     })
// });