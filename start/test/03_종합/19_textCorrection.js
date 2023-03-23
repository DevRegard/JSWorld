/* 9. 문자 교정 */

/* user code */
function answer(str) {
  let fix_str = "";

  // 1. 단어 기준으로 나누기 (공백 기준으로 임시 배열에 단어 넣기)
  let temp_list = str.split(" ");

  // 2. 단어의 앞 철자를 대문자로 변환 + 3. 단어들을 다시 문장으로 변환
  for (let item of temp_list) {
    // item[0].toUpperCase() + item.slice(1);
    fix_str += item[0].toUpperCase() + item.slice(1) + " ";
  }

  // 3. 단어들을 다시 문장으로 변환



  // 내 풀이 과정: 만약에 앞 자리에 " "이면, 다음 문자는 대문자로 변환
  // for (let s = 0; s < str.length; s++) {
  //   if (str[s] == " ") {
  //     str[s + 1].toUpperCase();
  //     fix_str += str[s];
  //   }
  // }

  return fix_str;
}

/* main code */
let input = [
  // TC: 1
  "Hello, My name is john",
  // TC: 2
  "This week is closed due to COVID-19",
  // TC: 3
  "fifty percent off this week",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
