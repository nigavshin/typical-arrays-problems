exports.min = function min(array) {
    let min = 0;
    if (!array || !array.length) return min;
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
};

exports.max = function getMaxSubSum(array) {
    let max = 0;
    if (!array || !array.length) return max;
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) max = array[i];
    }
    return max;
};

exports.avg = function avg(array) {
    let sumArr = 0;
    if (!array || !array.length) return sumArr;
    for (let i = 0; i < array.length; i++) {
        sumArr += array[i];
    }
    return sumArr / array.length;
};
