// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7]; 
// let num = 5; 
 
// //elements larger than a number num 
// function getElements(arr, num) { 
// for (let i = 0; i < arr.length; i++) { 
// if (arr[i] > num) { 
// console.log(arr[i]);g 
// } 
// } 
// } 
 
// getElements(arr, num); 



// for (let i = 0; i < str.length; i++) { 
// let currChar = str[i]; 
// if (ans.indexOf(currChar) == -1) { 
// //if current character is not added, then add it in 
// ans. 
// //Otherwise it is a duplicate. 
// ans += currChar; 
// } 
// } 
// let ans = ""; 
 
 
// return ans; 



let str = "apnacollege"; 
 
function countVowels(str) { 
let count = 0; 
 
for (let i = 0; i < str.length; i++) { 
if ( 
str.charAt(i) == "a" || 
str.charAt(i) == "e" || 
str.charAt(i) == "i" || 
str.charAt(i) == "o" || 
str.charAt(i) == "u" 
) { 
count++; 
} 
} 
 
return count; 
}
countVowels(str);