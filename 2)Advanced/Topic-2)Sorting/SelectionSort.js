class Solution {
    selectionSort(nums) {
        // Get the length of the array
        let n = nums.length;

        // Outer loop: iterate through each element (except the last one)
        for(let i = 0; i < n - 1; i++) {
            // Assume the current index i is the minimum
            let minIndex = i;

            // Inner loop: find the minimum element in the unsorted part of the array
            for(let j = i + 1; j < n; j++) {
                // If a smaller element is found, update minIndex
                if(nums[j] < nums[minIndex]) {
                    minIndex = j;
                }
            }

            // Swap the found minimum element with the first element of the unsorted part
            let temp = nums[minIndex];
            nums[minIndex] = nums[i];
            nums[i] = temp;
        }

        // Return the sorted array
        return nums;
    }
}

// Example usage
let nums = [7, 4, 1, 5, 3]; // Define an unsorted array
let sol = new Solution();    // Create an instance of the Solution class
console.log(sol.selectionSort(nums)); // Call the selectionSort method and print the sorted array


/*
Steps of Selection Sort:
Find the Minimum: Start by finding the smallest element in the unsorted part of the array.
Swap: Swap the smallest element with the first element of the unsorted part.
Repeat: Move the boundary between the sorted and unsorted parts one element to the right and repeat the process until the array is sorted.
*/