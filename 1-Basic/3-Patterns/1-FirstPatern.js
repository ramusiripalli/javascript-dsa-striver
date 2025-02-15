/* 
  Desired Output for N = 5:
  *****
  *****
  *****
  *****
  *****
*/

// Define a class named Solution
class Solution {
  // Method to print the pattern
  pattern1(n) {
    // Outer loop: Controls the number of rows
    for (let i = 0; i < n; i++) {
      // Inner loop: Controls the number of stars in each row
      for (let j = 0; j < n; j++) {
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

// Define the value of N (number of rows and columns)
const N = 5;

// Call the pattern1 method to print the pattern
sol.pattern1(N);