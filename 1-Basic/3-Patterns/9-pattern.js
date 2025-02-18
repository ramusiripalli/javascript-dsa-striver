/*
This code combines two patterns: a pyramid and an inverted pyramid, to create a diamond-like structure.
For example:
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

class Solution {
  // Method to print the combined pattern (pyramid + inverted pyramid)
  pattern9(n) {
    // Call pattern7 to print the pyramid
    this.pattern7(n);
    // Call pattern8 to print the inverted pyramid
    this.pattern8(n);
  }

  // Method to print the pyramid pattern
  pattern7(n) {
    // Outer loop: iterates from 1 to n (inclusive)
    // This loop controls the number of rows in the pyramid.
    for (let i = 1; i <= n; i++) {
      // First inner loop: prints spaces before the asterisks
      // This loop runs from 1 to (n - i) to add the required spaces for alignment.
      for (let j = 1; j <= n - i; j++) {
        // Print a space without adding a new line
        process.stdout.write(" ");
      }

      // Second inner loop: prints the asterisks
      // This loop runs from 1 to (2 * i - 1) to print the asterisks for the current row.
      // The number of asterisks increases by 2 for each row.
      for (let j = 1; j <= 2 * i - 1; j++) {
        // Print an asterisk (*) without adding a new line
        process.stdout.write("*");
      }

      // Move to the next line after printing spaces and asterisks for the current row
      console.log();
    }
  }

  // Method to print the inverted pyramid pattern
  pattern8(n) {
    // Outer loop: iterates from 1 to n (inclusive)
    // This loop controls the number of rows in the inverted pyramid.
    for (let i = 1; i <= n; i++) {
      // First inner loop: prints spaces before the asterisks
      // This loop runs from 1 to (i - 1) to add the required spaces for alignment.
      for (let j = 1; j <= i - 1; j++) {
        // Print a space without adding a new line
        process.stdout.write(" ");
      }

      // Second inner loop: prints the asterisks
      // This loop runs from 1 to (2 * n - 2 * i + 1) to print the asterisks for the current row.
      // The number of asterisks decreases by 2 for each row.
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

// Define the number of rows for the pyramid and inverted pyramid
let n = 5;

// Call the pattern9 method to print the combined pattern
sol.pattern9(n);