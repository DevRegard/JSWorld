// #1
let user = {
    name: "john",
    age: 27
};

console.log(typeof user);       // object
console.log(typeof user.name);  // string
console.log(typeof user.age);   // number

console.log(user);
console.log(user.name);
console.log(user["name"]); // 키값으로 표현하는 방법도 존재(추천x)
console.log(user.age);

user.age = 30;
console.log(user.age);





// #2 
user.weight = 72;
console.log(user);

delete user.age;
console.log(user)





// #3 객체 복사 문제점
let admin = user; // 주소 값만 복사
console.log(admin);

admin.name = "kim";

console.log(admin.name); // 복사한 데이터 정상 변경
console.log(user.name);  // 기존 데이터까지 변경되는 문제

user.age = 30;
console.log(user.age);  // 기존 데이터 정상 변경
console.log(admin.age); // 복사한 데이터까지 변경되는 문제

/*
 문제 원인: 같은 주소의 데이터 값을 공유하기 때문에 기존 및 변경 데이터 구분 없이 데이터가 동시에 변경됨
*/





// #4  얇은 복사 1 - for
let Admin = {};
for (let key in user) {
    admin[key] = user[key];
}





// #5 얇은 복사 2 - Object
let Admin_2 = Object.assign({}, user); // 빈 객체에 user 객체를 merge 시키기





// #6 얇은 복사 3 - 전개 연산자
let Admin_3 = { ...user }; // user 내에 있는 모든 필드 값을 전개한다





// #7 얇은 복사의 문제점
let User = {
    name: "kim",
    age: 23,
    sizes: {
        height: 180,
        weight: 72,
    },
};

let Admin_obj = Object.assign({}, User);
Admin_obj.sizes.weight++;
--Admin_obj.sizes.height;

console.log(Admin_obj.sizes.weight);    // 73
console.log(Admin_obj.sizes.height);    // 179
console.log(User.sizes.weight);         // 73
console.log(User.sizes.height);         // 179





// #8 깊은 복사 1 - for
 
// #9 깊은 복사 2 - JSON 객체
let Admin_json = JSON.parse(JSON.stringify(User));