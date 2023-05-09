// #1
const solution = chicken => {
  let answer = 0;

	// 1. 쿠폰 수 10 이하 반복
  while (chicken >= 10) {
		// 2. 쿠폰 수의 10 나눈 몫 구하기 
		const currentChickens = Math.floor(chicken / 10);
		// 3. 쿠폰 수 업데이트 
    answer += currentChickens ;
		// 4. 새로운 쿠폰 수 계산 
    chicken = chicken % 10 + currentChickens ;
  }

  return answer; // 5. 쿠폰 수 최종값 반환 
};

// #2
const solution_02 = (chicken) => parseInt((chicken - 1) / 9);