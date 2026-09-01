.

---

## SQL Tasks

### Task 1 — Player Sports Registration Count ✅ *(verified against source via Mock 7)*

```sql
SELECT
    p.first_name AS "First Name",
    p.last_name AS "Last Name",
    COUNT(r.sport_id) AS "Number of Sports Registered"
FROM
    player p
JOIN
    registration r ON p.player_id = r.player_id
WHERE
    r.payment_status = 'Paid'
    AND YEAR(r.reg_date) = 2024
GROUP BY
    p.player_id,
    p.first_name,
    p.last_name;
```

**Expected Output:**

| First Name | Last Name | Number of Sports Registered |
|---|---|---|
| John | Doe | 3 |
| Jane | Smith | 3 |
| Robert | Brown | 3 |
| Emily | Johnson | 3 |
| Michael | Williams | 3 |

**Explanation:** Joins `player` to `registration` on `player_id`, filters to only `'Paid'` registrations made in 2024, then groups by player and counts their `sport_id` entries.

---

### Task 2 — Instructor Schedule (Courses After 10 AM) ✅ *(confirmed correct against source via Mock 7)*

```sql
SELECT DISTINCT
    i.last_name AS "Instructor Last Name",
    i.first_name AS "Instructor First Name",
    s.starttime AS "Start Time"
FROM
    instructor i
JOIN
    section sec ON i.instructor_id = sec.instructor_id
JOIN
    schedule s ON sec.schedule_id = s.schedule_id
WHERE
    s.starttime > '10:00:00';
```

**Explanation:** `instructor` links to `section` via `instructor_id`, and `section` links to `schedule` via `schedule_id`. Filtering `schedule.starttime > '10:00:00'` gets courses starting after 10 AM; `DISTINCT` avoids duplicate instructor/time rows when an instructor teaches multiple sections at the same time slot.

---

### Task 3 — English Movies and Their Airing Channels ✅ *(confirmed correct against source via Mock 7)*

```sql
SELECT
    m.Title AS "MOVIE_NAME",
    c.Name AS "CHANNEL_NAME"
FROM
    movie m
JOIN
    airing a ON m.MovieID = a.MovieID
JOIN
    channel c ON a.ChannelID = c.ChannelID
WHERE
    m.Language = 'English';
```

**Explanation:** `movie` joins to `airing` via `MovieID` (only rows where a movie, not an episode, was aired), then `airing` joins to `channel` via `ChannelID`. Filtering `Language = 'English'` restricts to English movies.

---

### Task 4 — Episodes Airing After 6 PM ✅ *(matched source exactly)*

```sql
SELECT
    a.AirngID AS "AIRINGID",
    a.EpisodeID AS "EPISODEID",
    c.Name AS "CHANNEL_NAME"
FROM
    airing a
JOIN
    channel c ON a.ChannelID = c.ChannelID
WHERE
    a.EpisodeID IS NOT NULL
    AND TIME(a.StartTime) > '18:00:00';
```

**Explanation:** Joins `airing` to `channel` on `ChannelID`. The `WHERE` clause excludes rows with a null `EpisodeID` (per the hint — these would be movie airings, not episodes) and keeps only airings where the time portion of `StartTime` is after 6 PM.

---

### Task 5 — Zoo Visitors (Excluding Child Tickets & Arctic Enclosures) ✅ *(matched source exactly)*

```sql
SELECT
    v.Name AS "VISITOR_NAME",
    v.Ticket_Type AS "TICKET_TYPE",
    e.Name AS "ENCLOSURE_NAME",
    e.Type AS "TYPE"
FROM
    visitor v
JOIN
    enclosure_visit_log evl ON v.Visitor_ID = evl.Visitor_ID
JOIN
    enclosure e ON evl.Enclosure_ID = e.Enclosure_ID
WHERE
    v.Ticket_Type <> 'Child'
    AND e.Type <> 'Arctic';
```

**Explanation:** Joins `visitor` to `enclosure_visit_log` (tracks which visitor viewed which enclosure), then to `enclosure` for its name/type. The `WHERE` clause excludes `'Child'` ticket holders and `'Arctic'`-type enclosures using `<>`.

---

### Task 6 — Movie Duration in Hours (Free Airing Rights) ✅ *(confirmed correct, including WHERE clause, via Mock 7)*

```sql
SELECT
    m.Title AS "TITLE",
    (m.DurationMin / 60.0) AS "DURATION_HOURS"
FROM
    movie m
JOIN
    movielicense ml ON m.MovieID = ml.MovieRef
WHERE
    ml.RightsType = 'Free';
```

**Explanation:** `movie` joins to `movielicense` via `MovieID = MovieRef`. Duration in hours is `DurationMin / 60.0` (decimal division, not integer). `WHERE ml.RightsType = 'Free'` filters to movies with free airing rights.

---

### Task 7 — Users With No Support Requests

```sql
SELECT userId, first_name, last_name
FROM users
WHERE userId NOT IN (SELECT userId FROM support);
```

**Expected Output:**

| userId | first_name | last_name |
|---|---|---|
| 1 | Rahul | Sharma |
| 3 | Amit | Kumar |
| 5 | Vikram | Singh |

**Explanation:** The subquery returns userIds who *have* a support record (2, 4). The outer query selects users whose `userId` is **not** in that set.

⚠️ **Gotcha:** `NOT IN` returns zero rows if the subquery could return any `NULL`. Safe here, but `NOT EXISTS` is a more defensive default:
```sql
SELECT u.userId, u.first_name, u.last_name
FROM users u
WHERE NOT EXISTS (SELECT 1 FROM support s WHERE s.userId = u.userId);
```

---

## Algorithm / Coding Tasks (Python)

### Task 8 — Sentence Containment ("Alice's Phrases")

```python
def solve(input1, input2):
    def contains(s1, s2):
        """True if every word of s1 appears as a substring of some word in s2."""
        words1 = s1.split()
        words2 = s2.split()
        for w in words1:
            if not any(w in w2 for w2 in words2):
                return False
        return True

    a_in_b = contains(input1, input2)
    b_in_a = contains(input2, input1)

    if a_in_b and b_in_a:
        return input1 if len(input1) <= len(input2) else input2
    elif a_in_b:
        return input1
    elif b_in_a:
        return input2
    else:
        return "NONE"


# Verified against the given example
print(solve("hey dikha hello", "hey sameeddikha helloworld"))
# Output: hey dikha hello
```

**Explanation:** For each word in one sentence, check whether it appears as a substring of *any* word in the other sentence (this also covers exact full-word matches, since a word is trivially a substring of itself). Check containment in both directions, then:
- If only one direction holds, return that sentence.
- If both hold (mutual containment), return the **shorter** one.
- If neither holds, return `"NONE"`.

**Complexity:** O(w1 × w2 × L) where w1, w2 are word counts and L is average word length (due to substring checks) — fine for sentence-length inputs.

---

### Task 9 — Most Frequent First+Last Character Combination

```python
def most_frequent_combos(s):
    # split() with no arguments handles multiple/consecutive spaces automatically
    words = s.split()

    freq = {}  # regular dict preserves insertion order in Python 3.7+

    for word in words:
        combo = word[0] + word[-1]
        freq[combo] = freq.get(combo, 0) + 1

    max_freq = max(freq.values())

    # collect all combos tied for highest frequency, in order of first appearance
    return [combo for combo in freq if freq[combo] == max_freq]


# Verified test cases
print(most_frequent_combos("cat dog car dad mom cot"))
# combos: ct, dg, cr, dd, mm, ct -> "ct" appears twice
# Output: ['ct']

print(most_frequent_combos("the quick brown  fox   the lazy dog the end"))
# "the" -> "te" appears 3 times
# Output: ['te']
```

**Explanation:**
1. `s.split()` with no arguments splits on any run of whitespace, so multiple consecutive spaces are handled automatically.
2. For each word, the combo is `word[0] + word[-1]` (first char + last char). A single-character word naturally produces that character doubled.
3. A plain Python `dict` preserves insertion order since 3.7+, which is exactly what's needed to return results "in original order of appearance" — no need for anything like Java's `LinkedHashMap`.
4. After counting, find the max frequency, then collect every combo whose count equals that max, iterating the dict in insertion order to naturally preserve first-appearance order.

**Complexity:** O(n) time (n = total characters), O(k) space (k = number of unique combos).

---

### Bonus — Mock 9's New Algorithm Tasks (Python)

*(included here since they're the same task-type as Tasks 8–9 above — full context in `Mock9_Answer_Key.md`)*

**"Balanced Bloom" (array transformation):**
```python
def balanced_bloom(n, arr):
    result = list(arr)
    any_satisfied = False

    for i in range(n):
        val = arr[i]
        before = sum(1 for x in arr if x < val)
        after = sum(1 for x in arr if x > val)
        same = sum(1 for x in arr if x == val)  # includes arr[i] itself

        if before == after and same < 3:
            result[i] = val
            any_satisfied = True
        else:
            result[i] = 0

    if not any_satisfied:
        return sum(arr)  # fallback: sum of original array

    return sum(result)


print(balanced_bloom(7, [4, 2, 5, 3, 5, 1, 2]))          # 3
print(balanced_bloom(8, [73, 29, 37, 83, 77, 6, 2, 12]))  # 319
```

**"Uniform Grid Count" (string-to-grid analysis):**
```python
import math

def count_uniform_rows_and_columns(s):
    n = int(math.sqrt(len(s)))
    grid = [s[i*n : (i+1)*n] for i in range(n)]

    count = 0
    for row in grid:
        if all(ch == row[0] for ch in row):
            count += 1
    for col in range(n):
        first_char = grid[0][col]
        if all(grid[row][col] == first_char for row in range(n)):
            count += 1

    return count


print(count_uniform_rows_and_columns("aaaabbbcc"))  # 1
print(count_uniform_rows_and_columns("ccee"))       # 2
```

---

## Front-End / DOM Tasks

### Task 10 — Dynamic Search Filter (HTML/CSS/JS)

```html
<ul id="productList">
  <li class="product" data-name="banana">Banana</li>
  <li class="product" data-name="apple">Apple</li>
  <li class="product" data-name="mango">Mango</li>
  <li class="product" data-name="orange">Orange</li>
  <li class="product" data-name="pineapple">Pineapple</li>
</ul>
<input type="text" id="searchInput" value="nana">
```

```css
.product {
  font-size: 25px;
}
```

```javascript
const searchInput = document.getElementById("searchInput");

function filterProducts() {
  const query = searchInput.value.toLowerCase();
  document.querySelectorAll(".product").forEach(item => {
    const name = item.getAttribute("data-name").toLowerCase();
    item.style.display = name.includes(query) ? "" : "none";
  });
}

searchInput.addEventListener("input", filterProducts);
filterProducts(); // run once on load with initial value "nana"
```

**Explanation:** Each product `<li>` carries its searchable tag in `data-name`. `filterProducts()` reads the search box value and, for each product, checks whether `data-name` **contains** the search string (`includes()` matches substrings — e.g. "nana" matches "ba**nana**"). Matching items stay visible; non-matching items get `display: none`.

---

### Task 11 — Shopping Cart Application (HTML/CSS/JS)

```html
<table id="itemsTable">
  <tr><th>Item</th><th>Price</th><th>Action</th></tr>
  <tr>
    <td>Chips</td><td>$2.00</td>
    <td><button id="addToCartChips" onclick="addToCart('Chips')">Add to Cart</button></td>
  </tr>
  <tr>
    <td>Soda</td><td>$1.50</td>
    <td><button id="addToCartSoda" onclick="addToCart('Soda')">Add to Cart</button></td>
  </tr>
  <tr>
    <td>Cookies</td><td>$3.00</td>
    <td><button id="addToCartCookies" onclick="addToCart('Cookies')">Add to Cart</button></td>
  </tr>
</table>

<table id="cartTable">
  <tr><th>Item</th><th>Quantity</th></tr>
</table>
```

```css
table {
  border: 2px solid #0056b3;
  border-collapse: collapse;
  margin-bottom: 20px;
}
th, td {
  border: 1px solid #0056b3;
  padding: 8px 12px;
}
```

```javascript
const cart = {};

function addToCart(itemName) {
  cart[itemName] = (cart[itemName] || 0) + 1;
  renderCart();
}

function renderCart() {
  const cartTable = document.getElementById("cartTable");
  cartTable.innerHTML = "<tr><th>Item</th><th>Quantity</th></tr>";
  for (const item in cart) {
    const row = cartTable.insertRow();
    row.insertCell(0).innerText = item;
    row.insertCell(1).innerText = cart[item];
  }
}
```

**Explanation:** Each "Add to Cart" button has the required unique id and calls `addToCart()` with the item name. A `cart` object tracks quantities; each click increments the count and `renderCart()` rebuilds the cart table rows. Both tables get the `#0056b3` border color via CSS.

---

### Task 12 — Set Textarea Value via JavaScript

```html
<textarea id="myTextarea" rows="4" cols="50"></textarea>
<button onclick="setValue()">Set Text</button>

<script>
function setValue() {
  const textarea = document.getElementById("myTextarea");
  textarea.value = "This is the new text!"; // replace with the exact text given in the exam
}
</script>
```

**One-liner alternative:**
```javascript
document.getElementById("myTextarea").value = "Hello, Sachin!";
```

**Explanation:** `getElementById()` retrieves the textarea by its `id`; setting `.value` replaces its content. Substitute whatever exact text string the real exam provides.

---

## Summary

| # | Task | Language | Status |
|---|---|---|---|
| 1 | Player Sports SQL | SQL | ✅ Verified |
| 2 | Instructor Schedule SQL | SQL | ✅ Verified |
| 3 | Movie/Channel SQL | SQL | ✅ Verified |
| 4 | Episodes After 6PM SQL | SQL | ✅ Verified |
| 5 | Zoo Visitors SQL | SQL | ✅ Verified |
| 6 | Movie Duration SQL | SQL | ✅ Verified |
| 7 | Users No Support SQL | SQL | ✅ From source |
| 8 | Sentence Containment | Python | ✅ Verified by execution |
| 9 | First+Last Char Frequency | Python | ✅ Verified by execution |
| 10 | Search Filter | HTML/CSS/JS | Derived (no source solution) |
| 11 | Shopping Cart | HTML/CSS/JS | Derived (no source solution) |
| 12 | Textarea Set Value | HTML/CSS/JS | ✅ From source |