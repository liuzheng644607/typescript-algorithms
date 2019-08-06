function findSquareCount(arr: number[]) {
  if (!arr || arr.length === 0) {
    return 0;
  }

  const len = arr.length;

  const map = new Map<number, number>();
  for (let i = 0; i < len; i++) {
    const res = arr[i] * arr[i];
    if (!map.has(res)) {
      map.set(res, arr[i]);
    }
  }

  return map.size;
}
