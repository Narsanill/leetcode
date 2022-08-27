/* Given an integer array nums, 
return true if any value appears at least twice in the array, 
and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

var containsDuplicate = function (nums) {
    const totalWithoutDuplicate = new Map(nums.map((i)=> [i]));
    return totalWithoutDuplicate.size !== nums.length;
}

/*
Time complexity: O(n)
Space complexity: O(n)

Think of this as using the map to create a tally for each unique number,
when a duplicate appears the array size increases and a duplicate is found,
if the size stays the same then size stays the same  
*/