// #1 String 형 변환 
console.log(String(123));
console.log(String(1 / 0)); // Infinity
console.log(String(-1 / 0)); // -Infinity
console.log(String(NaN));
console.log(String(true));
console.log(String(false));
console.log(String(undefined));
console.log(String(null));
console.log(String("haha"));





// #2 Number 형 변환
console.log(Number(""));
console.log(Number("123"));
console.log(Number("hello"));
console.log(Number("123Hello"));
console.log(Number(true));  // 1
console.log(Number(false)); // 0
console.log(Number(null));  // 0
console.log(Number(undefined)); // NaN


// parseInt 정수 변환 / parseFloat 실수 변환
console.log(parseInt("123.123"));   // 123
console.log(parseFloat("123.123")); // 123.123





// #3 Boolean 형 변환
console.log(Boolean(""));       // false
console.log(Boolean("123"));    
console.log(Boolean("hello"));
console.log(Boolean("0"));
console.log(Boolean(0));        // false
console.log(Boolean(123));
console.log(Boolean(NaN));      // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));    // false

/// 문자열에 값이 있으면 true, 빈 문자열이면 false