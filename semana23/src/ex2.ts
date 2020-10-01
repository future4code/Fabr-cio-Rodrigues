const stringCompressor = (text: string): string  => {
    const newString: string[] = [];
    let lastChar = text[0];
    let charCount = 0;

    for(let char of text) {
        if(char !== lastChar) {
            newString.push(lastChar + charCount);
            lastChar = char;
            charCount = 0;
        }
        charCount++
    }

    newString.push(lastChar + charCount);
    let result = "";
    for (const key of newString) {
        result += key;
    }

    return result.length > text.length ? text : result; // eu escrevi em outra sintaxe, mas gostei do uso do ternário do gabarito
}

console.log(stringCompressor("aabbb"));
console.log(stringCompressor("aabccccaaa"));
console.log(stringCompressor("accurate"));
console.log(stringCompressor("accuraaaaaaaaaate"));
