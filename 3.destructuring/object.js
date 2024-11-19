// let obj = { firstName: "uzair", lastName: "Ahmed" };
// const { firstName, lastName } = obj;
// console.log(firstName, lastName);

// // renaming variables
// const { firstName: userName } = obj;
// console.log(userName); //uzair

// const { gender = "male" } = obj;
// console.log(gender); //male

//interpolated expression => `${}`

var a = [
  { name: "fName", email: (firstEmail = "nobody@none.tld") },
  { name: (secondName = "hello") },
];
console.log(a);

function data() {
  return [1, 2, 3];
}

let tmp = data();
let first = tmp[0];
let second = tmp[1];
let third = tmp[2];
console.log(first, second, third); //1 2 3

function dataWithDestructuring() {
  return [1, 2, 3];
}
let [first1, second1, third1] = dataWithDestructuring();
console.log(first1, second1, third1); //1 2 3
