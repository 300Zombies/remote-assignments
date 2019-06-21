function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        };
    }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([-7, 50, 200, -47], 3));
console.log(twoSum([99, 2, -42, 51], -40));
console.log(twoSum([1, 77, -14, 22], 23));


/*** these code below are what I found, not my work, for note only ***/

function betterTwoSum(nums, target) {
    let numObject = {};
    for (let i = 0; i < nums.length; i++) {
        let thisNum = nums[i];
        numObject[thisNum] = i;
    }
    // convert nums value to obj attr and nums index to attr value
    console.log(numObject);
    // numObject {
    //     2: 0,
    //     7: 1,
    //     11: 2,
    //     15: 3
    // }
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
            // if numObject has attritube true/false
            // numObject[diff] !== i -> not sure why 
            return [i, numObject[diff]];
        }
    }
}
console.log(betterTwoSum([2, 7, 11, 15], 9));


function bestTwoSum(nums, target) {
    const numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (numsMap.has(target - nums[i])) {
            return [numsMap.get(target - nums[i]), i];
            // get() returns a specified element associated with the specified key from the Map object.
        } else {
            numsMap.set(nums[i], i);
            // set() adds or updates an element with a specified key and value to a Map object.
        }
    }
}

console.log(bestTwoSum([2, 7, 11, 15], 9));