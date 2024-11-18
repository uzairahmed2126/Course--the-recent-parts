// trimming
let str = "  Hello World     ";
console.log(str.trimStart()); //it will trim the spaces from starting of string if there is sapaces.

console.log(str.trimEnd()); //it will trim the spaces from ending of string if there is sapaces.

console.log(str.trim()); //it will trim the spaces from both sizes of string if there is sapaces.

// padding
let padStr = "123456789";
// let last4Digit = padStr.slice(-4);
console.log(padStr.slice(padStr.length).padStart(padStr.length, "?"));
// console.log(last4Digit.padStart(5, "*")); //*6789
// console.log(last4Digit.padStart(last4Digit.length + 5, "*")); //*****6789
// console.log(padStr.length);
// console.log(padStr.slice(0, 4).padEnd(padStr.length, "*"));

