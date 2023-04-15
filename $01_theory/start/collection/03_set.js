// #1
let set = new Set();
let num = new Set([1, 2, 3, 4, 5]);
let str = new Set("Hello!");

console.log(set);   // Set(0) {}
console.log(num);   // Set(5) { 1, 2, 3, 4, 5 }
console.log(str);   // Set(5) { 'H', 'e', 'l', 'o', '!' }





// #2 체이닝 추가
set.add(1).add(10).add(20);
console.log(set);   // Set(3) { 1, 10, 20 }





// #3 존재 여부
console.log(set.has(10));   // true
console.log(set.has(2));    // false





// #4 삭제
console.log(set.delete(1));     // true
console.log(set.delete(-1));    // false
console.log(set);   // Set(2) { 10, 20 }





// #5 set 반복문
str = new Set("Hello!");

console.log(str);   // Set(5) { 'H', 'e', 'l', 'o', '!' }

for (let item of str) {
    console.log(item);
}

for (let item of str.keys()) {
    console.log(item);
}

for (let item of str.values()) {
    console.log(item);
} /// 위에 3가지 방법 전부 결과 동일 (key가 없기 때문)

for (let item of str.entries()) {
    console.log(item);
}
/*
[ 'H', 'H' ]
[ 'e', 'e' ]
[ 'l', 'l' ]
[ 'o', 'o' ]
[ '!', '!' ]
*/