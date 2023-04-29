// #1 
const solution = (numbers) => {
  let sum = 0;
  for (let i = 0; i <= 9; i++)
    if (!numbers.includes(i)) sum += i;
  return sum;
};

// #2
const solution_02 = numbers => [...Array(10).keys()].filter(i => !numbers.includes(i)).reduce((acc, cur) => acc + cur, 0);

// #3 
const solution_03 = numbers => 45 - numbers.reduce((cur, acc) => cur + acc, 0);