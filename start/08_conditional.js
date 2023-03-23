// #1 if-else (1)
let apple_price = 3;

if (apple_price >= 10) {
    console.log("very expensive :<");
}
else if (apple_price < 5) {
    console.log("very cheap :>");
}
else  {
    console.log("nice");
}
console.log("done");





// #2 if-else (2)
let age = 10;

if (age < 10) console.log("young");
else console.log("old!");





// #3 삼항 연산자
let AGE = 20;

if (AGE < 19) {
    msg = "The user is not an adult.";
}
else {
    msg = "The user is an adult.";
}
console.log(msg);



msg_another = AGE < 19 ? "The user is not an adult." : "The user is an adult.";
console.log(msg_another);





// #4 switch (1)
let day_number = 3;
let day = "";

switch (day_number) {
    case 0:
        day = "Sunday"; break;
    case 1:
        day = "Monday"; break;
    case 2:
        day = "Tuesday"; break;
    case 3:
        day = "Wednesday"; break;
    case 4:
        day = "Thursday"; break;
    case 5:
        day = "Friday"; break;
    case 6:
        day = "Saturday"; break;
    default:
        day = "error"; break;
}
console.log(day);
// break문이 없을 경우 다음 구문을 출력함





// #5 switch (2)
let browser = "Safari";

switch (browser) {
    case "Explorer":
        msg = "ActiveX installation requried"; break;
    case "Chrome":
    case "Firefox":
    case "Safari":
    case "Opera":
        msg = "Supported browser!"; break;
    default:
        msg = "Unsuported browser!"; break;
}
console.log(msg);





// 연습 문제
const DAY = 3;
let weekend = "";

switch (DAY) {
    case 1: weekend = "월요일"; break;
    case 2: weekend = "화요일"; break;
    case 3: weekend = "수요일"; break;
    case 4: weekend = "목요일"; break;
    case 5: weekend = "금요일"; break;
    case 6: weekend = "토요일"; break;
    case 7: weekend = "일요일"; break;
    default: weekend = "알 수 없음!"; break;
}
console.log(weekend);