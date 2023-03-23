// #1 Date 생성자
let date_now = new Date();
let date_str = Date();

console.log(date_now);  // 2023-02-09T03:13:20.201Z
console.log(typeof date_now);   // object

console.log(date_str);  // Thu Feb 09 2023 12:13:20 GMT+0900 (대한민국 표준시)
console.log(typeof date_str);   // string

let date_ms_1 = new Date(0);
console.log(date_ms_1); // 1970-01-01T00:00:00.000Z

let date_ms_2 = new Date(1000 * 3600 * 24);
console.log(date_ms_2); // 1970-01-02T00:00:00.000Z

let date_string = new Date("2020-01-01");
console.log(date_string); // 2020-01-01T00:00:00.000Z

// month 1월(0) ~ 12월(11)
let date_params_1 = new Date(2021, 0, 1);
console.log(date_params_1); // 2020-12-31T15:00:00.000Z
// UCT 기준으로 출력이며, 한국 기준으로 입력한 결과 -9시간 오차

let date_params_2 = new Date(Date.UTC(2021, 0, 1));
console.log(date_params_2); // 2021-01-01T00:00:00.000Z
// UTC 메서드를 통해 입력 시간 보정


 


// #2 날짜 정보 얻기
let date = new Date(Date.UTC(2023, 1, 9));
console.log(date);  // 2023-02-09T03:22:42.242Z

console.log(date.getFullYear());    // 2023
console.log(date.getMonth());       // 1 (2월)
console.log(date.getDay());         // 4 (목요일) [일 0 ~ 금 6]

console.log(date.getHours());       // 9
console.log(date.getUTCHours());    // 0 (UTC 보정 현재 시간)

console.log(date.getTime());    // 1675900800000 (밀리초)
console.log(new Date(date.getTime()));
console.log(date.getTimezoneOffset()); // -540 (UTC 차이, 나누기 60)





// #3 날짜 정보 설정
date = new Date();
console.log(date);  // 2023-02-09T03:35:26.037Z

let ms_year = date.setFullYear(2020, 3, 15);
console.log(date);  // 2020-04-15T03:35:26.037Z
console.log(ms_year); // 1586921792278 (밀리초)

date.setDate(1);  // 날짜 1일로 설정
console.log(date);

date.setDate(0);  // 1을 기준에 전날 설정 (전달 마지막 날)
console.log(date);

date.setHours(date.getHours() * 2); // +2 시간 증가
console.log(date); 





// #4 parse
let ms_parse = Date.parse("2020-03-31T00:00:00.000");
console.log(ms_parse);   // 1585580400000
console.log(new Date(ms_parse));

// Z 설정할 경우 UTC+0 기준 설정
let ms_parse_z = Date.parse("2020-03-31T00:00:00.000Z");
console.log(ms_parse_z); // 1585612800000





// #5 benchmark
function dateSub(old_date, new_date) {
    return new_date - old_date;
}

function getTimeSub(old_date, new_date) {
    return new_date.getTime() - old_date.getTime();
}

function benchmark(callback_func) {
    let date_1 = new Date("2020-01-01");
    let date_2 = new Date();    // 현재 날짜

    let start = Date.now();     // 지금 시간
    for (let i = 0; i < 100000; i++) {
        callback_func(date_1, date_2);
    }

    return Date.now() - start;
}

console.log("dateSub: " + benchmark(dateSub) + "ms");        // 9 ~ 10 ms
console.log("getTimeSub: " + benchmark(getTimeSub) + "ms");  // 2ms





// #6 benchmark simple
const dateSubs = (old_date, new_date) => new_date - old_date;
const getTimeSubs = (old_date, new_date) => new_date.getTime() - old_date.getTime();

const benchmarks = (callback_func) => {
    let date_1 = new Date("2020-01-01");
    let date_2 = new Date();

    let start = Date.now();
    for (let i = 0; i < 100000; i++) {
        callback_func(date_1, date_2);
    }

    return Date.now() - start;
};

console.log("dateSubs: " + benchmarks(dateSubs) + "ms");        // 8 ~ 9ms
console.log("getTimeSubs: " + benchmarks(getTimeSubs) + "ms");  // 2ms