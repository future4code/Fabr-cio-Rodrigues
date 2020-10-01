"use strict";
var printNumbersDesc = function (n) {
    if (n >= 0) {
        printNumbersDesc(n - 1);
        console.log(n);
    }
};
var printNumbersAsc = function (n) {
    if (n >= 0) {
        console.log(n);
        printNumbersAsc(n - 1);
    }
};
printNumbersDesc(5);
printNumbersDesc(10);
printNumbersAsc(10);
printNumbersAsc(5);
