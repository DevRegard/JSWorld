// #1 basic recursive function (1)
function recursive(num) { // 값을 줄이면서 0이 될 때 종료
    if (num == 0) return;
    console.log(num);  // 3, 2, 1 (연산하면서 실시간 출력)
    recursive(num - 1);
    console.log(num);  // 1, 2, 3 (스택에서 종료되고 나오는 상태 출력)
}

recursive(3);





// #2 recursive function (2)
function recursive_2 (num) {
    if (num == 0) return 0;
    return num + factorial(num - 1);
}

// 3 + (2 + (1 + 0))
console.log(recursive_2(3));





// #3 factorial function
function factorial (num) {
    if (num == 0) return 1;
    return num * factorial(num - 1);
}

// 5 * (4 * (3 * (2 * 1)))
const FAC_VAL = 10;
let result = factorial(FAC_VAL); 
console.log(`${FAC_VAL}! = ${result}`);