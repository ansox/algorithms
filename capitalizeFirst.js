function capitalizeFirst(arr) {
  if (arr.length === 0) {
    return [];
  }

  const first = arr[0][0].toUpperCase() + arr[0].slice(1);

  return [first, ...capitalizeFirst(arr.slice(1))];
}

console.log(capitalizeFirst(['car', 'taco', 'banana', 'anso'])); // ['Car', 'Taco', 'Banana']