/** product: calculate the product of an array of numbers. */

// function product(nums) {
//   let product = 1;

//   function _product(nums, i) {
//     if (nums.length === i) return;
//     product *= nums[i];
//     _product(nums, i + 1);
//   }
//   _product(nums, 0);
//   return product;
// }

function product(nums, i = 0) {
  if (nums.length === i) return 1;
  return nums[i] *= product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

// function longest(words) {
//   let longestWordLength = 0;

//   function _longest(words, i) {
//     if (words.length === i) return;
//     if (words[i].length > longestWordLength) longestWordLength = words[i].length;
//     _longest(words, i + 1);
//   }

//   _longest(words, 0);
//   return longestWordLength;
// }

function longest(words, i = 0, longestWordLength = 0) {
  if (words.length === i) return longestWordLength;
  if (words[i].length > longestWordLength) {
    return longest(words, i + 1, words[i].length) ;
  } else {
    return longest(words, i + 1, longestWordLength) 
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  let everyOtherStr = "";

  function _everyOther(str, i) {
    if (str.length === i) return;
    if (i % 2 === 0) everyOtherStr += str[i];
    _everyOther(str, i + 1);
  }

  _everyOther(str, 0);
  return everyOtherStr;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  let palindromeBool = true;

  function _isPalindrome(str, i) {
    if (i === Math.floor(str.length / 2)) return;
    if (str[i] !== str[str.length - 1 - i]) palindromeBool = false;
    _isPalindrome(str, i + 1);
  }

  _isPalindrome(str, 0);
  return palindromeBool;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  let idx = -1;

  function _findIndex(arr, val, i) {
    if (i === -1) return;
    if (arr[i] === val) idx = i;
    _findIndex(arr, val, i - 1);
  }

  _findIndex(arr, val, arr.length - 1);
  return idx;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  let reversedStr = "";

  function _revString(str, i) {
    if (i === -1) return;
    reversedStr += str[i];
    _revString(str, i - 1);
  }

  _revString(str, str.length - 1);
  return reversedStr;
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];

  function _gatherStrings(obj, i) {
    let keys = Object.keys(obj);

    // if we've exhausted all the keys, then this function in the call stack 
    // has been completed and is popped off the call stack, so we reach the next 
    // function at the top of the call stack 
    // (if it exists, this would be another _gatherStrings, but called with the next object up's keys)
    if (i === keys.length) return;
    let key = keys[i];

    // if the value at that key is another obj, recurse!
    if (typeof obj[key] === "object") {
      _gatherStrings(obj[key], 0)
      // otherwise check to see if it's a string; if it is, go ahead and add to our array
    } else if (typeof obj[key] === "string") strings.push(obj[key]);

    // iterate through each key
    _gatherStrings(obj, i + 1);
  }

  // getting the party started
  _gatherStrings(obj, 0);
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  let idx = -1;
  let min = 0;
  let max = arr.length;

  function _binarySearch(arr, val, min, max) {
    if (min > max) return;

    let i = Math.floor((min + max) / 2);

    if (arr[i] === val) {
      idx = i;
      return idx;

    } else {
      if (arr[i] > val) {
        _binarySearch(arr, val, min, i - 1);
      } else {
        _binarySearch(arr, val, i + 1, max);
      }
    }
  }

  _binarySearch(arr, val, min, max);
  return idx;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
