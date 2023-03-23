// #1 for
for (let i = 0; i < 3; i++) console.log(i);

for (let i = 10; i < 3; i++) console.log(i); // statement null

let num = 0;
// for (; num < 2; ) console.log(num) // infinity loop

for (; num < 2; ) {
    console.log(num);
    num++;
}





// #2 for in for (2중 for문)
for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
        console.log(`${x} + ${y} = ${x + y}`);
    }
}





// #3 for of
let languege = "JavaScript";
let text = "";


for (let x of languege) {
    text += x;
    console.log(x);
}
console.log(text);





// #4 while
let i = 4;
while (i < 3) {
    console.log(i);
    i++;
}





// #5 do while
i = 4; // 선언문을 밖에 선언하는 이유: 조건문이 참일 경우 무한루프
 do {
    console.log(i);
    i++;
} while (i < 3);





// #6 break
let text_6 = "";

for (let i = 0; i < 10; i++) {
    if (i === 3) break;
    text_6 += i;
}
console.log(text_6); // 012





// #7 continue
let text_7 = "";

for (let i = 0; i < 10; i++) {
    if (i === 3) continue;
    text_7 += i;
}
console.log(text_7); // 012456789





// #8 Label
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; J++) {
        console.log(i + " * " + j + " = " + i * j);
        break;
    }
    // out for은 그대로 작동함
}



end: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; J++) {
        console.log(i + " * " + j + " = " + i * j);
        break end;
    }
}





// #9 연습 문제 (1)
const UNTIL_NUM = 10;
let sum = 0;
for (let i = 0; i <= UNTIL_NUM; i++)
    if (i % 2 == 0) sum += i;

console.log(sum);





// #10 연습 문제 (2)
for (let i = 2; i <= 9; i++)
    for (let j = 1; j <= 9; j++)
        console.log(`${i} x ${j} = ${i * j}`);