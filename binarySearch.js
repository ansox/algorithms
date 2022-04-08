function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let middle = 0;

  while(start <= end) {
    middle = Math.floor((start + end) / 2);

    console.log('middle => ',middle);
    console.log('start =>', start);
    console.log('end => ', end);
    console.log('arr[middle] => ', arr[middle]);
    if (arr[middle] === num) {
      return middle;
    }

    if (arr[middle] < num) {
      start = middle + 1;
    }

    if (arr[middle] > num) {
      end = middle - 1;
    }
  }

  return -1;

}

console.log(binarySearch([1, 2, 5, 8, 9, 10, 15, 21], 3)); // 2