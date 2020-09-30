exports.min = function min (array) {
    let min = array ? array[0] || 0 : 0;
    array && array.forEach((el) => {
       if  (el < min) {
           min = el;
       }
    });
    return min;
}

exports.max = function max (array) {
    let max = array ? array[0] || 0 : 0;
    array && array.forEach((el) => {
        if  (el > max) {
            max = el;
        }
    });
    return max;
}

exports.avg = function avg (array) {
    const average = array && array.length > 0 ? array.reduce((sum, current) => sum + current) / array.length : 0;
    return average;
}
