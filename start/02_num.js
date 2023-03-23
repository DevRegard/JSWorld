// #1 변수
let A = 123;
console.log(A);

A = 456;
console.log(A);

// let A = 789; // SyntaxError





// #2 상수
const B = 1233; // 상수 선언과 동시에 값 초기화
console.log(B);

// B = 4566; // TypeError (상수값 재할당)

// const C; // SyntaxError: Missing initializer in const declaration
// C = 12333;





// #3 변수와 상수
let hi;
hi = "hello";

// 선언과 동시에 초기화
let halo = "hello!";

// 한 줄에 여러 변수 선언하고 초기화
let name = "John", 
    age = 13, 
    msg = "hello";

// 상수는 보통 대문자로 표기
const TESTCASE = 5;
const BIRTHDAY = "2023. 1. 30";





// #4 호이스팅
// using var
console.log(name_2); // undefined
var name_2 = "kim";
console.log(name_2); // kim

// hosting
var name_3;
console.log(name_3); // undefined
name_3 = "kim";
console.log(name_3); // kim


console.log(name_4); // ReferenceError: 선언도 안했는데 사용
let name_4 = "kim";
