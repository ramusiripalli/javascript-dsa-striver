/*
This code prints a pattern where each line contains a decreasing number of asterisks (*).
For example:
*****
****
***
**
*
*/

class Solution {
  // Method to print the pattern
  pattern5(n) {
    // Outer loop: iterates from 1 to n (inclusive)
    for (let i = 1; i <= n; i++) {
      // Inner loop: iterates from 1 to (n - i + 1) (inclusive)
      for (let j = 1; j <= n - i + 1; j++) {
        // Print an asterisk (*) without adding a new line
        process.stdout.write("*");
      }
      // After printing all asterisks in the current line, move to the next line
      console.log();
    }
  }
}

// Create an instance of the Solution class
const sol = new Solution();

// Define the number of lines to print
const N = 5;

// Call the pattern5 method to print the pattern
sol.pattern5(N);