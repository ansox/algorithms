function someRecursive(arr, callback) {
    console.log(arr);

  if (arr.length === 0) {
    return false;
  }

  if (callback(arr[0])) {
    return true;
  }


  return someRecursive(arr.slice(1), callback);
}

const isOdd = (num) => num % 2 !== 0;

console.log(someRecursive([2, 4, 5], isOdd));
console.log(someRecursive([2, 4], isOdd));
console.log(someRecursive([2, 4], val => val > 10));
console.log(someRecursive([2, 4, 11], val => val > 10));