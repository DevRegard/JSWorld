const fs = require("fs");
const input = fs.readFileSync("./input.txt","utf8");

console.log(input);

/* 
이 코드는 테스트 파일에 있는걸 읽어와서 출력하는 구나 라는 걸
결과론적으로 입증 할 수 있었죠
*/

let 안녕 = "하세요";
let hi = "hello";
let Hi = "Hello";

console.log(안녕);
console.log(hi);
console.log(Hi);