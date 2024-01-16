let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));

//looks like it's a separator and stores each value after it finds what's within the parenthesis

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join());
console.log(arr.join(' '));
console.log(arr.join('a'));
console.log(arr.join(''));

//its joins together everything inside the array into a string and also adds whatever is in the parenthesis between each element

//3) Do split or join change the original string/array?
console.log(str); //does not change the original
console.log(arr); //does not change the original


//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

console.log(cargoHold.split(',').sort().join());
