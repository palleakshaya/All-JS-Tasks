//Map() using Reduce() Method
//Example:
const arr = [1, 2, 3, 4];
const result = arr.reduce((acc, curr) => {
  acc.push(curr * 2);
  return acc;
}, []);
console.log(result);

//Filter() using Reduce() Method
const arr1 = [5, 6, 7, 8];
const even = arr1.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(even);
