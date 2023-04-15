let result;

// #1 등차 수열 - for
const forloop_plus = (s, t, number) => { // 시작값, 등차, 반복 항수
  let acc = 0;

  for (let i = 1; i <= number; i++) {
    if (i == 1) acc += s;
    else acc += t;
    // console.log(i + "항: " + acc);
  }
  return acc;
};





// #2 등차 수열 - 재귀
const recursion_loop_plus = (s, t, number) => {
  if (number == 1) return s;
  return recursion_loop_plus(s, t, number - 1) + t;
};
/*
  number: 5, recursive(s, t, 4) + 2 => 11
  number: 4, recursive(s, t, 4) + 2 => 9
  number: 3, recursive(s, t, 4) + 2 => 7
  number: 2, recursive(s, t, 4) + 2 => 5
  number: 1, => 3
*/




// #3 등비 수열 - for
const forloop_mul = (s, r, number) => {
  let acc = 1;
  
  for (let i = 1; i <= number; i++) {
    if (i == 1) acc *= s;
    else acc *= r
    // console.log(i + "항: " + acc);
  }
  return acc;
};

// #4 등비 수열 - 재귀





// #5 팩토리얼
const factorial = (number) => {
  if (number == 1) return 1;
  return factorial(number - 1) * number;
};
/*
 5 => factorial(5 - 1) * 5
 4 => factorial(4 - 1) * 4
 3 => factorial(3 - 1) * 3
 2 => factorial(2 - 1) * 2
 1 => factorial(1 - 1) * 1
 ...
*/





// #6 피보나치 수열
const finonacci = (number) => {
  if (number == 0 || number == 1) return number;
  
  // f(n) = f(n - 1) + f(n - 2)
  return finonacci(number - 1) + finonacci(number - 2);
}



// ### OutPut ###
// result = forloop_plus (3, 2, 5);
// result = recursion_loop_plus (3, 2, 5);
// result = forloop_mul (3, 2, 5);
// result = recursion_loop_mul ();
// result = factorial(5);
result = finonacci(5);
console.log(result);