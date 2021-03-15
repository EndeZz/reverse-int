module.exports = function reverse(n) {
    let result = String(n);

    return parseFloat(result.split("").reverse().join(""));
};
