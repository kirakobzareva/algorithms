// import {hasTeen} from "../has-teen.js"
//
//
// describe("hasTeen", () => {
//     beforeEach(function () {
//     });
//     it("should return true if 1 of 3 argumnents is in the range 13..19 inclusive", function () {
//         const result = hasTeen(13, 20, 10);
//         expect(result).toEqual(true);
//     })
//     it("should return true if 1 of 3 argumnents is in the range 13..19 inclusive", function () {
//         const result = hasTeen(20, 19, 10);
//         expect(result).toEqual(true);
//     })
//     it("should return true if 1 of 3 argumnents is in the range 13..19 inclusive", function () {
//         const result = hasTeen(20, 10, 13);
//         expect(result).toEqual(true);
//     })
//     it("should return true if 1 of 3 argumnents is in the range 13..19 inclusive", function () {
//         const result = hasTeen(1, 20, 12);
//         expect(result).toEqual(false);
//     })
//     it("should return true if 1 of 3 argumnents is in the range 13..19 inclusive", function () {
//         const result = hasTeen(19, 20, 12);
//         expect(result).toEqual(true);
//     })
//     it("should return true if 1 of 3 argumnents is in the range 13..19 inclusive", function () {
//         const result = hasTeen(12, 20, 19);
//         expect(result).toEqual(true);
//     })
//     it("should return true if 1 of 3 argumnents is in the range 13..19 inclusive", function () {
//         const result = hasTeen(12, 9, 20);
//         expect(result).toEqual(false);
//     })
//     it("should return true if 1 of 3 argumnents is in the range 13..19 inclusive", function () {
//         const result = hasTeen(12, 18, 20);
//         expect(result).toEqual(true);
//     })
//     it("should return true if 1 of 3 argumnents is in the range 13..19 inclusive", function () {
//         const result = hasTeen(14, 2, 20);
//         expect(result).toEqual(true);
//     })
//     it("should return true if 1 of 3 argumnents is in the range 13..19 inclusive", function () {
//         const result = hasTeen(4, 2, 20);
//         expect(result).toEqual(false);
//     })
//     it("should return true if 1 of 3 argumnents is in the range 13..19 inclusive", function () {
//         const result = hasTeen(11, 22, 22);
//         expect(result).toEqual(false);
//     })
// });