let input = ["A", "B", "C"];
let count = 0;

// #1 - 순열 예제 (1) - for문

const permutation_for = (arr) => {
  // 1. 첫번째 index 위치시킬 요소 [i, 0, 0]
  for (let i = 0; i < arr.length; i++) {  
    // 2. 두번째 index 위치시킬 요소 [i, j, 0]
    for (let j = 0; j < arr.length; j++) {
        if (i == j) continue;
        // 3. 세번째 index 위치시킬 요소 [i, j, k]
        for (let k = 0; k < arr.length; k++) {
          if (i == k) continue;
          if (j == k) continue;

          console.log(arr[i], arr[j], arr[k]);
          count++;
        }
      }
    }
}; 


// #2 순열 예제 (2) - 재귀
const permutation_recursion = (arr, s, r) => { // 배열, 시작위치(포인터), 뽑을 개수
  // 1. 재귀함수를 멈춰야할 조건
  if (s == r) {
    count++;
    console.log(arr.join(" "));
    return;
  }

  // 2. 재귀를 돌면서 변경되어야 될 부분 (메인로직)
  for (let i = s; i < arr.length; i++) {
    [arr[s], arr[i]] = [arr[i], arr[s]];  // SWAP
    permutation_recursion(arr, s + 1, r);
    [arr[s], arr[i]] = [arr[i], arr[s]];  // 원상 복귀
  }
};


// 결과값
// permutation_for(input);
permutation_recursion(input, 0, 2);
console.log(count);