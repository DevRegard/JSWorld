// #1
const solution = (s, n) => {
  let answer = '';

	// s의 각 문자, 암호화 수행 
  for (let i = 0; i < s.length; i++) {
    let char = s[i];

		// 만약 공백이면,
    if (char === ' ') {
      answer += ' '; // 똑같이 공백 저장
      continue;      // 다음 반복문 이동 
    }
    let code = s.charCodeAt(i);
    if (code >= 65 && code <= 90)       // 대문자
      char = String.fromCharCode((code - 65 + n) % 26 + 65);
    else if (code >= 97 && code <= 122) // 소문자
      char = String.fromCharCode((code - 97 + n) % 26 + 97);
    
    answer += char;
  }
  return answer;
};


// #2
const solution_02 = (s, n) => s.replace(/[a-zA-Z]/g, c => String.fromCharCode((c.charCodeAt(0) & 96) + ((c.toLowerCase().charCodeAt(0) + n - 97) % 26) + 1));