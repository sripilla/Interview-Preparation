
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const courseInput = document.getElementById("course");
const convertButton = document.getElementById("convertButton");

const jsonOutput = document.getElementById("jsonOutput");
const objectOutput = document.getElementById("objectOutput");

convertButton.addEventListener("click", function () {
    // Step 1: Create a JavaScript object
    const student = {
        name: nameInput.value.trim(),
        age: Number(ageInput.value),
        course: courseInput.value.trim()
    };

    // Step 2: Convert the object into a JSON string
    const jsonData = JSON.stringify(student, null, 2);

    // Step 3: Display the JSON string
    jsonOutput.textContent = jsonData;

    // Step 4: Parse the JSON string back into an object
    const parsedStudent = JSON.parse(jsonData);

    // Step 5: Display the parsed object
    objectOutput.textContent =
        "Name: " + parsedStudent.name + "\n" +
        "Age: " + parsedStudent.age + "\n" +
        "Course: " + parsedStudent.course;
});
