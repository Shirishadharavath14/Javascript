//console.log('hai')


//1.Count the occurrence of each character in a given string.
// function countCharacterOccurrence(str) {
//   let result = {};
//   for (let char of str) {
//     result[char] = result[char] ? result[char] + 1 : 1;
//   }
//   return result;
// }

// const inputString = 'hello';
// console.log(countCharacterOccurrence(inputString));
// Output: { h: 1, e: 1, l: 2, o: 1 }

//2. Separate the numeric and character parts from an alphanumeric string.

function splitString(str) {
    let letters = '';
    let numbers = '';
    for (let char of str) {
      if (/[a-zA-Z]/.test(char)) {
        letters += char;
      } else if (/\d/.test(char)) {
        numbers += char;
      }
    }
    return { letters, numbers };
  }
  
  const inputString = "abc123xyz456";
  console.log(splitString(inputString));
  // // Output: { letters: "abcxyz", numbers: "123456" }
//3. Print a pyramid pattern of stars for a given number of rows.

  function printStarPyramid(n) {
    for (let i = 1; i <= n; i++) {
      let row = ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
      console.log(row);
    }
  }
  
  printStarPyramid(5);

//////////////////////////////////////////////////////////////////////////////
//4. Find Missing Number in an Array
function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}
console.log(isPalindrome("racecar"));  // Output: true
console.log(isPalindrome("hello"));   // Output: false
//////////////////////////////////////////////////////////
//5. Find the First Non-Repeating Character
function maxOccurringChar(s) {
    const freqMap = {};
    for (let char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }
    
    let maxChar = '';
    let maxCount = 0;
    for (let char in freqMap) {
        if (freqMap[char] > maxCount) {
            maxCount = freqMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}
console.log(maxOccurringChar("banana"));  // Output: 'a'


/////////////////////////////////////////////////////////////////////////
//6. Reverse Words in a Sentence

function firstNonRepeatingChar(s) {
    const freqMap = {};
    for (let char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }

    for (let char of s) {
        if (freqMap[char] === 1) {
            return char;
        }
    }
    
    return null;
}
console.log(firstNonRepeatingChar("swiss"));  // Output: 'w'

///////////////////////////////////////////////////////////
//7. Find the Longest Word in a Sentence


function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = words[0];

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}
console.log(longestWord("The quick brown fox jumps over the lazy dog"));  // Output: "jumps"


 //8.Merge two strings by taking alternate characters. If one is longer, append the remaining characters.
  
 function mergeStringsAlternating(str1, str2) {
    let result = '';
    let len = Math.min(str1.length, str2.length);
    for (let i = 0; i < len; i++) {
        result += str1[i] + str2[i];
    }
    result += str1.slice(len) + str2.slice(len);

    return result;
}
console.log(mergeStringsAlternating("abc", "12345"));  // Output: "a1b2c345"


//9.Check if a String is a Palindrome
function isPalindrome(s) {
    return s === s.split('').reverse().join('');
}
console.log(isPalindrome("racecar"));  // Output: true
console.log(isPalindrome("hello"));   // Output: false


//10. Find the Maximum Occurring Character in a String

function maxOccurringChar(s) {
    const freqMap = {};
    for (let char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }
    
    let maxChar = '';
    let maxCount = 0;
    for (let char in freqMap) {
        if (freqMap[char] > maxCount) {
            maxCount = freqMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}
console.log(maxOccurringChar("banana"));  // Output: 'a'



