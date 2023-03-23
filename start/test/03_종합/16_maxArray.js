/* 6. 배열 내 최대값 구하기 */

/* user code */
function answer(arr) {
  
  // i. 배열 첫 요소 초기화
  let max = arr[0];
  // ii. 안전하게 가장 작은 값 초기화
  max = Number.MIN_SAFE_INTEGER;


  for (let i = 0; i < arr.length; i++)
    if (arr[i] > max) max = arr[i];

  return max;
}



// iii. Math.max 사용
const answer = (arr) => Math.max.apply(null, arr);





/* main code */
let input = [
  // TC: 1
  [1, 6, 5, 2, 3],
  // TC: 2
  [19, 41, 23, -4, 17],
  // TC: 3
  [-64, -27, -41, -33, -59],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
