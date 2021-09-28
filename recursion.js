/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
    if (nums.length === i) return 1

    return nums[i] * product(nums, i+1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0, max=0) {
  if (words.length === i) return max

  if (words[i].length > max) max = words[i].length

  return longest(words, i+1, max)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  if (i >= str.length) return ''

  return str[i] + everyOther(str, i+2)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, start=0, end=str.length-1) {
  if (start >= end) return true
  if (str[start] !== str[end]) return false

  return isPalindrome(str, start+1, end-1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (i >= arr.length) return -1
  if (arr[i] === val) return i

  return findIndex(arr, val, i+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=str.length-1) {
  if (i < 0) return ''

  return str[i] + revString(str, i-1)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, strs = []) {
  for (let val of Object.values(obj)) {
    if (typeof val === 'object') {
      gatherStrings(val, strs)
    } else {
      if (typeof val === "string") {
        strs.push(val)
      }
    }
  }
  return strs
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  const mid = Math.floor((left + right)/2)
  if (left > right) return -1
  if (arr[mid] === val) return mid

  if (arr[mid] < val) {
    return binarySearch(arr, val, left = mid + 1, right)
  } else if (arr[mid] > val) {
    return binarySearch(arr, val, left, right = mid - 1)
  }
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
