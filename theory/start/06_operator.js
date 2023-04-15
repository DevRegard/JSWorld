// #1 산술 연산자
console.log(31 + 10);
console.log(31 - 10);
console.log(31 * 10);
console.log(31 / 10);           // 3.1  나눗셈
console.log(parseInt(31 / 10)); // 3    몫
console.log(31 % 10);
console.log(3 ** 10);





// #2 대입 연산자
let num_1 = 123;
let num_2 = 456;
let str_1 = "hello";
let str_2 = "world";

let num_3, str_3;
num_3 = num_1 + num_2;
str_3 = str_1 + str_2;

console.log(num_3);
console.log(str_3);

let num_4 = num_1 - num_2;
console.log(num_4);





// #3 복합 대입 연산자
let num_10 = 10;

let result_1, result_2, result_3, result_4, result_5;
result_1 = result_2 = result_3 = result_4 = result_5 = 31;

result_1 += num_10; // 41
result_2 -= num_10; // 21
result_3 *= num_10; // 310
result_4 /= num_10; // 3.1
result_5 %= num_10; // 1

console.log(result_1);
console.log(result_2);
console.log(result_3);
console.log(result_4);
console.log(result_5);





// #4 증감 연산자
let num_6, result_6;

num_6 = 100;
result_6 = num_6++;     // 초기화할 때 값 적용 안 됨, 이후 증감
console.log(result_6);
console.log(num_6);

num_6 = 100;
result_6 = ++num_6;     // 초기화활 때 값 적용, 이후 증감
console.log(result_6);
console.log(num_6);

num_6 = 100;
result_6 = num_6--;     // 초기화할 때 값 적용 안 됨, 이후 감소
console.log(result_6);
console.log(num_6);

num_6 = 100;
result_6 = --num_6;     // 초기화활 때 값 적용, 이후 감소
console.log(result_6);
console.log(num_6);





// #5 비교 연산자
console.log("Z" > "A");             // true
console.log("Hello" < "Hi");        // true (Hi가 더 큼)
console.log("Hello" >= "Helloo");   // false (o 하나가 더 많음)
console.log("5" <= 10);     // true

// == 은 단순 값 같음, === 자료형까지 같음 판단
console.log(true == 1);     // true
console.log(false != 123);  // false (123은 변환하면 true임)
console.log(true === 1);    // false (각각의 타입이 다름)
console.log(false !== 123);  // true (타입 다른게 맞음)





// #6 논리 연산자
console.log(true || false);         // true
console.log(Boolean(0 || false));   // false
console.log(Boolean(123 || false)); // true
console.log(Boolean(123 && 0));     // false 
console.log(Boolean(false && true));// false
console.log(Boolean(true && 3));    // true
console.log(Boolean(0 && false));   // flase
console.log(!false);        // true
console.log(!123);          // false