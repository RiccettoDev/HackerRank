/**
 * Staircase detail

This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer
Print

Print a staircase as described above.

Input Format

A single integer, , denoting the size of the staircase.

Output Format

Print a staircase of size  using # symbols and spaces.

Note: The last line must have  spaces in it.

Sample Input

6 
Sample Output

     #
    ##
   ###
  ####
 #####
######
 */

function staircase(n) {

   let line = n + 1

   for (let index = 1; index < line; index++) {
      let space = ' '.repeat(n-index)
      let hashe = '#'.repeat(index)
      console.log(space + hashe);
   }

}

staircase(3)
