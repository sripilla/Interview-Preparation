// 1. Select elements
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const courseInput = document.getElementById("course");
const convertBtn = document.getElementById("convertBtn");
const jsonOutput = document.getElementById("jsonOutput");
const objectOutput = document.getElementById("objectOutput");

convertBtn.addEventListener("click", () => {
  // 2. Build a JavaScript object from the inputs
  const student = {
    name: nameInput.value.trim(),
    age: Number(ageInput.value),   // input values are text; Number() makes it a number
    course: courseInput.value.trim()
  };

  // 3. Object → JSON string
  const jsonData = JSON.stringify(student);
  jsonOutput.textContent = jsonData;
  console.log(typeof jsonData);    // string

  // 4. JSON string → object
  const parsed = JSON.parse(jsonData);
  objectOutput.textContent = parsed.name + ", " + parsed.age + ", " + parsed.course;
  console.log(typeof parsed);      // object
});