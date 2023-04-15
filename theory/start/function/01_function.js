// #1 function
function print_add(x, y) {
    console.log(x + y);
}

print_add();            // NaN (undifinde + undifinde)
print_add(10, 20);      // 30
print_add(10, 20, 30);  // 30 (매개변수가 전달은 되지만 무시됨)





// #2 default value
function print_add_default(x, y = 10) {
    console.log(x + y);
}

print_add_default(10);      // 20
print_add_default(10, 20);  // 30





// #3 dynamic parameters
function print_min() {
    console.log(arguments[0] - arguments[1]);
}

print_min(10);          // NaN
print_min(10, 20);      // -10
print_min(10, 20, 30);  // -10





// #4 return
function add(x, y) {
    return x + y;
    console.log("VS에서 흐릿하게 보임, 심지어 오류 없음");
}

let result = add(5, 10);
console.log(result);





// #5 retrun 조건문 활용
function checkAge(age) {
    if (age >= 18) return true;
    else return false;
}

console.log(checkAge(17));
console.log(checkAge(19));