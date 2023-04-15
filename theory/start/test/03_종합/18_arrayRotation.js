/* 8. 배열 회전 */

/* user code */
function answer(user) {
  let reverse = [];

  // i. 반복문으로 거꾸로 돌리기
  for (let i = user.length - 1; i >= 0; i--) 
    reverse.push(user[i]); // 혹은 쉬프트 함수


    
  // ii. 배열 길이에 절반만큼 반복하고, 자리 바꾸기(스와핑)
  let temp;
  for (let i = 0; i < user.length / 2; i++) {
    temp = user[i];
    user[i] = user[user.length - 1 - i];
    user[user.length - 1 - i] = temp;
  }
  reverse = user;


  return reverse;
}





/* main code */
let input = [
  // TC: 1
  [1, 2, 3, 4],
  // TC: 2
  [-1, 6, "hello", -15],
  // TC: 3
  ["apple", "banana", "mango"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
