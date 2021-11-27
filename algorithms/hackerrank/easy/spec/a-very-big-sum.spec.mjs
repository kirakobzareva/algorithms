// import {aVeryBigSum} from "../a-very-big-sum.js";
//
//
// // describe("a very big sum", () => {
// //
// //     beforeEach(function () {
// //
// //     });
// //
// //     it("should return sum", function () {
// //         const result = aVeryBigSum([3, 4]);
// //         expect(result).toEqual(7);
// //     })
// //
// //     it("should return sum", function () {
// //         const result = aVeryBigSum([-3, -4]);
// //         expect(result).toEqual(-7);
// //     })
// //
// //     it("should return sum", function () {
// //         const result = aVeryBigSum([-3, 0]);
// //         expect(result).toEqual(-3);
// //     })
// // });
//
//
// describe('a very big sum', () => {
//     it('should return correct sum', () => {
//         const data = [
//             {
//                 input: [3, 4],
//                 expectedResult: 7,
//             },
//             {
//                 input: [-3, -4],
//                 expectedResult: -7,
//             },
//             {
//                 input: [-3, 0],
//                 expectedResult: -3,
//             },
//         ];
//
//         data.forEach(parameters => {
//             const sum = aVeryBigSum(parameters.input);
//             expect(sum).toEqual(parameters.expectedResult);
//         });
//     });
// });