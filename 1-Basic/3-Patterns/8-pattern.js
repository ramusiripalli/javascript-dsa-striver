/*
This code prints an inverted pyramid pattern using asterisks (*) and spaces.
For example:
*********
 *******
  *****
   ***
    *
*/

class Solution {
  // Method to print the inverted pyramid pattern
  pattern8(n) {
    // Outer loop: iterates from 1 to n (inclusive)
    for (let i = 1; i <= n; i++) {
      // First inner loop: prints spaces before the asterisks
      for (let j = 1; j <= i - 1; j++) {
        // Print a space without adding a new line
        process.stdout.write(" ");
      }

      // Second inner loop: prints the asterisks
      for (let j = 1; j <= 2 * n - 2 * i + 1; j++) {
        // Print an asterisk (*) without adding a new line
        process.stdout.write("*");
      }

      // Move to the next line after printing spaces and asterisks for the current row
      console.log();
    }
  }
}

// Create an instance of the Solution class
const sol = new Solution();

// Define the number of rows in the inverted pyramid
let n = 5;

// Call the pattern8 method to print the inverted pyramid pattern
sol.pattern8(n);