
function magicFastHelper(array) {
    return magicFast(array, 0, array.length - 1);
}

function magicFast(array, start, end) {
    // Base Condition
    console.log("=================")
    console.log("current start", start)
    console.log("current end", end)
    if (end < start) return -1;

    // Find the middle index
    const midIndex = (start + end) / 2;
    const midValue = array[midIndex];
    console.log("midindex", midIndex);
    console.log("midValue", midValue)

    if (midValue == midIndex) {
        return midIndex;
    }

    // Search Left
    const leftindex = Math.min(midIndex - 1, midValue);
    console.log("leftindex", leftindex)
    const left = magicFast(array, start, leftindex);
    console.log("left", left);
    if (left >= 0) {
        return left
    }
    // Search 
    const rightIndex = Math.max(midIndex +1, midValue);
    console.log("rightIndex", rightIndex)
    const right =  magicFast(array, rightIndex, end);
    return right
}

magic = [-2, 0, 1, 2, 4, 8, 10]
const result = magicFastHelper(magic, 1)
console.log('done')
console.log(result)