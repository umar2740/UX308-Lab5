//Q1. There are 43,560 square feet per acre. Write a program that converts square feet to acres. Test at least 3 conversions.

function squareFeetToAcres(squareFeet) {
    return squareFeet / 43560;
}

console.log(squareFeetToAcres(43560));
console.log(squareFeetToAcres(87120));
console.log(squareFeetToAcres(21780));