/*** 1. 별별별 ***/

/* user code */
function answer(num) {
    let result = "";

    for (let i = 0; i < num; i++) result += "*";

    // 향상된 for문과 함수식 안되는 이유 : 매개변수가 배열이 아니기 때문에 구현되지 않음
    // for (n in num) result += "*";
    // num.forEach((i) => result += "*");

    return result;
  }
  



  
  /* main code */
  let input = [
    // TC: 1
    5,
    // TC: 2
    7,
    // TC: 3
    12,
  ];
  
  for (let i = 0; i < input.length; i++) {
    console.log(`#${i + 1} ${answer(input[i])}`);
  }
  