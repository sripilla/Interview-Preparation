# Round 2 Coding Tasks — Questions Only (Mock 5/7 + Mock 8 merged)


---

## SQL Tasks

### Task 1 — Player Sports Registration Count

Write an SQL query to display: first name, last name, and the total number of sports each player is signed up for if their payment status is `'Paid'` and their registration was made in the year 2024. Use alias as "First Name", "Last Name" and "Number of Sports Registered".

**Expected output columns:** `First Name | Last Name | Number of Sports Registered`

**Schema:**

`player` table

| player_id | first_name | last_name |
|---|---|---|
| 1 | John | Doe |
| 2 | Jane | Smith |
| 3 | Robert | Brown |
| 4 | Emily | Johnson |
| 5 | Michael | Williams |

`registration` table

| reg_id | player_id | sport_id | payment_status | reg_date |
|---|---|---|---|---|
| 101 | 1 | 101 | Paid | 2024-03-15 |
| 102 | 1 | 102 | Paid | 2024-04-10 |
| 103 | 1 | 103 | Paid | 2024-05-20 |
| 104 | 2 | 101 | Paid | 2024-01-12 |
| 105 | 2 | 104 | Paid | 2024-02-18 |
| 106 | 2 | 105 | Paid | 2024-06-22 |
| 107 | 3 | 102 | Paid | 2024-07-01 |
| 108 | 3 | 103 | Paid | 2024-08-14 |
| 109 | 3 | 106 | Paid | 2024-09-05 |
| 110 | 4 | 101 | Paid | 2024-03-30 |
| 111 | 4 | 104 | Paid | 2024-04-12 |
| 112 | 4 | 107 | Paid | 2024-05-19 |
| 113 | 5 | 102 | Paid | 2024-06-11 |
| 114 | 5 | 105 | Paid | 2024-07-25 |
| 115 | 5 | 108 | Paid | (date not captured) |

---

### Task 2 — Instructor Schedule (Courses After 10 AM)

Write an SQL query to display: distinct instructor's last name, first name, and the schedule start time for courses that start after 10 AM. Use alias "Instructor Last Name", "Instructor First Name", "Start Time".

**Expected output columns:** `Instructor Last Name | Instructor First Name | Start Time`

**Schema (relevant tables):**
- `instructor` table: instructor_id (PK), last_name, first_name, type, dept_id (FK→department)
- `section` table: section_id (PK), course_id (FK→course), schedule_id (FK→schedule), instructor_id (FK→instructor), room
- `schedule` table: schedule_id (PK), day, starttime, endtime

---

### Task 3 — English Movies and Their Airing Channels

Write an SQL query to display: name of the English movies and the name of channels which air them.

**Expected output columns:** `MOVIE_NAME | CHANNEL_NAME`

**Schema:**
- `airing` table: AiringID (PK), ChannelID, StartTime, EndTime, MovieID, EpisodeID, LicenseID, IsLive
- `channel` table: ChannelID (PK), Name, ChannelTypeID, Country, LaunchDate, Active
- `movie` table: MovieID (PK), Title, ReleaseYear, DurationMin, Language, Description, ContentRating, Genre
- `movielicense` table: LicenseID (PK), ChannelID, MovieRef, ValidFrom, ValidTo, RightsType, MaxRuns

---

### Task 4 — Episodes Airing After 6 PM

Write an SQL query to display: Airing id, episode id and channel name which airs episode after 6 PM.

**Hint:** Do not display any null values in the episode id column.

**Expected output columns:** `AIRINGID | EPISODEID | CHANNEL_NAME`

**Schema:** Same `airing`, `channel`, `movielicense` tables as Task 3, plus:
- `episode` table: EpisodeID (PK), ShowID, SeasonID, SeasonNumber, EpisodeNumber, Title, Description, DurationMin, AirDate

---

### Task 5 — Zoo Visitors (Excluding Child Tickets & Arctic Enclosures)

Write an SQL query to display: the visitor's name, ticket type, enclosure's name and enclosure's type for all visitors whose ticket type is **not** 'Child' and enclosure's type is **not** 'Arctic'.

**Expected output columns:** `VISITOR_NAME | TICKET_TYPE | ENCLOSURE_NAME | TYPE`

**Schema:**
- `visitor` table: Visitor_ID (PK), Name, Date_of_Visit, Ticket_Type, Amount_Paid
- `enclosure_visit_log` table: Log_ID (PK), Visitor_ID (FK), Enclosure_ID (FK), Visit_Time
- `enclosure` table: Enclosure_ID (PK), Name, Type, Capacity, Location_Description
- *(also present in schema but not needed for this query: `animal`, `animal_caretaker`, `caretaker`, `medical_record`, `feeding_schedule`)*

---

### Task 6 — Movie Duration in Hours (Free Airing Rights)

Write an SQL query to display: title of movie and duration in hours where the right to air for the movie is free.

**Hint:** duration in hours = (Duration in mins) / 60

**Expected output columns:** `TITLE | DURATION_HOURS`

**Schema:**
- `movie` table: MovieID (PK), Title, ReleaseYear, DurationMin, Language, Description, ContentRating, Genre
- `movielicense` table: LicenseID (PK), ChannelID, MovieRef, ValidFrom, ValidTo, RightsType, MaxRuns

---

### Task 7 — Users With No Support Requests

A company maintains two tables:
1. `users` — contains all registered users.
2. `support` — contains users who have recently received help from the support team (help request records).

**Goal:** Find all users who have **not** raised any support request.

**Schema:**

`users` table

| userId | first_name | last_name |
|---|---|---|
| 1 | Rahul | Sharma |
| 2 | Sneha | Patel |
| 3 | Amit | Kumar |
| 4 | Priya | Reddy |
| 5 | Vikram | Singh |

`support` table

| supportId | userId | issue_description |
|---|---|---|
| 1 | 2 | Payment issue |
| 2 | 4 | Account login error |

---

## Algorithm / Coding Tasks

### Task 8 — Sentence Containment ("Alice's Phrases")

Alice is a writer working on her new story. She wanted to see if the phrases she created could be found within her own sentences. She has two string values, S1 and S2, representing sentences consisting of lowercase English words separated by spaces.

A sentence is said to be **contained** in another if all its words appear in the other sentence as either a full word or a substring of any word. Your task is to find and return a string value representing the sentence that is fully contained in the other sentence. If both sentences satisfy the condition, return the shorter sentence. If neither sentence is contained in the other, return `"NONE"`.

**Input Specification:**
- `input1`: A string value S1 representing sentence 1.
- `input2`: A string value S2 representing sentence 2.

**Output Specification:**
Return a string value representing the sentence that is fully contained in the other sentence. If both satisfy the condition, return the shorter sentence. If neither is contained in the other, return `"NONE"`.

**Example:**
- Input: `input1 = "hey dikha hello"`, `input2 = "hey sameeddikha helloworld"`
- Output: `hey dikha hello`

---

### Task 9 — Most Frequent First+Last Character Combination

Given a string (may contain multiple spaces), find the first+last character combination of each word. Then return the combination(s) with the highest frequency, maintaining the original order of appearance.

**Requirements:**
- Input string may have multiple consecutive spaces between words.
- For each word, form a 2-character combo: first character + last character.
- Count how often each combo occurs.
- Return the combo(s) that occur most frequently.
- If there's a tie for highest frequency, return **all** tied combos, in the order they first appeared in the string.

---

## Front-End / DOM Tasks

### Task 10 — Dynamic Search Filter (HTML/CSS/JS)

**Scenario:** Developing a search filter for a website where users can filter a list of fruits or vegetables dynamically based on search input. The setup is incomplete, and you need to finalize it correctly.

**Objectives:**
1. **HTML:** Add 5 list elements (fruits or vegetables) inside an unordered list with the class `product` and a `data-name` attribute containing their search tags.
2. **CSS:** Set the font size of the list items to 25px.
3. **JavaScript:**
   - Set the initial search value input to `"nana"`.
   - Implement code to display a product if the search input is part of its name; otherwise, hide it using CSS styles.

**Constraints:**
- Do not change the `id` or `class` attributes of any elements, as they are used by the JavaScript code.
- Ensure that the styling follows the provided CSS correctly.

---

### Task 11 — Shopping Cart Application (HTML/CSS/JS)

**Scenario:** You are tasked with creating a simple web application that implements a Shopping Cart. The application should allow users to add items displayed on the screen to a Shopping Cart table. Based on the number of times the "Add to Cart" button is clicked, the quantity of the items should get updated in the Shopping Cart Table. The application should be styled with basic CSS to ensure a clean and modern appearance.

**Objective(s):**
1. Create an **Add to Cart** button for every item in the Items Table under the Action Column. The buttons should have unique ids `addToCartChips`, `addToCartSoda`, and `addToCartCookies` for the items Chips, Soda, and Cookies respectively.
2. Give both tables a border color `#0056b3`.
3. Complete the JavaScript code to update the quantity of each item selected to be added into the Shopping Cart.

---

### Task 12 — Set Textarea Value via JavaScript

Set the value of a `<textarea>` through JavaScript to (some text given in the exam).

**Starter HTML:**
```html
<textarea id="myTextarea" rows="4" cols="50"></textarea>
<button onclick="setValue()">Set Text</button>
```

---