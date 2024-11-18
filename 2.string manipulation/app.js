// trimming
let str = "  Hello World     ";
console.log(str.trimStart()); //it will trim the spaces from starting of string if there is sapaces.

console.log(str.trimEnd()); //it will trim the spaces from ending of string if there is sapaces.

console.log(str.trim()); //it will trim the spaces from both sizes of string if there is sapaces.

// padding
let padStr = "123456789";
console.log(padStr.slice(4).padStart(padStr.length, "*"));
console.log(padStr.slice(0, 4).padEnd(padStr.length, "*"));
