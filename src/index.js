module.exports = function reverse (n) {
    if (n < 0){
        n = n * (-1)
    }
    let string = n.toString();
    let arr = string.split('');
    let reverseArr = arr.reverse();
    let reverseString = reverseArr.join('');
    return Number(reverseString);
}
