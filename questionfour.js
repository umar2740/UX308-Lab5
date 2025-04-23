/* Q4. yee_ha takes an integer parameter and returns one of the following strings:

"Yee" if number is evenly divisible by 3
"Ha" if number is evenly divisible by 7
"Yee Ha" if number is evenly divisible by both 3 and 7
"Nada" if number is none of the above

Make a test for each branch.
*/

function yeeHa(num) {
    if (num % 3 === 0 && num % 7 === 0) {
        return "Yee Ha";
    } else if (num % 3 === 0) {
        return "Yee";
    } else if (num % 7 === 0) {
        return "Ha";
    } else {
        return "Nada";
    }
}

console.log(yeeHa(3));
console.log(yeeHa(7));
console.log(yeeHa(21));
console.log(yeeHa(8));