// #1
const solution = (babbling) => {
  const voice = ['aya', 'ye', 'woo', 'ma'];
  let answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < voice.length; j++) {
      if(babbling[i].indexOf(voice[j]) != -1) // 입력값에 voice 값이 포함되었다면
        babbling[i] = babbling[i].replace(voice[j], "*"); // 그 값을 *로 변경
      }
        // 순수하게 *만 있을때만 결과값 리턴
        if(babbling[i] == ("*")) answer++;
        if(babbling[i] == ("**")) answer++;
        if(babbling[i] == ("***")) answer++;
        if(babbling[i] == ("****")) answer++;
  }
  return answer;
};

// #2
const solution_02 = (babbling) => {
  let answer = 0;
  const regex = /^(aya|ye|woo|ma)+$/;

  babbling.forEach(word => {
    if (regex.test(word)) answer++;  
  })
  return answer;
}

// #3
const solution_03 = (babbling) => {
  const regex = /^(aya|ye|woo|ma)+$/;
  return babbling.filter(word => regex.test(word)).length;
}