/* 5. 중복 단어 제거 */

/* user code */
function answer(arr) {

  // i. 내 답안
  // let new_arr = new Set();
  // for (i in arr) new_arr.add(arr[i]);



  // ii. 모범 답안 (Set 생성 후, forEach로 값 넣기)
  let new_arr = [];
  new Set(arr).forEach((i) => new_arr.push(i));
  return new_arr;
}
// tmi: forEach에서 i는 item 약어 (index와 결이 다름)



// iii. 모범 답안 2 (입력된 배열을 Set으로 변환 = 얇은 복사)
const answer = (arr) => Array.from(new Set(arr));





/* main code */
let input = [
  // TC: 1
  ["john", "alice", "alice"],
  // TC: 2
  ["Hello", "hello", "HELLO", "hello"],
  // TC: 3
  ["kiwi", "banana", "mango", "kiwi", "banana"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
