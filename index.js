function map(arr, func) {
    return arr.map(func)
}

function reduce(arr, func, start = 0) {
    if (start === 0) {
        return arr.reduce(func)
    } else {
        return arr.reduce(func, start)
    }
}