"use strict";
var checkIfStringIsOneEdit = function (text, comparison) {
    if (text.length > comparison.length + 1 || text.length < comparison.length - 1) {
        return false;
    }
    var commonCharCounter = 0;
    for (var _i = 0, comparison_1 = comparison; _i < comparison_1.length; _i++) {
        var item = comparison_1[_i];
        if (text.indexOf(item) !== -1) {
            commonCharCounter++;
        }
    }
    return (commonCharCounter >= text.length + 1 || commonCharCounter <= text.length - 1);
};
console.log(checkIfStringIsOneEdit("banan", "banana"));
console.log(checkIfStringIsOneEdit("bananak", "banana"));
console.log(checkIfStringIsOneEdit("panana", "banana"));
console.log(checkIfStringIsOneEdit("banananak", "banana"));
