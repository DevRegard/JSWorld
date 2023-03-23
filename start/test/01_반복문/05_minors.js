/*** 5. 무한 뺄셈 ***/

/* user code */
function answer(s, e) {
  let sequence = [];
  sequence.push(s);
  sequence.push(e);

  let sum;
  while (1) {
    // 1. 배열 요소 쉬프트
    sum = s - e;
    s = e;
    e = sum;
  
    // 2. 쉬프트 e (= sum)이 음수이면 반복문 종료
    if (e < 0) break;

    // 3. 음수가 아니면, e (= sum) 요소 추가
    sequence.push(e);
  }

  return sequence;
}
// 포인트: while문 / 배열 요소 쉬프트(e를 s로, sum값을 e로)





/* main code */
let input = [
  // TC: 1
  [9, 3],
  // TC: 2
  [6, 3],
  // TC: 3
  [13, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
