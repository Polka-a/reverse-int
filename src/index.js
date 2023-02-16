module.exports = function reverse(num) {
    num = Math.abs(num)
    return Number(num.toString().split('').reverse().join(''))
}
