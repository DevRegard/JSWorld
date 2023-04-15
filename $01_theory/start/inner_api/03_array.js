// #1 배열
let arr_1 = new Array(10);
let arr_2 = [];

console.log(arr_1); // [ <10 empty items> ]
console.log(arr_2); // []

let fruits = ["apple", "orange", "melon"];
console.log(fruits);            // [ 'apple', 'orange', 'melon' ]
console.log(fruits.length);     // 3
console.log(fruits[0]);         // apple
console.log(fruits[1]);         // orange
console.log(fruits[2]);         // melon

fruits[1] = "kiwi";
console.log(fruits);    // [ 'apple', 'kiwi', 'melon' ]





// #2 배열의 실체
let nums = [];

nums[0] = "one";
nums[1] = "two";
console.log("배열1의 길이 = " + nums.length);
console.log(nums);

nums["once"] = "once";
nums["twice"] = "twice";
console.log("배열2의 길이 = " + nums.length); // 길이 반영 안됨
console.log(nums);

// 내부적으로 0,1,2에 대한 속성과 값을 지니고 있음
console.log(Object.getOwnPropertyDescriptors(nums));





// #3 배열 타입 확인
let num = 123.456;
let str = "here i am";
fruits = ["apple", "orange", "melon"];

console.log(Array.isArray(num));        // false
console.log(Array.isArray(str));        // false
console.log(Array.isArray(fruits));     // true

console.log(fruits);            // [ 'apple', 'orange', 'melon' ]
console.log(fruits.length);     // 3





// #4 배열 요소 삭제
delete fruits[1];
console.log(fruits);            // [ 'apple', <1 empty item>, 'melon' ]
console.log(fruits.length);     // 3
/// 업데이트가 제대로 이루어지지 않기 때문에 delete를 잘 사용하지 않음





// #5 배열 추가/삭제 - LIFO - Back
fruits = ["apple", "orange", "melon"];
let ret;

ret = fruits.push("watermelon");
console.log(fruits);        // [ 'apple', 'orange', 'melon', 'watermelon' ]
console.log(fruits.length); // 4
console.log(ret);           // 4

ret = fruits.pop();
console.log(fruits);        // [ 'apple', 'orange', 'melon']
console.log(fruits.length); // 3
console.log(ret);           // 삭제된 데이터





// #6 배열 추가/삭제 - LIFO - front
ret = fruits.unshift("watermelon");
console.log(fruits);        // [ 'watermelon', 'apple', 'orange', 'melon' ]
console.log(fruits.length); // 4
console.log(ret);           // 4

ret = fruits.shift();
console.log(fruits);        // [ 'apple', 'orange', 'melon']
console.log(fruits.length); // 3
console.log(ret);           // 삭제된 데이터





// #7 배열 삭제/변경
fruits = ["apple", "orange", "melon"];
ret;

// 매개변수 인덱스 이후로 배열을 잘라서 리턴함
// console.log(fruits.splice(1)); // [ 'orange', 'melon' ]

// 이후 원래 있던 배열은 잘린채로 남아있음
ret = fruits.splice(1);
console.log(ret);       // [ 'orange', 'melon' ]
console.log(fruits);    // [ 'apple' ]

// 범위를 정해서 특정 인덱스까지 자르기
fruits = ["apple", "orange", "melon", "strawbelly"];
ret = fruits.splice(1, 1);
console.log(ret);       // [ 'orange' ]
console.log(fruits);    // [ 'apple', 'melon', 'strawbelly' ]

// 특정 자리를 삭제함과 동시에 그 자리에 데이터 추가
ret = fruits.splice(1, 1, "manggo", "kiwi");
console.log(ret);
console.log(fruits);





// #8 배열 삭제 (원본 영향 x)
fruits = ["apple", "orange", "melon"];

console.log(fruits.slice(1));   // [ 'orange', 'melon' ]
console.log(fruits);            // [ 'apple', 'orange', 'melon' ]

console.log(fruits.slice(1, 2));    // [ 'orange' ]
console.log(fruits.slice(-2));      // [ 'orange', 'melon' ]





// #9 다중 배열 병합
fruits = ["apple", "orange", "melon"];
fruits_add = ["cherry", "banana"];

console.log(fruits.concat(fruits_add));
console.log(fruits);





// #10 배열 반복문
fruits = ["apple", "orange", "melon"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}



for (let fruit of fruits) {
    console.log(fruit);
}



for (let key in fruits) {
    console.log(key);           // 배열 길이 만큼의 인덱스
    console.log(fruits[key]);
}





// #11 배열 탐색
fruits = ["apple", "orange", "banana", "orange", "melon"];

console.log(fruits.indexOf("orange"));    // 1
console.log(fruits.indexOf("Orange"));    // -1 (배열에 없음)
console.log(fruits.indexOf("orange", 2)); // 특정 인덱스부터 탐색



console.log(fruits.lastIndexOf("orange"));       // 3
console.log(fruits.lastIndexOf("orange", -3));   // 1
console.log(fruits.lastIndexOf("orange", 0));   // -1



console.log(fruits.includes("orange")); // true
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("Orange")); // false
console.log(fruits.includes(0));        // false





// #12 배열 정렬/반전
nums = [1, -1, 4, 5, 2, 0];
console.log(nums.sort());
console.log(nums.reverse());

fruits = ["apple", "orange", "banana", "melon"];
console.log(fruits.sort());   // 아스키코드, 유니코드 등 내부값 기준
console.log(fruits.reverse());





// #13 배열 변환
fruits = ["apple", "orange", "banana", "melon"];
str = fruits.join();
console.log(str);   // apple,orange,banana,melon

let str_separator = fruits.join(";");
console.log(str_separator); // apple;orange;banana;melon
let result = str_separator.split(";");
console.log(result);        // [ 'apple', 'orange', 'banana', 'melon' ]