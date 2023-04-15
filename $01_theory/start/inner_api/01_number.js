// #1 형변환
let us = 1e-6;

console.log(us.toString());
console.log(typeof us.toString());  // string
console.log(typeof String(us));     // string
console.log(typeof (us + ""));      // string





// #2 자리 수 표현
let num_1 = 125.0;
let num_2 = 123.456;

console.log(num_1 - num_2);
console.log((num_1 - num_2).toFixed(5));     // 소수점 자릿수
console.log((num_1 - num_2).toPrecision(5)); // 정수, 소수점 자릿수





// #3 Number 자료형 확인
console.log(Number.isNaN(0.1234));  // false
console.log(!Number.isNaN(0.1234)); // true
console.log(Number.isFinite(-123));     // true (유한수)
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite("hello"));  // false





// #4 정수와 실수 형 변환
console.log(Number.parseInt("12345"));  // 12345
console.log(parseInt("123px"));         // 123
console.log(Number.parseFloat("1.25em"));   // 1.25
console.log(parseFloat("1.25em"));          // 1.25
console.log(typeof parseFloat("1.25em"));   // number