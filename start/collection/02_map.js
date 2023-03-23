// #1 요소 추가/삭제
let map = new Map();

console.log(map);   // Map(0) {}

map.set("name", "john");
map.set(123, 456);
map.set(true, "bool_type");

console.log(map);   
// Map(3) { 'name' => 'john', 123 => 456, true => 'bool_type' }

console.log(map.get("name"));   // john
console.log(map.get(123));      // 456
console.log(map.get(true));     // bool_type
console.log(map.size);          // 3

map.delete(123);
console.log(map);
// Map(2) { 'name' => 'john', true => 'bool_type' }

map.clear();
console.log(map); // Map(0) {}

map.set(123, 789).set(false, "bool_type").set("fruit", "banana");
console.log(map);
// Map(3) { 123 => 789, false => 'bool_type', 'fruit' => 'banana' }





// #2 Map 반복문
let recipe_juice = new Map([
    ["strawberry", 50],
    ["banana", 100],
    ["ice", 150],
]);

for (let item of recipe_juice.keys()) {
    console.log(item);
}

for (let amount of recipe_juice.values()) {
    console.log(amount);
}

for (let entity of recipe_juice.entries()) { // entries() 생략 가능
    console.log(entity);
}





// #3 Map <-> Object 변환
console.log(recipe_juice);
// Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }

let recipe_juice_obj = Object.fromEntries(recipe_juice);
console.log(recipe_juice_obj); 
// { strawberry: 50, banana: 100, ice: 150 }

let recipe_juice_kv = Object.entries(recipe_juice_obj);
console.log(recipe_juice_kv);
// [ [ 'strawberry', 50 ], [ 'banana', 100 ], [ 'ice', 150 ] ]

let recipe_juice_map = new Map(recipe_juice_kv);
console.log(recipe_juice_map);
// Map(3) { 'strawberry' => 50, 'banana' => 100, 'ice' => 150 }





// #4 심플 테스트
let recipe_juice_simple = new Map([
    ["strawberry", 50],
    ["banana", 100],
    ["ice", 150],
]);
/*
let map_Map_simple = recipe_juice_simple.map((item) => item.values() * 2);
console.log(map_Map_simple);

오류: recipe_juice_simple은 함수가 아님
추론: map()은 함수에 관해서만 작동함
*/