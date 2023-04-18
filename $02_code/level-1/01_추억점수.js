// #1
const solution = (name, yearning, photo) => {
  // name과 yearning 배열을 객체 배열로 변환
  const people = name.map((n, i) => ({ name: n, yearning: yearning[i] }));
  
  // photo 배열 반복
  const answer = photo.map((p) => {
    let score = 0;
    // 사진 속 인물 반복
    for (let person of p) {
      // 인물 이름 검색
      const index = people.findIndex((p) => p.name === person);
      // 인물의 그리움 점수가 있는 경우 합산
      if (index !== -1) score += people[index].yearning;

    }
    return score;
  });
  return answer;
};



// #2
const solution_02 = (name, yearning, photo) => photo.map((v)=> v.reduce((a, c)=> a += yearning[name.indexOf(c)] ?? 0, 0))