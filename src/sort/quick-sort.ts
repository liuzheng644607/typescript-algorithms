const quickSort = (arr: number[]) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];
    if (element < pivot) {
      left.push(element);
    } else {
      right.push(element);
    }
  }

  let sorted: number[] = quickSort(left);
  sorted.push(pivot);
  sorted = sorted.concat(quickSort(right) || []);

  return sorted;
};


export default quickSort;
