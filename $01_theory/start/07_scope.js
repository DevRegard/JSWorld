// #1 Global Scope
let x = 1;
let y = 2;
let z = 3;

console.log(x); // 1
console.log(y); // 2

{
    // Local Scope
    let x = 3;
    let y = 4;
    console.log(x); // 3
    console.log(y); // 4

    console.log(z); // 전역 변수 사용 가능

    let A = 100;
}

// 지역 변수에 영향을 받지 않은 Global Scope
console.log(x); // 1
console.log(y); // 2

// 지역 변수를 범위 밖에서 사용하면
// console.log(A); // ReferenceError: A is not defined





// #2 지역변수 중첩
let A = 1000;

{
    let B = 3000;
    let C = 4000;

    console.log(C); // 4000

    {
        let B = 5000;
        let C = 6000;

        console.log(C); // 6000
    }
}