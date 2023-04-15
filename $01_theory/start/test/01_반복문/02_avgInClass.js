/*** 3. 반 평균 ***/

/* user code */
function answer(score) {
    let average = 0;

    for (let i in score) {
      average += score[i];
        // average = sum / i; // 잘못된 코드
    }

    average /= score.length;
  
    return average.toFixed(2);
  }
  /*
    1. average = sum / i; 등 반복문 내부에서 잘못된 코드 유의
    2. sum 변수를 생성하지 않고 average에서 바로 연산하는 방법
    3. toFixed() 는 나눠서 사용하는 것이 안정적임
  */





// 문제 풀이
function answer_2(score) {
  let average = 0;

  // 1. 반 인원만큼 시험 점수 더하기
  for (let i = 0; i < score.length; i++) average += score[i];

  // 2. 반 인원 수 만큼 더한 점수를 나눠 평균을 구함
  average /= score.length;

  // 3. 소수 둘째자리까지 표현 (반올림 처리)
  average = average.toFixed(2);

  return average;
}
  




  /* main code */
  let input = [
    // TC: 1
    [80, 95, 65, 70, 100],
    // TC: 2
    [82, 77, 51, 64, 73, 90, 80],
    // TC: 3
    [100, 71, 59, 88, 72, 75, 91, 93],
  ];
  
  for (let i = 0; i < input.length; i++) {
    console.log(`#${i + 1} ${answer(input[i])}`);
  }
  