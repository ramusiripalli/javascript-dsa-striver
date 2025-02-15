/*
  Desired Output for N = 5:
  1
  12
  123
  1234
  12345
*/

// Define a class named Solution
class Solution {
  // Method to print the pattern
  pattern3(n) {
    // Outer loop: Controls the number of rows
    for (let i = 1; i <= n; i++) {
      // Inner loop: Controls the numbers printed in each row
      // The numbers in each row start from 1 and go up to the current row number (i)
      for (let j = 1; j <= i; j++) {
        // Print the current number (j) without adding a newline
        process.stdout.write(j.toString());
      }
      // After printing all numbers in a row, move to the next line
      console.log();
    }
  }
}

// Create an instance of the Solution class
const sol = new Solution();

// Define the value of N (number of rows)
let N = 5;

// Call the pattern3 method to print the pattern
sol.pattern3(N);