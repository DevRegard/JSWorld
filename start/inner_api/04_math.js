// #1 최대값, 최소값
console.log(Math.max(1, -1));   // 1
console.log(Math.min(1, -1));   // -1

console.log(Math.max(1, -1, 5, 23, 17, -4));    // 23
console.log(Math.min(1, -1, 5, 23, 17, -4));    // -4

let nums = [1, -1, 5, 23, 17, -4]

// apply
console.log(Math.max.apply(null, nums));
console.log(Math.min.apply(null, nums));

// spread
console.log(Math.max(...nums));
console.log(Math.min(...nums));





// #2 절대값 ABS
console.log(Math.abs(1));          // 1
console.log(Math.abs(-1));         // 1
console.log(Math.abs(-Infinity));  // Infinity





// #3 랜덤
console.log(Math.E);    // 2.718281828459045
console.log(Math.PI);   // 3.141592653589793

console.log(Math.random()); // 0 ~ 1 사이 난수
console.log(Number.parseInt(Math.random() * 10)); // 0 ~ 10 사이
console.log(Number.parseInt(Math.random() * 100)); // 0 ~ 100 사이
console.log(Number.parseInt(Math.random() * 1000)); // 0 ~ 1000 사이

for (let i = 0; i < 10; i++) {
    console.log(Number.parseInt(Math.random() * 1000));
}





// #4 제곱, 제곱근, 소수점 
console.log(Math.pow(2, 3));    // 8
console.log(2 ** 3);            // 8

console.log(Math.sqrt(4));  // 2
console.log(Math.sqrt(2));  // 1.4142135623730951



// 반올림
console.log(Math.round(3.5));   // 4 (올림)
console.log(Math.round(-2.3));  // -2 (내림)
console.log(Math.round(-2.7));  // -3 (올림)



// 올림
console.log(Math.ceil(3.5));    // 4
console.log(Math.ceil(-2.3));   // -2
console.log(Math.ceil(-2.7));   // -2



// 내림
console.log(Math.floor(3.7));   // 3
console.log(Math.floor(-2.3));  // -3
console.log(Math.floor(-2.7));  // -3