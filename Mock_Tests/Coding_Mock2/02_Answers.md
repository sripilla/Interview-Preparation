# Mock Test 4 — Answer Key

> Answers derived from the step-by-step worked solutions in the source. Some multiple-choice options weren't fully captured in the photographed screenshots — where that's the case, the correct final value/output is still given in full.

---

### Question A – Pseudo-Code Tracing (Bitwise XOR)

**Given:** p = 4, q = 3, r = 7

**Trace:**
- `q^p^9` = 3^4^9 → (3^4)=7, (7^9)=14 → Left side = 14
- Right side = 8+7+3 = 18
- 14 < 18 → TRUE, IF block executes
- `r = (7^7)+q` = 0+3 = 3
- `q = (q+r)+p` = (3+3)+4 = 10
- After IF: p=4, q=10, r=3
- `r = q+p` = 10+4 = 14
- `Print p+q+r` = 4+10+14 = **28**

**Answer: 28**

---

### Question B – Pseudo-Code Tracing (Loop with OR condition)

**Given:** p = 9, q = 2, r = 10. Loop runs twice (r = 3, then r = 4).

**Iteration 1 (r=3):**
- p = (p+q)+p = (9+2)+9 = 20
- IF: (p+r)<r || 7>r → (20+3)<3 || 7>3 → false || true → TRUE
- p = 12+p = 12+20 = 32

**Iteration 2 (r=4):**
- p = (p+q)+p = (32+2)+32 = 66
- IF: (p+r)<r || 7>r → (66+4)<4 || 7>4 → false || true → TRUE
- p = 12+p = 12+66 = 78

**After loop:** Print p+q = 78+2 = **80**

**Answer: 80**

---

### Question C – Nested IF/ELSE Pseudocode Trace

**Given:** a=10, b=5, c=3, result=0

**Trace:**
- Check a > 8 → 10 > 8 → True
- Inside IF, check b < 7 → 5 < 7 → True
- Execute: result = a * b = 10 * 5 = **50**

**Answer: 50**

---

### Question 6 – Pseudo-Code Tracing (Loop with Bitwise AND)

**Given:** a=8, b=5, c=6. Loop runs twice (c=3, then c=4).

**Iteration 1 (c=3):**
- b = 9+b = 9+5 = 14
- b = (b+7)+a = (14+7)+8 = 29
- b = (b&4)+b = (29&4)+29 = 4+29 = 33

**After iteration 1:** a=8, b=33

**Iteration 2 (c=4):**
- b = 9+b = 9+33 = 42
- b = (b+7)+a = (42+7)+8 = 57
- b = (b&4)+b = (57&4)+57 = 0+57 = 57

**After iteration 2:** a=8, b=57

**Final Output:** Print a+b = 8+57 = **65**

**Answer: 65**

---

### Question 10 – Array Pseudo-Code Tracing

**Given:** arr = [1, 4, 0, 1]

**Trace:**
- Step 1: arr[0] = (arr[1]+1)+arr[3] = (4+1)+1 = 6 → arr = [6, 4, 0, 1]
- Step 2: Evaluate condition (arr[1] & arr[3] & arr[0]) < (arr[3]+arr[1]+arr[0])
  - Left side: 4 & 1 & 6 → (4&1)=0, (0&6)=0 → LHS = 0
  - Right side: 1+4+6 = 11
  - 0 < 11 → TRUE
- Step 3 (IF block executes): arr[2] = arr[3]+arr[2]+arr[3] = 1+0+1 = 2 → arr = [6, 4, 2, 1]
  (Else block is skipped)
- Step 4: Print arr[0]+arr[2] = 6+2 = **8**

**Answer: 8**

---

### Question 5 – C++ Protected Inheritance

**Answer:**
```cpp
class Employee : protected Base {
public:
    // Wrapper to allow public access to getId
    int get() {
        return getId();   // call protected member from Base
    }

    void showLevel() {
        cout << "Level: " << level << endl;   // access protected member directly
    }
};
```

**Explanation:** With `protected` inheritance, `Base`'s public and protected members become `protected` in `Employee`. To expose `getID()` (originally public in Base) to the outside world, `Employee` needs a public wrapper method (`get()`) that calls it internally. The protected member `level` can be accessed directly inside any method of `Employee` since protected members are accessible within the derived class.

---

### CSS Shape Question — Answer

```css
.rounded-top-square {
  width: 150px;
  height: 150px;
  background-color: orange;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
```

**Explanation:** Rounding only `border-top-left-radius` and `border-top-right-radius` (leaving the bottom corners at 0) produces a square with a rounded top and flat bottom, matching the reference shape.

---

### Question 3 – HTML5 Video Element with Fallback

**Answer:**
```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
```

**Explanation:** The fallback message must be placed **inside** the opening and closing `<video>` tags. Browsers that support HTML5 video ignore this inner text; browsers that don't recognize the `<video>` tag (e.g., very old browsers) display the fallback text instead. `<source>` elements let you specify multiple formats (MP4, OGG) for cross-browser compatibility, and `controls` adds the default play/pause/volume UI.

---

### Question 2 – JavaScript Fetch Function

**Answer:**
```javascript
async function fetchData(url) {
  try {
    // 1. Send the HTTP request
    const response = await fetch(url);

    // 2. Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 3. Parse and return the data as a JavaScript object
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Could not fetch data:", error);
  }
}
```

**Explanation:**
- `async function` declares the function can use `await` for asynchronous operations.
- `fetch(url)` initiates the HTTP request to the API endpoint.
- `await` pauses execution until the promise (the request or the parsing) resolves.
- `.json()` parses the raw HTTP response body into a native JavaScript object/array.
- The `try/catch` block handles network or parsing errors gracefully.

---

### Question 1 – Array Rotation Function

**Trace for `solve([44, 1, 22, 111], 5)`:**

Since the array length is 4, rotating it 4 times returns it to the original state. Rotating 5 times is equivalent to rotating just 1 time (5 mod 4 = 1) — though the code still executes all 5 iterations:

- Initial: [44, 1, 22, 111]
- Rotation 1: Pop 111, unshift → [111, 44, 1, 22]
- Rotation 2: Pop 22, unshift → [22, 111, 44, 1]
- Rotation 3: Pop 1, unshift → [1, 22, 111, 44]
- Rotation 4: Pop 44, unshift → [44, 1, 22, 111] (back to original)
- Rotation 5: Pop 111, unshift → **[111, 44, 1, 22]**

**Answer: [111, 44, 1, 22]**

**Explanation:** Each iteration removes the last element (`pop()`) and adds it to the front (`unshift()`) — a right-rotation by one position, repeated `rotations` times.

---

### Question 8 – Java Method Overriding (private final flipper)

**Answer: "parent"**

**Explanation:**
1. **Private methods are not inherited.** In Java, a `private` method in a superclass (`Children`) is invisible to subclasses. The `flipper()` method in `Children` is not visible to `Parent`.
2. **No overriding occurs.** Because `Parent` cannot "see" the private `flipper()` in `Children`, its own `flipper()` is not an override — it's treated as a completely new, independent method that merely shares the same name.
3. **The `final` keyword is irrelevant here** since the `Children` method is private anyway; `final` on the `Parent` method just prevents further subclasses from overriding *that* version.
4. `new Parent().flipper()` calls `Parent`'s own `flipper()`, printing **"parent"**.

---

### Question 7 – Interface/Class Naming Conflict

**Answer: Compilation Error**

**Explanation:** Java does not allow two different types (a class and an interface, in this case) to share the exact same name (`A`) within the same package/scope. The compiler cannot distinguish between interface `A` and class `A`, resulting in a "duplicate type" / "name collision" compilation error — regardless of what the class body otherwise does.

---

## Quick Reference Table

| Question | Answer |
|---|---|
| A — XOR pseudocode trace | 28 |
| B — Loop with OR condition | 80 |
| C — Nested IF/ELSE trace | 50 |
| Question 6 — Loop with bitwise AND | 65 |
| Question 10 — Array pseudocode trace | 8 |
| Question 5 — C++ protected inheritance | Public wrapper method (`get()`) calling `getId()`; `level` accessed directly |
| CSS Shape | Round only top-left & top-right border-radius |
| Question 3 — HTML5 video fallback | Fallback text placed inside `<video>...</video>` tags |
| Question 2 — JS fetch function | `async function` + `await fetch(url)` + `.json()` |
| Question 1 — Array rotation | [111, 44, 1, 22] |
| Question 8 — Private final method override | "parent" |
| Question 7 — Interface/class name conflict | Compilation Error |