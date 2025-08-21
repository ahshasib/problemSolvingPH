
// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.
const reversedFun = (string) =>{
    let result = ""
    for (let i = string.length - 1 ; i >= 0; i--){
        result += string[i]
    }
     return result
}
console.log(reversedFun("Hello"))


// -------------------------------------------------------------------------------


// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels (a, e, i, o, u) are in a given string.
const countVowels = (str)=> {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  console.log(countVowels("programming")); 
  
  
  // -----------------------------------------------------------------------------


// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward  and backward)
const isPalindrome = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}
console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 


// ---------------------------------------------------------------------------------


// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number
const findMax = (arr) => {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log(findMax([5, 1, 9, 3])); 


// ---------------------------------------------------------------------------------


// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array
const removeDuplicates = (arr) => {
  let unique = [];
  for (let num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }
  return unique;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); 


// ---------------------------------------------------------------------------------


// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array
const sumArray = (arr) => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4]));



// ---------------------------------------------------------------------------------


// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.
const findEvenNumbers = (arr) => {
  let evens = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));



// ---------------------------------------------------------------------------------


// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.
const capitalizeWords = (str) => {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
console.log(capitalizeWords("hello world")); 


// ---------------------------------------------------------------------------------


// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.
const factorial = (n) => {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
console.log(factorial(5)); 



// ---------------------------------------------------------------------------------



// Problem 10: PingPong Challenge
// Write a function that prints numbers from 1 to 20.
const pingPong = () => {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}
pingPong();


//--------------------------------------------  The END  -----------------------------------------------