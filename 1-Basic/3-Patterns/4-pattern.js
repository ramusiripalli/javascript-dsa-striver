/*
This code prints a pattern where each line contains a number repeated as many times as the line number.
For example:
1
22
333
4444
55555
*/

class Solution {
  // Method to print the pattern
  pattern4(n) {
    // Outer loop: iterates from 1 to n (inclusive)
    for (let i = 1; i <= n; i++) {
      // Inner loop: iterates from 1 to i (inclusive)
      for (let j = 1; j <= i; j++) {
        // Print the current number 'i' without adding a new line
        process.stdout.write(i.toString());
      }
      // After printing all numbers in the current line, move to the next line
      console.log();
    }
  }
}

// Create an instance of the Solution class
const sol = new Solution();

// Define the number of lines to print
const N = 5;

// Call the pattern4 method to print the pattern
sol.pattern4(N);