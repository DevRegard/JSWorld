/* 4. 요일 구하기 */

/* user code */
function answer(str) {
  // 1. 요일 배열 생성
  let week = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );
  
  // 2. Date 객체 생성
  let date = new Date(str);

  // 3. getDay() 사용
  let day = week[date.getDay()];

  return day;
}





/* main code */
let input = [
  // TC: 1
  "2021-01-27",
  // TC: 2
  "2021-02-27",
  // TC: 3
  "2021-03-14",
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
