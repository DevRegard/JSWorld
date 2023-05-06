// #1 
const solution = (number, n, m) => (number % n === 0 && number % m === 0) ? 1 : 0;

// #2 
const solution_02 = (number, n, m) => +!(number % n || number % m);