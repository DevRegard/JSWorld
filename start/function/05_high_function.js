// #1 sort() 문제점과 해결 - 숫자
let nums = [1, -1, 4, 0, 10, 20, 12];

console.log(nums.sort());
console.log(nums.reverse());

let ascending_order = (x, y) => x - y;  // 오름차순 정렬 ( > 0)
let descending_order = (x, y) => y - x; // 내림차순 정렬
/// 0보다 큰 값으로 반환이 될 때, 두 값의 위치가 바뀌는 메커니즘

console.log(nums.sort(ascending_order));
console.log(nums.sort(descending_order));





// #2 sort() 문제점과 해결 - 대소문자
let fruits = ["apple", "Orange", "orange", "melon"];
console.log(fruits.sort());
console.log(fruits.reverse());

// 오름 차순
let ascending_string_order = (x, y) => {
    x = x.toUpperCase();
    y = y.toUpperCase();

    if (x > y) return 1;        // 자리 바꿈 [작은 값이 앞으로]
    else if (y > x) return -1;  // 옮은 정렬
    else return 0;              // 아무것도 하지 않음
};

console.log(fruits.sort(ascending_string_order));



// 내림 차순
let descending_string_order = (x, y) => {
    x = x.toUpperCase();
    y = y.toUpperCase();

    if (x < y) return 1;        // 자리 바꿈 [큰 값이 앞으로]
    else if (y < x) return -1;  // 옮은 정렬
    else return 0;              // 아무것도 하지 않음
};

console.log(fruits.sort(descending_string_order));





// #3 sort() 고차함수 공용화
nums = [1, -1, 4, 0, 10, 20, 12];
fruits = ["apple", "Orange", "orange", "melon"];

let ascending_public_order = (x, y) => {
    if (typeof x === "string") x = x.toUpperCase();
    if (typeof y === "string") y = y.toUpperCase();
    return x > y ? 1 : -1;
};

let descending_public_order = (x, y) => {
    if (typeof x === "string") x = x.toUpperCase();
    if (typeof y === "string") y = y.toUpperCase();
    return x < y ? 1 : -1;
};

console.log(nums.sort(ascending_public_order));
console.log(nums.sort(descending_public_order));

console.log(fruits.sort(descending_public_order));
console.log(fruits.sort(descending_public_order));



// #4 forEach() - 배열 요소 별 콜백 함수 각각에 실행
/*
  forEach(function(item, index, array) {})
  배열 요소 = item, 배열 위치, 배열
*/
nums = [1, 2, 3];
for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}



nums.forEach(function (i) {
    console.log(i);
});



nums.forEach((i) => console.log(i));





// #5 map() - 배열 요소 별 함수 호출 및 결과를 배열로 반환
nums = [1, 2, 3, 4, 5];
let use_for_loop = [];

for (let i = 0; i < nums.length; i++) {
    use_for_loop.push(nums[i] * 2);
}
console.log(use_for_loop);



let use_map = nums.map(function (item) {
    return item * 2;
});
console.log(use_map);



let use_map_simple = nums.map((item) => item * 2);
console.log(use_map_simple);





// #6 find() - 조건에 맞는 '하나의 값' 반환
let users = [
    {name: 'bob', age: 17, job: false},
    {name: 'alice', age: 20, job: false},
    {name: 'john', age: 27, job: true}
];

let find_job = users.find(function (user) {
    return user.job == false;
});
console.log(find_job);



let find_age = users.find((user) => user.age >= 19);
console.log(find_age);





// #7 filter() - 조건에 맞는 '모든 값(배열)' 반환
let filter_job = users.filter(function (user) {
    return user.job == false;
});
console.log(filter_job);



let filter_age = users.filter((user) => user.age >= 19);
console.log(filter_age);





// #8 reduce() - 요소 별 함수 수행 누적 결과값 반환
/*
    reduce(accumulator = 누적값, item, index, array)
    accumulator 초깃값을 지정 안하면 배열 0번째로 초기화됨
*/
nums = [1, 2, 3, 4, 5];
let call_count = 0;

console.log("result\tvalue\t\index");
let sum = nums.reduce(function (accumulator, item, index, array) {
    console.log(accumulator, "\t\t", item, "\t\t", index);
    call_count++;
    return accumulator + item;
}, 0); // accumulator 초깃값 인덱스 설정

console.log(call_count);    // 4
console.log(sum);           // 15



let sum_simple = nums.reduce((accumulator, item, index, array) => {
    console.log(accumulator, "\t\t", item, "\t\t", index);
    call_count++;
    return accumulator + item;
}, 0);

console.log(sum_simple);