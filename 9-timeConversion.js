/**
 * Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example

s = '12:01:00PM'

Return '12:01:00'.

s = '12:01:00AM'

Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in 12 hour format
Returns

string: the time in 24 hour format
Input Format

A single string s that represents a time in 12-hour clock format (i.e.: hh:mm:ss AM or hh:mm:ss PM).

Constraints

All input times are valid
Sample Input 0

07:05:45PM
Sample Output 0

19:05:45
 */

function timeConversion(s) {

  let hour = ''
  let newHour = []
  let h = []
  let m = []
  let ss = []

  for (let index = 0; index < s.length; index++) {
    if(s[index] === 'A'){
      hour = 'AM'
    }
    if(s[index] === 'P'){
      hour = 'PM'
    }  

    if(s[index] != 'A' && s[index] != 'P' && s[index] != 'M'){
      newHour.push(s[index])
    }
  }

  for (let index = 0; index < newHour.length; index++) {
    if(index === 0 || index == 1){
      h.push(newHour[index])
    }
    if(index === 3 || index == 4){
      m.push(newHour[index])
    }
    if(index === 6 || index == 7){
      ss.push(newHour[index])
    }
  }

  console.log(h);
  console.log(m);
  console.log(ss);

}

timeConversion('07:05:45PM')
