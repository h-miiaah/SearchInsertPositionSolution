/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    for (let position = 0; position < nums.length; position++) {
        if (target <= nums[position]) {
            return position;
          }
      }
    return nums.length;
};

/*

- We iterate through the array and check if the target is less than or equal to the current element.


*/