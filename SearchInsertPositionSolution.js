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
};