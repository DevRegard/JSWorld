let input = [1, 2, 3, 4];
let count = 0;
let output = [];





// #1 - 조합 예제 (1) - for문
const combination_for = (arr) => {
  // 뽑는 개수
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      count++;
      console.log(arr[i], arr[j]);
    }
  }
};





// #2 - 조합 예제 (2) - 재귀
const combination_recursion = (arr, data, s, idx, r) => { // , output, , 현재 위치(포인팅),
  if (s == r ) {
    count++;
    console.log("조합: " + data.join(" "));
    return;
  }

  for (let i = idx; arr.length - i >= r - s; i++) {
    data[s] = arr[i];
    combination_recursion (arr, data, s + 1, i + 1, r);
  }
};





// combination_for(input);
combination_recursion(input, output, 0, 0, 2);
console.log(count);

/**
 * 상위 재귀와 하위 재귀에 특성을 유의하여 테스트
 * (ex A에 대하여 재귀가 끝나는 부분과 재귀 전체에 대해여 끝나는 부분)
 */