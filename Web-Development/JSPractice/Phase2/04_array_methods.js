
// Lesson 4: Array Methods

/*
map() — Transform Change every element and create a new array.
Example: add 5 marks to everyone.
*/
let marks = [45, 80, 35];
let updatedMarks = marks.map((mark) => mark + 5);
console.log(updatedMarks);


let numbers = [2, 4, 6];
let doubled = numbers.map((n) => n * 2);
console.log(doubled); // [4, 8, 12]


/*
filter() — Select
Keep only elements that satisfy a condition.
Example: select marks of 60 or above.
*/

let marks1 = [45, 80, 35, 90, 65];
let passed = marks1.filter((mark) => mark >= 60);
console.log(passed);


let ages = [12, 18, 25, 15, 30];
let adults = ages.filter((age) => age >= 18);
console.log(adults); // [18, 25, 30]


/*
reduce() — Combine
Combine all elements into one result.
Example: calculate total marks.
*/
let marks2 = [10, 20, 30];
let total = marks2.reduce((sum, mark) => sum + mark, 0);
console.log(total); // 60


let prices = [100, 200, 50];
let total1 = prices.reduce((sum, price) => sum + price, 0);
console.log(total1); // 350


/*
find() — Find one
Return the first element that matches a condition.
Example: find the first mark of 60 or above.
*/
let marks3 = [45, 80, 35, 90, 65];
let result = marks3.find((mark) => mark >= 60);
console.log(result); // 80


let numbers1 = [10, 20, 30];
console.log(numbers1.find((n) => n > 100));
// undefined
	
/*
Map = Modify
Filter = Select
Reduce = Combine
Find = First match
*/


