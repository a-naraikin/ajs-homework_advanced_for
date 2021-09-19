export default function orderByProps(obj, sortOrder) {
  const sortedArray = [];
  const arrayBetween = [];

  sortOrder.forEach((elem) => {
    sortedArray.push({ key: elem, value: obj[elem] });
  });

  for (const elem in obj) {
    if (!sortOrder.includes(elem)) {
      arrayBetween.push({ key: elem, value: obj[elem] });
    }
  }

  arrayBetween.sort((a, b) => ((a.key > b.key) ? 1 : -1));

  return sortedArray.concat(arrayBetween);
}
