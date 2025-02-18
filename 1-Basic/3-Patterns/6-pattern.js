/*
This code prints a pattern where each line contains a sequence of numbers in decreasing order.
For example:
12345
1234
123
12
1
*/

class Solution {
  // Method to print the pattern
  pattern6(n) {
    // Outer loop: iterates from 1 to n (inclusive)
    for (let i = 1; i <= n; i++) {
      // Inner loop: iterates from 1 to (n - i + 1) (inclusive)
      for (let j = 1; j <= n - i + 1; j++) {
        // Print the current number 'j' as a string without adding a new line
        process.stdout.write(j.toString());
      }
      // After printing all numbers in the current line, move to the next line
      console.log();
    }
  }
}

// Create an instance of the Solution class
const sol = new Solution();

// Define the number of lines to print
let N = 5;

// Call the pattern6 method to print the pattern
sol.pattern6(N);