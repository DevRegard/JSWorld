// #1 2차원 배열 (1)
let array = [
    [101, 102, 103],
    [201, 202, 203],
    [301, 302, 303],
];

console.log(array); // [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 301, 302, 303 ] ]
console.log(array[0]);      // [ 101, 102, 103 ]
console.log(array[1][0]);   // 201
console.log(array[2][2]);   // 303





// #2 2차원 배열 (2)
console.log(array.length);  // 3
let arr_2 = array.pop();
console.log(array.length);  // 2
console.log(arr_2);         // [ 301, 302, 303 ]
console.log(array);         // [ [ 101, 102, 103 ], [ 201, 202, 203 ] ]



let array_num = array.push([401, 402, 403]);
console.log(array.length);  // 3
console.log(array_num);     // 3
console.log(array);         // [ [ 101, 102, 103 ], [ 201, 202, 203 ], [ 401, 402, 403 ] ]





// #3 2차원 배열 반복문 (1)
array = [
    [101, 102, 103],
    [201, 202, 203],
    [301, 302, 303],
    [401, 402, 403],
];



for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        console.log(array[i][j]);
    }
}



for (let ii in array) {
    for (let jj in array[ii]) {
        console.log(array[ii][jj]);
    }
}




// #4 2차원 배열 반복문 (2)
let fruits = [
    ["strawberry", 50],
    ["banana", 100],
    ["ice", 150]
];



for (let i = 0; i < fruits.length; i++) {
    console.log(`fruit: ${fruits[i][0]}, amount: ${fruits[i][1]}`);
}



for (let ii in fruits) {
    console.log(`fruit: ${fruits[ii][0]}, amount: ${fruits[ii][1]}`);
}