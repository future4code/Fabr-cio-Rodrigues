export const calculateSum = (n: number, result: number = 0): number => {
    if (n === 0) {
        return result;
    }
    return calculateSum(n - 1, result + n);
};

console.log(calculateSum(16));
console.log(calculateSum(4));
console.log(calculateSum(8));

/* Neste exercício eu tive que olhar o gabarito para ver um jeito melhor de parar a iteração quando N = 0. */