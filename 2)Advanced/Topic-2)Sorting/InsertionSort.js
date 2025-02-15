class Solution {
    // Define the insertionSort method
    insertionSort(nums) {
        // Get the length of the array
        let n = nums.length;

        // Traverse the array starting from the second element (index 1)
        for (let i = 0; i < n; i++) {

            // Set j to the current index (i), which will move backward to find the correct position
            let j = i;

            // This while loop moves elements greater than nums[j] to the right
            // It continues as long as we haven't reached the beginning of the array (j > 0)
            // and the previous element (nums[j - 1]) is greater than the current element (nums[j])
            while (j > 0 && nums[j - 1] > nums[j]) {

                // Swap the elements if the previous one is greater
                [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];

                // Move one step backward
                j--;

                // Debugging or visual output for understanding (you can remove this if not needed)
                console.log("Swapping elements:", nums);
            }
        }

        // Return the sorted array
        return nums;
    }
}

// Create an instance of the Solution class
let solution = new Solution();

// Initialize an array to be sorted
let nums = [1, 2, 3, 4, 5];

// Print the array before sorting
console.log("Before Using Insertion Sort:", nums);

// Call the insertionSort method and sort the array
nums = solution.insertionSort(nums);

// Print the array after sorting
console.log("After Using Insertion Sort:", nums);
