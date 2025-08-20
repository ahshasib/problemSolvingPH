const reversedFun = (string) =>{
    let result = ""
    for (let i = string.length - 1 ; i >= 0; i--){
        result += string[i]
    }
     return result
}
console.log(reversedFun("Hello"))

function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  console.log(countVowels("programming")); // Output: 3
  