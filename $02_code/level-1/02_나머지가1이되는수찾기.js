// #1
const solution = (n) => {
  for (let x = 2; x <= n; x++)
      if (n % x === 1) return x;
}

// #2
const solution_02 = n => Array.from({ length: n - 1 }, (_, i) => i + 2).find(x => n % x === 1);