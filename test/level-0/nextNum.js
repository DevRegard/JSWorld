/* 프로그래머스 - 다음에 올 숫자

1) 문제 설명
등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 
마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

2) 제한사항
2 < common의 길이 < 1,000
-1,000 < common의 원소 < 2,000
common의 원소는 모두 정수입니다.
등차수열 혹은 등비수열이 아닌 경우는 없습니다.
등비수열인 경우 공비는 0이 아닌 정수입니다.

3) 입출력 예
common	      result
[1, 2, 3, 4]	5
[2, 4, 8]	    16

4) 입출력 예 설명
입출력 예 #1
[1, 2, 3, 4]는 공차가 1인 등차수열이므로 다음에 올 수는 5이다.

입출력 예 #2
[2, 4, 8]은 공비가 2인 등비수열이므로 다음에 올 수는 16이다.
*/

const solution = (common) => {
  // 등차 수열
  if (common[common.length-1] - common[common.length-2] === common[common.length-2] - common[common.length-3])
    return common[common.length-1] + (common[common.length-1] - common[common.length-2]); // an + an - d
  // 등비 수열
  else 
    return common[common.length-1] * (common[common.length-1] / common[common.length-2]); // an * an / d
};

/*
1. 매개변수는 등차 수열 혹은 등비 수열
2. 만약 '등차 수열'이 아니라면? 조건 상관없이 else 구문 실행 가능 (if ~ else 형태)
3. 등차 수열이면 '마지막 요소 + 마지막 요소 - 공차', 
4. 등비 수열이면 '마지막 요소 * 마지막 요소 / 공비'
*/


const solution_2 = c => c[1]-c[0] === c[2]-c[1] ? c[c.length-1] + c[1] - c[0] : c[c.length-1] * c[1] / c[0]