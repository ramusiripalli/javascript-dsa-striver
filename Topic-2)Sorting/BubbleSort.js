class Solution {
    bubbleSort(nums) {
        // Get the length of the array
        let n = nums.length;

        // Outer loop: run n-1 times (each iteration moves the largest element to its correct position)
        for(let i = 0; i < n - 1; i++) {

            // Variable to check if any swap happened in the current pass
            let didSwapped = false;

            // Inner loop: compares adjacent elements and pushes the larger element toward the end
            // After each pass, the largest element is in its correct place, so the range of comparison reduces (n-i-1)
            for(let j = 0; j < n - i - 1; j++) {

                // If the current element is greater than the next one, swap them
                if(nums[j] > nums[j + 1]) {

                    // Swap nums[j] and nums[j+1] using destructuring assignment (ES6 feature)
                    [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];

                    // Indicate that a swap occurred
                    didSwapped = true;
                }
            }

            // If no swaps happened during this entire inner loop pass, the array is already sorted, so we can exit early
            if(!didSwapped) {
                break;
            }
        }

        // Return the sorted array
        return nums;
    }
}

// Create an instance of the Solution class
let solution = new Solution();

// Initialize an unsorted array
let nums = [7, 4, 1, 5, 3];

// Print the array before sorting
console.log("Array Before Using Bubble Sort:", nums);

// Call the bubbleSort function to sort the array
nums = solution.bubbleSort(nums);

// Print the array after sorting
console.log("Array After Using Bubble Sort:", nums);
