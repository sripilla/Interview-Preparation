
/*
What is an object?
let name = "Likitha";
let age = 21;
let branch = "AI/ML";
*/

let student1 = {
    name: "Likitha",
    age: 21,
    branch: "AI/ML"
};


// Accessing object properties

// Method1
console.log(student.name);   // Likitha
console.log(student.age);    // 21

// Method2
console.log(student["name"]);   // Likitha
console.log(student["age"]);    // 21

// Adding and updating properties

let student = {
    name: "Likitha",
    age: 21
};

// Add a property
student.branch = "AI/ML";

// Update a property
student.age = 22;

console.log(student);


// Removing a property

let student = {
    name: "Likitha",
    age: 21,
    branch: "AI/ML"
};

delete student.age;

console.log(student);


//Program 2


// Objects can contain arrays and other objects


let student = {
    name: "Likitha",
    skills: ["Python", "JavaScript", "React"],
    address: {
        city: "Manipal",
        country: "India"
    }
};

console.log(student.skills[0]);
// Python

console.log(student.address.city);
// Manipal
