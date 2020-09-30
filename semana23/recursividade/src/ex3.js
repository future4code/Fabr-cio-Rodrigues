"use strict";
var printArrayElements = function (arr, i) {
    if (i === void 0) { i = arr.length - 1; }
    if (i >= 0) {
        printArrayElements(arr, i - 1);
        console.log(arr[i]);
    }
};
printArrayElements([0, 2, 4, 8, 16, 32, 64, 128, 256]);
