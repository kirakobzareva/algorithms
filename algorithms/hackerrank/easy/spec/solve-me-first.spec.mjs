// import {solveMeFirst} from "../solve-me-first.js";
//
// // fdescribe("solve me first", () => {
// //     it("should return sum for positive ints", function () {
// //         const sum = solveMeFirst(3,4);
// //         expect(sum).toEqual(7);
// //     })
// //
// //     it("should return sum for negative ints", function () {
// //         const sum = solveMeFirst(-3,-4);
// //         expect(sum).toEqual(-7);
// //     })
// //
// //     it("should return sum for zero", function () {
// //         const sum = solveMeFirst(-3,0);
// //         expect(sum).toEqual(-3);
// //     })
// // })
//
//
// describe('solve me first', () => {
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
//             const sum = solveMeFirst(parameters.input[0], parameters.input[1]);
//             console.log(parameters.expectedResult);
//             expect(sum).toEqual(parameters.expectedResult);
//         });
//     });
// });