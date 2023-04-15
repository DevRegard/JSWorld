// #1 문자 표기
console.log("line\nfeed");  // 개행 (1)
console.log("line\rfeed");  // 개행 (2)

console.log("line\\feed");  // 슬래쉬
console.log("line\tfeed");  // 탭

console.log("line\u{1F60D}feed");   // 유니코드





// #2 문자열 길이
let str = "hello\nworld\n!!!!!";
console.log(str.length);





// #3 문자 접근
console.log(str.charAt(1));     // e
console.log(str.charCodeAt(1))  // 101
console.log(str[0]);            // h





// #4 문자열 검색
let text = "Hello, World!!!";

console.log(text.indexOf("l"));     // 2
console.log(text.indexOf("l", 5));  // 10
console.log(text.lastIndexOf("l")); // 10 (뒤에서 부터 검색)

console.log(text.includes("Hello"));    // true
console.log(text.includes("hello"));    // false (대소문자 구분)

console.log(text.startsWith("ello"));    // true (시작 문자열 여부)
console.log(text.startsWith("ello", 1)); // false (시작 문자열 여부)

console.log(text.endsWith("!!!"));    // true (끝 문자열 여부)




// #5 문자열 대소문자 변환
console.log(text.toUpperCase());
console.log(text.toLowerCase());





// #6 문자열 치환
let changed_text = "";

changed_text = text.replace("World", "earth");

console.log(changed_text);
console.log(text.replace("!", "?"));    // 앞에 1개만 변경
console.log(text.replace("!!!", "???"));
console.log(text.replace(/l/g, "i"));    // 정규표현식 (전부 바꾸기)
console.log(text.replace(/l/gi, "i"));   // 정규표현식 (대소문자 구분안하고)





// #7 문자열 추출
console.log(text.slice(0, 5));
console.log(text.slice(4, 5));
console.log(text.slice(4));     // o, World!!!
console.log(text.slice(-4));    // d!!!

console.log(text.slice(2, 6));
console.log(text.slice(6, 2));      // 미출력
console.log(text.substring(2, 6));
console.log(text.substring(6, 2));  // 내부적으로 start 자동

console.log(text.substr(2, 6));  // llo, W
console.log(text.substr(-5, 6)); // ld!!!





// #8 문자열 분할
let fruits = "apple banana melon";

result = fruits.split(" ");
console.log(result);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);

result = text.split("");
console.log(result);
result = text.split("", 3);
console.log(result);