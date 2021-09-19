export default function orderByProps(obj, sortOrder) {
  const sortedArray = [];

  set.forEach((elem) => {
    sortedArray.push({ key: elem, value: obj[elem] });
  });

  return sortedArray;
}
