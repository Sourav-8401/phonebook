const quickSort = (array, key) => {
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (typeof array[i][key] === "string" && typeof pivot[key] === "string") {
      if (array[i][key].toLowerCase() < pivot[key].toLowerCase()) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    } else {
      if (array[i][key] < pivot[key]) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  }

  return [...quickSort(left, key), pivot, ...quickSort(right, key)];
};

const sortData = (dataToSort, keyToSortBy) => {
  return quickSort(dataToSort, keyToSortBy);
};

export default sortData;
