function flatten(arr) {
  
  if (arr.length === 0) {
    return [];
  }

  if (Array.isArray(arr[0])) {
    const temp = flatten(arr[0]);
    return [...temp, ...flatten(arr.slice(1))];
  }

  return [arr[0], ...flatten(arr.slice(1))]; 
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3
console.log(flatten([[1],[2],[3]])) // [1,2,3]

