# JSON in JavaScript

## 1. Why JSON?
A JavaScript object works inside JavaScript, but to **send it to a server** or **save it**, we need a standard **text** format.

```
JavaScript object  →  convert  →  JSON string (text to store or send)
```

- **JSON = JavaScript Object Notation**
- A **text format** for storing and exchanging structured data.
- Used by **many languages**, not just JavaScript.

## 2. JS Object vs JSON
```js
// JavaScript object
const student = { name: "Likitha", age: 21, isStudent: true };
```
```json
// JSON text
{ "name": "Likitha", "age": 21, "isStudent": true }
```

**JSON rules**
- Property names must use **double quotes**.
- String values must use **double quotes**.
- Allowed values: **string, number, boolean, null, array, object**.
- **Not allowed:** functions, `undefined`.

> **Key idea:** an object is a **data structure**; JSON is a **text version** of that data.

## 3. The Two Methods

### `JSON.stringify()`: object → string
```js
const student = { name: "Likitha", age: 21 };
const jsonData = JSON.stringify(student);

console.log(jsonData);         // {"name":"Likitha","age":21}
console.log(typeof jsonData);  // string
```

### `JSON.parse()`: string → object
```js
const jsonData = '{"name":"Likitha","age":21}';
const student = JSON.parse(jsonData);

console.log(student.name);     // Likitha
console.log(student.age);      // 21
console.log(typeof student);   // object
```

| Method | Direction | Purpose |
|---|---|---|
| `JSON.stringify()` | Object → string | Turn data into JSON text |
| `JSON.parse()` | String → object | Read JSON text as JS data |

**Memory trick:** **Stringify** makes a **string**. **Parse** reads text back into **data**.

## Quick Check
```js
const data = '{"city":"Udupi"}';
const result = JSON.parse(data);

console.log(typeof data);    // ?
console.log(typeof result);  // ?
console.log(result.city);    // ?
```
**Answer:** `string`, `object`, `Udupi`

## Summary
JSON is text for sharing data. Use `JSON.stringify()` to **send/save** and `JSON.parse()` to **read/use**.