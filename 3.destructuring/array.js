let arr = [1, 2, 3, 4, 5];
let [a, b, c, d, e] = arr;
console.log(a + b + c + d + e); //15
let total = 0;
for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}
console.log(total); //15

const [first, second, ...rest] = arr;
console.log(first, second, rest); //1 2 [3, 4, 5]

const [...all] = arr;
console.log(all); //[ 1, 2, 3, 4, 5]

const [, , third] = arr;
console.log(third); //3

const [f, g, h = 10] = [1, 2];
console.log(f, g, h); //1 2 10

const [f1, g1, h1 = 10] = [1, 2, 3];
console.log(f1, g1, h1); //1 2 3
