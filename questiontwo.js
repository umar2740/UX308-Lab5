//Q2. Given the  width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn. Test at least 3 lawn sizes

function mowingTime(width, legnth, cutRate) {
    let area = width * length;
    return area / cutRate;
}

console.log(mowingTime(10, 20, 5));
console.log(mowingTime(15, 30, 10));
console.log(mowingTime(50, 100, 20));