/*
  Desired Output for N = 5:
  *
  **
  ***
  ****
  *****
*/

// Define a class named Solution
class Solution {
  // Method to print the pattern
  pattern2(n) {
    // Outer loop: Controls the number of rows
    for (let i = 1; i <= n; i++) {
      // Inner loop: Controls the number of stars in each row
      // The number of stars in each row is equal to the row number (i)
      for (let j = 1; j <= i; j++) {
        // Print a star without adding a newline
        process.stdout.write("*");
      }
      // After printing all stars in a row, move to the next line
      console.log();
    }
  }
}

// Create an instance of the Solution class
const sol = new Solution();

// Define the value of N (number of rows)
let N = 5;

// Call the pattern2 method to print the pattern
sol.pattern2(N);