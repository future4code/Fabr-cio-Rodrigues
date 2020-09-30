const checkIfStringIsOneEdit = (text: string, comparison: string): boolean => {
    if(text.length > comparison.length + 1 || text.length < comparison.length - 1) {
        return false;
    }

    let commonCharCounter: number = 0;

    for(let item of comparison) {
        if (text.indexOf(item) !== -1) { commonCharCounter++ }
    } 
    
    return (commonCharCounter >= text.length + 1 || commonCharCounter <= text.length - 1)

}

console.log(checkIfStringIsOneEdit("banan", "banana"));
console.log(checkIfStringIsOneEdit("bananak", "banana"));
console.log(checkIfStringIsOneEdit("panana", "banana"));
console.log(checkIfStringIsOneEdit("banananak", "banana"));