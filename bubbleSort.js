function bubbleSort(arr) {
  let swap;

  for(let i = arr.length; i > 0; i--) {
    swap = true;
    for(let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        swap = false;
      }
    }

    if (swap) {
      break;
    }
  }

  return arr;
}

console.log(bubbleSort([5, 8, 1, 3, 17, 4, 23, 9]));

//big O(n^2)