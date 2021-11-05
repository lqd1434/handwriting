export const chunk = (arr: any[], size: number) => {
  const remainder = arr.length % size;
  const chunkLen = Math.floor(arr.length / size);
  const list: any[] = [];
  for (let i = 0; i < chunkLen; i++) {
    list.push(arr.slice(i * size, (i + 1) * size));
  }
  list.push(arr.slice(-remainder));
  return list;
};
