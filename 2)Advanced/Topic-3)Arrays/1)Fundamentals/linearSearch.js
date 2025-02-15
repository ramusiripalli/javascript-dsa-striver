class Solution {
    // Define the linearSearch method that takes an array 'nums' and a 'target' number as inputs
    linearSearch(nums, target) {
        // Get the length of the array 'nums'
        let n = nums.length;

        // Loop through each element in the array 'nums'
        for (let i = 0; i < n; i++) {
            // Check if the current element (nums[i]) is equal to the target
            if (nums[i] === target) {
                // If found, return the index 'i' of the target
                return i;
            }
        }

        // If the target is not found in the array, return -1
        return -1;
    }
}

// Example usage of the Solution class and linearSearch method

// Define an array 'nums' and a target value 'target'
let nums = [2, 3, 4, 5, 3];
let target = 9;

// Create an instance of the Solution class
let sol = new Solution();

// Call the linearSearch method and print the result
console.log(sol.linearSearch(nums, target));

// Output: 
// Since '9' is not present in the array, the result will be -1
