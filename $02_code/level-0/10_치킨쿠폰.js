// #1
const solution = chicken => {
  let answer = 0;

  while (chicken >= 10) {
		const currentChickens = Math.floor(chicken / 10);
    answer += currentChickens ;
    chicken = chicken % 10 + currentChickens ;
  }

  return answer;
};

// #2
const solution_02 = (chicken) => parseInt((chicken - 1) / 9);