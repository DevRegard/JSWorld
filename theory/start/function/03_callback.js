// #1 Callback Function
function callback_func() {
    console.log("콜백 함수");
}

function higher_order_func(callback) {
    console.log("고차 함수");
    callback(); // 2. 주소값 호출
}

higher_order_func(callback_func); // 1. 콜백 함수의 주소값 전달





// #2 콜백 함수 예제 - 계산기
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;

const calculator = (callback, x, y) => callback(x, y);

// function calculator(callback, x, y) {
//     return callback(x, y);
// }

console.log(calculator(add, 70, 30));   // 100
console.log(calculator(sub, 70, 30));   // 40
console.log(calculator(mul, 70, 30));   // 2100
console.log(calculator(div, 70, 30));   // 2.3333333333333335





// #3 call by reference const test
const a = { v: 1 };
// const add_call = function (b) { b.v++; };
const add_call = b => b.v++;
add_call(a);
console.log(a.v);   // 2
/// 변수 타입에 상관없이 call by reference 현상은 동일함





// #4 연습 문제
const MAX = (x, y) => x > y ? x : y;

console.log(MAX(0, 3));     // 3
console.log(MAX(-1, 5));    // 5
console.log(MAX(100, 7));   // 100