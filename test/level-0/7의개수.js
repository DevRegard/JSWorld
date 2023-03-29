/*
#1 문제 설명
머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

#2 제한사항
1 ≤ array의 길이 ≤ 100
0 ≤ array의 원소 ≤ 100,000

#3 입출력 예
array	result
[7, 77, 17]	4
[10, 29]	0

#4 입출력 예 설명

입출력 예 #1
[7, 77, 17]에는 7이 4개 있으므로 4를 return 합니다.

입출력 예 #2
[10, 29]에는 7이 없으므로 0을 return 합니다.
*/

const solution = (array) => {
  let count = 0; // 7의 개수를 저장할 변수
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    while (num > 0) { // 각 자리수를 분리하기 위한 반복문
      if (num % 10 === 7) { // 현재 자리수가 7인지 확인
        count++; // 7이면 개수 증가
      }
      num = Math.floor(num / 10); // 다음 자리수로 이동
    }
  }
  return count;
} 

/*
 1. 각 수의 자리수 분리 => 7인지 확인 후 개수 카운터
 2. 예시: 77의 경우, 7이 두 자리수에 모두 있으므로 개수가 2
 3. 다른 방법: 문자열로 변환 => indexOf 함수 사용 => 7 개수 세기 (단, 비교적 덜 직관적임)
*/


const solution_2 = (array) => array.join().split("").filter((el)=>{return el=="7"}).length