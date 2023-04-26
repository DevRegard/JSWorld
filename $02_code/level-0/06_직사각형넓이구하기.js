// #1
const solution = (dots) => {
  const x = dots.map(([x, y]) => x); // x좌표만 모은 배열
  const y = dots.map(([x, y]) => y); // y좌표만 모은 배열
  
  const width = Math.abs(Math.max(...x) - Math.min(...x));  // 가로 길이
  const height = Math.abs(Math.max(...y) - Math.min(...y)); // 세로 길이
  
  return width * height; // 직사각형의 넓이 반환
};

// #2 
var s = Math.abs, solution_02 = ([[a,b],[c,d],[e,f]]) => s(a-(a==c?e:c)) * s(b-(b==d?f:d));