// #1 함수 종류와 구동 원리

// 함수 선언식
function add_1(x, y) { return x + y; }

// 함수 표현식
const add_2 = function (x, y) { return x + y; };

// 화살표 함수
const add_3 = (x, y) => x + y;

// 어떤 값이 식별자에 저장될까
const add_4 = add_1; // 주소값을 복사해서 접근

console.log(add_4(123, 321));
console.log(add_1 == add_2);    // false
console.log(add_1 == add_4);    // true

console.log(Object.getOwnPropertyDescriptors(add_1));
console.log(Object.getOwnPropertyDescriptors(add_2));
console.log(Object.getOwnPropertyDescriptors(add_3)); // 화살표 함수는 내부적으로 객체를 생성하는 방식이 다름 (arguments, caller, prototype 정보 생략)
console.log(Object.getOwnPropertyDescriptors(add_4)); // == add_1





// #2 함수 저장 
let list = [
    "john", 
    27, 
    function hello_func() { console.log("hello"); } // method
];

let obj = {
    name: "john",
    age:  27,
    hello_func() { console.log("hello"); }  // method
};

function hello_func() { console.log("hello"); }

hello_func();
obj.hello_func();
list[2]();

console.log(typeof hello_func);     // function
console.log(typeof obj.hello_func); // function
console.log(typeof list[2]);        // function





// #3 메서드 변경
function hello_func() { console.log("hello"); }
function hi_func() { console.log("hi"); }
let obj_2 = {
    name: "kim",
    age: 26,
    func: hello_func // let func = hello_func
};

hello_func();
hi_func();
obj_2.func();   // hello

obj_2.func = hi_func;   // change reference
obj_2.func();   // hi





// #4 this (1)
let obj_3 = {
    name: "kim",
    age: 26,
    hello_func() {
        console.log("hello" + this.name)
    }
};

console.log(obj_3.hello_func); // [Function: hello_func]





// #5 this (2)
let user = { name: "kim" };
let admin = { name: "admin" };

// hello_func 내 this 값은 런타임에 결정
function hello_func() { console.log("hello " + this.name); }
// const hello_func = () => console.log("hello " + this.name); // SyntaxError: Identifier 'hello_func' has already been declared

// 속성 내 함수 값 추가
user.func = hello_func;
admin.func = hello_func;

// 객체의 속성 통한 호출
user.func();
admin.func();

// 대괄호 통한 접근
user["func"]();
admin["func"]();