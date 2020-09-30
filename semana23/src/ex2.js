"use strict";
var stringCompressor = function (text) {
    var newString = [];
    var lastChar = text[0];
    var charCount = 0;
    for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
        var char = text_1[_i];
        if (char !== lastChar) {
            newString.push(lastChar + charCount);
            lastChar = char;
            charCount = 0;
        }
        charCount++;
    }
    newString.push(lastChar + charCount);
    var result = "";
    for (var _a = 0, newString_1 = newString; _a < newString_1.length; _a++) {
        var key = newString_1[_a];
        result += key;
    }
    return result.length > text.length ? text : result; // eu escrevi em outra sintaxe, mas gostei do uso do ternário do gabarito
};
console.log(stringCompressor("aabbb"));
console.log(stringCompressor("aabccccaaa"));
console.log(stringCompressor("accurate"));
console.log(stringCompressor("accuraaaaaaaaaate"));
