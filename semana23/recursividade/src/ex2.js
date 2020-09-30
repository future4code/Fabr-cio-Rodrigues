"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSum = void 0;
exports.calculateSum = function (n, result) {
    if (result === void 0) { result = 0; }
    if (n === 0) {
        return result;
    }
    return exports.calculateSum(n - 1, result + n);
};
console.log(exports.calculateSum(16));
console.log(exports.calculateSum(4));
console.log(exports.calculateSum(8));
