// typeof
let str = "hello world";
console.log(typeof str);

console.log(typeof undefined);
console.log(typeof 123);
console.log(typeof 456n); // bigint
console.log(typeof 123.123);
console.log(typeof true);
console.log(typeof "hello");
console.log(typeof Symbol("id"));
console.log(typeof Math); // object
console.log(typeof null); // object: 하위 버전 호환성으로 표기
console.log(typeof console.log); // function





// boolean
let name_check = true;
let age_check = false;

let value_check = 10 > 3;
console.log(value_check); // true





// null
const null_check = null;
console.log(null_check === null); // true





// number
let num_1 = 123.0;
let num_2 = 123.456;
let num_3 = 1 / 0;

console.log(num_1 - num_2); // output: -0.456 
/**
 * 오차 존재: 컴퓨터는 소수점 연산 100% 클린하게 불가, 
 * 변수 메모리 한계, 최적화 연산 과정에서 오차 발생
 *  => Math 를 통해서 오차 해결 가능함
 * */
console.log((num_1 - num_2).toFixed(3)); // 소숫점 자릿수 3 이하에 숫자는 모두 반올림 처리
console.log(num_3);
console.log(num_1 / "hello");





// string
let str_1 = "hello";
let str_2 = 'hello';

let num = 3;
let str_3 = `hello_${num}`;

console.log(str_3);