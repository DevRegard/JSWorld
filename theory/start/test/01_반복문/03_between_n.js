/*** 2. 두 수 사이 숫자 ***/

/* user code */
function answer(x, y) {
    let result = [];
  
    // #1 내 답안
    let swap = y;
    if (x > y) y = x, x = swap;
    
    result = new Array(y - x + 1);
    for (let i = 0; i < result.length; i++) {
      result[i] = x++;
    }
    

    // #2 솔루션 - 클래식
    if (x > y) {
      let swap = x;
      x = y;
      y = swap;
    }

    for (let i = x; i <= y; i++) result.push(i);


    // #3 솔루션 심플 - 자바스크립트 한정
    if (x > y) [x, y] = [y, x];
    for (let i = x; i <= y; i++) result.push(i);

    /*
    i. for-if 문으로 나름에 방법을 시도 했으나 실패
      => 배열 크기는 정확하나, NaN만 출력되는 문제 
    for (let i = 0; i < result.length; i++) result[i] += x;
      => 원인: 잘못된 배열 생성 문법: []가 아닌 ()
      => 원인: 배열에다가 += 기호 사용

    ii. 스와핑을 먼저하고 for-if을 시도해도 실패
      => 배열 크기는 정확하나, NaN만 출력되는 문제
      let swap = y;
      if (x > y) y = x, x = swap;
    */

    return result;
  }
  




  /* main code */
  let input = [
    // TC: 1
    [3, 7],
    // TC: 2
    [8, 3],
    // TC: 3
    [12, 10],
  ];
  for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i][0], input[i][1]));
  }