/*** 4. 헨드폰 판매 ***/

/* user code */
function answer(employee) {
    let employee_id;
    let max = 0;

    for (let i = 0; employee.leanth; i++) {
      // 가장 큰 수 찾기
      if (employee[i] > max) {    // 1. 가장 큰 수보다 인덱스값이 크면
        max = employee[i];        // 2. 변수(가장 큰 수)에 업데이트
        employee_id = i + 1;      // 3. 변수(번호)에 1부터 n 형식으로 업데이트
      } 
    }

    return employee_id;
  }
  




  /* main code */
  let input = [
    // TC: 1
    [3, 7, 9, 6, 1],
    // TC: 2
    [2, 7, 1, 4, 3, 0, 5],
    // TC: 3
    [7, 5, 0, 1, 2, 12, 6],
  ];
  for (let i = 0; i < input.length; i++) {
    console.log(`#${i + 1} ${answer(input[i])}`);
  }
