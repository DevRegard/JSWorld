// #1 생성자 함수
// 빵틀
function FishBread(flavor, price) {
    this.flavor = flavor;
    this.price = price;
    this.base = "flour";
}

// 붕어빵
let bread_1 = new FishBread("cream", 1200);
let bread_2 = new FishBread("redbean", 1000);
let bread_3 = new FishBread("milk", 1500);

console.log(bread_1);
console.log(bread_2);
console.log(bread_3);





// #2 new.target: new가 없을 때, 자동으로 생성
function User(name) {
    console.log(new.target);
    this.name = name;   // this로 설정하면 생성자 함수로 바뀜
}

function User_target(name) {
    if (!new.target) { // undefined 이면 수행
        return new User_target(name);
    }
    this.name = name;
}

let result_1 = User("John");     // undefined
console.log(result_1);           // undefined

let result_2 = new User("John"); // [Function: User]
console.log(result_2);           // User { name: 'John' }

let result_3 = User_target("John");  
console.log(result_3);           // User_target { name: 'John' }