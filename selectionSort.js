function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (i != min) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
      console.log(i, arr);
    }
  }

  return arr;
}

console.log(selectionSort([34, 22, 20, 19, 17]));