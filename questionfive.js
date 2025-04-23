/* Q5. Calculate the slope of a line. Slope is calculated as
    rise / run, where rise is distance between y coordinates,
    and run is distance between x coordinates.
    Use: slp = slope(x1, y1, x2, y2)

Test at least 3 lines.
*/

function slope(x1, y1, x2, y2) {
    if (x1 === x2) {
        return "Undefined";
    }
    return (y2 - y1) / (x2 - x1);
}

console.log(slope(1, 2, 3, 6));
console.log(slope(2, 4, 6, 8));
console.log(slope(5, 10, 5, 20));