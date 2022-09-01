let example = `오늘은 9월 1일 입니다.`;
console.log(typeof example);
// 현재 문자열
let exampleArr = example.split(" ");
// (" ") --> 띄어쓰기를 기준으로 배열을 만들겠다.
console.log(exampleArr);
// ["오늘은","9월","1일","입니다"]

exampleArr.forEach((el, i) => {
  if (el === "1일") {
    // 만약에 el이라는 매개변수가 "1일"과 일치한다면
    exampleArr[i] = "9일";
    // i라는 매개변수가 "9일을" 가리킨다.
    exampleArr.splice(i + 1, 0, "추석연휴");
    // ("9일"이라는 요소에 배열 길이를 + 1, 삭제하는게 없으니 0기입, "추석연휴"라는 문자열을 추가로 작성하겠다.)
  }
});
console.log(exampleArr.join(""));
// exampleArr의 객체들을 join("")을 사용하여 하나의 문자열로 만듦
// join() --> "오늘은,9월,9일,추석연휴,입니다"
// join("-") --> "오늘은-9월-9일-추석연휴-입니다"

exampleArr.forEach(function (el, i) {
  if (el === "1일") {
    // 만약에 el이라는 매개변수가 "1일"과 일치한다면
    exampleArr[i] = "9일";
    // i라는 매개변수가 "9일을" 가리킨다.
    exampleArr.splice(i + 1, 0, "추석연휴");
    // ("9일"이라는 요소에 배열 길이를 + 1, 삭제하는게 없으니 0기입, "추석연휴"라는 문자열을 추가로 작성하겠다.)
  }
});
console.log(exampleArr);
