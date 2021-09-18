export default function orderByProps(obj, sortOrder) {
  const set = new Set(sortOrder);
  const arrayKeys = Object.keys(obj).sort();

  arrayKeys.forEach((elem) => set.add(elem));

  const sortedArray = [];

  set.forEach((elem) => {
    sortedArray.push({ key: elem, value: obj[elem] });
  });

  return sortedArray;
}
