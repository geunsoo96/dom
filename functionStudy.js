// let tagList1 = function (element, index) {
//   this.id = index;
//   this.name = element;
// };
// 함수 리터럴

// let tagList2 = (element, index) => {
//   this.id = index;
//   this.name = element;
// };
// 축약형

// function tagList3(element, index) {
//   this.id = index;
//   this.name = element;
// }
// 선언형

// function --> this를 가둠
// => --> this를 풀어줌, 위로 이동해서 가동

// ↑↑↑ 함수 작성법 세가지 ↑↑↑

let a = () => {
  return this;
};
console.log(a());
