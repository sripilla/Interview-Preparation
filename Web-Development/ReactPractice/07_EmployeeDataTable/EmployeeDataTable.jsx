/*
===========================================================
REACT LESSON: EMPLOYEE DATA TABLE
===========================================================

This program practices:

1. useState
2. Rendering arrays with map()
3. Controlled input
4. onChange
5. Search/filtering
6. Case-insensitive string matching
7. Sorting arrays
8. Ascending / descending sorting
9. Dynamic column sorting
10. Pagination
11. slice()
12. Math.ceil()
13. Math.min()
14. Derived values
15. Conditional rendering
16. Disabled buttons
17. Spread operator
18. Array methods
19. Dynamic table headers
20. Combining multiple pieces of logic


===========================================================
1. DATA
===========================================================

We start with an array of employee objects.

Example:

[
    {
        name: "Anita Rao",
        department: "Design",
        salary: 81500
    }
]

Each employee has:

name
department
salary


===========================================================
2. useState
===========================================================

We need three main pieces of state:

SEARCH TEXT:

const [search, setSearch] = useState("");


SORT COLUMN:

const [sortColumn, setSortColumn] = useState("name");


SORT DIRECTION:

const [sortDirection, setSortDirection] = useState("asc");


We also need the current page:

const [page, setPage] = useState(1);


===========================================================
3. CONTROLLED SEARCH INPUT
===========================================================

The search input is controlled by React.

Example:

<input
    value={search}
    onChange={(e) => setSearch(e.target.value)}
/>


===========================================================
4. FILTERING
===========================================================

The requirement says:

Search should match employee NAME.

The match is:

1. Case-insensitive
2. Substring match

Example:

Search:

"an"

matches:

"Anita Rao"
"Ananya Sharma"
"Alexander Roy"


===========================================================
5. toLowerCase()
===========================================================

To make search case-insensitive:

employee.name.toLowerCase()

and:

search.toLowerCase()


Example:

"Anita".toLowerCase()

becomes:

"anita"


===========================================================
6. includes()
===========================================================

includes() checks whether one string contains another.

Example:

"anita".includes("nit")

returns:

true


So:

employee.name
    .toLowerCase()
    .includes(search.toLowerCase())


performs our search.


===========================================================
7. filter()
===========================================================

filter() creates a new array containing only
the employees that satisfy the condition.

Example:

employees.filter(
    (employee) => employee.name.includes(search)
)


===========================================================
8. SORTING
===========================================================

The user can click:

Name
Department
Salary


The first click on a column sorts ascending.

Example:

A → B → C


Clicking the same column again reverses it:

C → B → A


Clicking a different column starts that column
in ascending order.


===========================================================
9. SORT COLUMN STATE
===========================================================

We store which column is currently selected:

const [sortColumn, setSortColumn] = useState("name");


Possible values:

"name"
"department"
"salary"


===========================================================
10. SORT DIRECTION STATE
===========================================================

We store:

"asc"

or:

"desc"


Example:

asc:

100
200
300


desc:

300
200
100


===========================================================
11. SORTING WITH sort()
===========================================================

sort() compares two values.

For numbers:

a - b

means ascending.

b - a

means descending.


For strings, we can use:

localeCompare()


Example:

a.name.localeCompare(b.name)


===========================================================
12. IMPORTANT: DON'T MUTATE STATE
===========================================================

sort() changes the original array.

Therefore we should copy the array first:

const sorted = [...filtered];


Then:

sorted.sort(...)


This is an important React principle:

DO NOT directly mutate state.


===========================================================
13. PAGINATION
===========================================================

We want:

5 rows per page.

Example:

Page 1:

rows 0-4


Page 2:

rows 5-9


Page 3:

rows 10-14


We calculate:

const rowsPerPage = 5;


===========================================================
14. START INDEX
===========================================================

For page 1:

(page - 1) * rowsPerPage

= (1 - 1) * 5
= 0


For page 2:

(2 - 1) * 5
= 5


For page 3:

(3 - 1) * 5
= 10


===========================================================
15. END INDEX
===========================================================

End index:

startIndex + rowsPerPage


For page 1:

0 + 5 = 5


For page 2:

5 + 5 = 10


===========================================================
16. slice()
===========================================================

We use slice() to select the rows for the
current page.

Example:

sorted.slice(startIndex, endIndex)


Important:

slice() does not include the end index.


===========================================================
17. TOTAL PAGES
===========================================================

If we have 12 results and 5 rows per page:

12 / 5 = 2.4


We need 3 pages.

Therefore:

Math.ceil(12 / 5)

returns:

3


===========================================================
18. PREV / NEXT BUTTONS
===========================================================

Previous should be disabled on page 1:

disabled={page === 1}


Next should be disabled on the last page:

disabled={page === totalPages}


===========================================================
19. RESULT COUNT
===========================================================

The requirement says:

Showing {start}-{end} of {total} results


Example:

Showing 6-10 of 12 results


The important point is:

TOTAL = FILTERED RESULTS

NOT the original dataset.


===========================================================
20. EMPTY RESULTS
===========================================================

If search produces no results:

Showing 0-0 of 0 results


and no table rows should appear.


===========================================================
21. RESET PAGE WHEN SEARCH CHANGES
===========================================================

When the user changes the search:

setSearch(value);

and:

setPage(1);


This ensures that a new search always starts
from page 1.


===========================================================
22. DYNAMIC TABLE HEADERS
===========================================================

Instead of writing three separate buttons,
we can use an array:

["name", "department", "salary"]


and:

.map()


to create the headers.


===========================================================
23. CONDITIONAL SORT ARROW
===========================================================

If the selected column is the current sort column,
we can show:

↑

or:

↓


Example:

Name ↑


===========================================================
24. DERIVED DATA FLOW
===========================================================

Original employees
        ↓
     FILTER
        ↓
 Filtered employees
        ↓
      SORT
        ↓
 Sorted employees
        ↓
    PAGINATE
        ↓
 Current page rows
        ↓
      TABLE


===========================================================
25. REQUIREMENTS
===========================================================

1. Search by employee name.
2. Search is case-insensitive.
3. Search is substring-based.
4. Sort Name.
5. Sort Department.
6. Sort Salary.
7. Same column reverses direction.
8. Different column starts ascending.
9. 5 rows per page.
10. Previous disabled on first page.
11. Next disabled on last page.
12. Result count uses filtered data.
13. Search resets page to 1.


===========================================================
PROGRAM STARTS HERE
===========================================================
*/

import React, { useState } from "react";

function EmployeeDataTable() {

  // -------------------------------------------------------
  // EMPLOYEE DATA
  // -------------------------------------------------------

  const employees = [
    {
      name: "Anita Rao",
      department: "Design",
      salary: 81500,
    },
    {
      name: "Alexander Roy",
      department: "Engineering",
      salary: 92000,
    },
    {
      name: "Ananya Sharma",
      department: "Marketing",
      salary: 76000,
    },
    {
      name: "Brian Thomas",
      department: "Engineering",
      salary: 88000,
    },
    {
      name: "Catherine Lee",
      department: "HR",
      salary: 72000,
    },
    {
      name: "Daniel Smith",
      department: "Finance",
      salary: 95000,
    },
    {
      name: "Emily Johnson",
      department: "Marketing",
      salary: 79000,
    },
    {
      name: "George Wilson",
      department: "Engineering",
      salary: 87000,
    },
    {
      name: "Hannah Brown",
      department: "Design",
      salary: 74000,
    },
    {
      name: "James Miller",
      department: "Finance",
      salary: 91000,
    },
    {
      name: "Kavya Reddy",
      department: "HR",
      salary: 68000,
    },
    {
      name: "Michael Davis",
      department: "Engineering",
      salary: 98000,
    },
  ];


  // -------------------------------------------------------
  // STATE
  // -------------------------------------------------------

  const [search, setSearch] = useState("");

  const [sortColumn, setSortColumn] =
    useState("name");

  const [sortDirection, setSortDirection] =
    useState("asc");

  const [page, setPage] = useState(1);


  // -------------------------------------------------------
  // ROWS PER PAGE
  // -------------------------------------------------------

  const rowsPerPage = 5;


  // -------------------------------------------------------
  // SEARCH / FILTER
  // -------------------------------------------------------

  const filteredEmployees =
    employees.filter((employee) =>
      employee.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );


  // -------------------------------------------------------
  // SORT
  // -------------------------------------------------------

  const sortedEmployees = [...filteredEmployees];

  sortedEmployees.sort((a, b) => {

    const valueA = a[sortColumn];
    const valueB = b[sortColumn];


    // Salary is numeric
    if (sortColumn === "salary") {

      if (sortDirection === "asc") {
        return valueA - valueB;
      }

      return valueB - valueA;
    }


    // Name and department are strings
    const comparison =
      String(valueA).localeCompare(
        String(valueB)
      );


    if (sortDirection === "asc") {
      return comparison;
    }

    return -comparison;
  });


  // -------------------------------------------------------
  // TOTAL PAGES
  // -------------------------------------------------------

  const totalPages =
    Math.ceil(
      sortedEmployees.length / rowsPerPage
    );


  // -------------------------------------------------------
  // START / END INDEX
  // -------------------------------------------------------

  const startIndex =
    (page - 1) * rowsPerPage;

  const endIndex =
    Math.min(
      startIndex + rowsPerPage,
      sortedEmployees.length
    );


  // -------------------------------------------------------
  // CURRENT PAGE DATA
  // -------------------------------------------------------

  const currentEmployees =
    sortedEmployees.slice(
      startIndex,
      endIndex
    );


  // -------------------------------------------------------
  // HANDLE SEARCH
  // -------------------------------------------------------

  function handleSearch(e) {

    const value = e.target.value;

    setSearch(value);

    // Whenever search changes,
    // return to page 1.
    setPage(1);
  }


  // -------------------------------------------------------
  // HANDLE SORT
  // -------------------------------------------------------

  function handleSort(column) {

    if (sortColumn === column) {

      // Same column:
      // reverse direction.

      setSortDirection(
        sortDirection === "asc"
          ? "desc"
          : "asc"
      );

    } else {

      // Different column:
      // select it and start ascending.

      setSortColumn(column);
      setSortDirection("asc");
    }

    // Return to page 1 after sorting
    setPage(1);
  }


  // -------------------------------------------------------
  // PREVIOUS PAGE
  // -------------------------------------------------------

  function previousPage() {

    if (page > 1) {
      setPage(page - 1);
    }
  }


  // -------------------------------------------------------
  // NEXT PAGE
  // -------------------------------------------------------

  function nextPage() {

    if (page < totalPages) {
      setPage(page + 1);
    }
  }


  // -------------------------------------------------------
  // FORMAT COLUMN NAME
  // -------------------------------------------------------

  function getColumnLabel(column) {

    if (column === "name") {
      return "Name";
    }

    if (column === "department") {
      return "Department";
    }

    return "Salary";
  }


  // -------------------------------------------------------
  // JSX
  // -------------------------------------------------------

  return (
    <div
      style={{
        maxWidth: 650,
        margin: "30px auto",
        padding: 26,
        border: "1px solid #ddd",
        borderRadius: 12,
        fontFamily: "Arial",
      }}
    >

      {/* =================================================
          SEARCH
      ================================================= */}

      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search by name..."
        style={{
          width: "100%",
          padding: 12,
          boxSizing: "border-box",
          border: "1px solid #ccc",
          borderRadius: 6,
          fontSize: 15,
          marginBottom: 20,
        }}
      />


      {/* =================================================
          TABLE
      ================================================= */}

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >

        {/* TABLE HEADER */}

        <thead>

          <tr>

            {[
              "name",
              "department",
              "salary",
            ].map((column) => (

              <th
                key={column}
                onClick={() =>
                  handleSort(column)
                }
                style={{
                  textAlign:
                    column === "salary"
                      ? "right"
                      : "left",
                  padding: 10,
                  borderBottom:
                    "2px solid #ccc",
                  cursor: "pointer",
                }}
              >

                {getColumnLabel(column)}

                {/* Sort arrow */}
                {sortColumn === column && (
                  <span
                    style={{
                      marginLeft: 5,
                    }}
                  >
                    {sortDirection === "asc"
                      ? "↑"
                      : "↓"}
                  </span>
                )}

              </th>

            ))}

          </tr>

        </thead>


        {/* TABLE BODY */}

        <tbody>

          {currentEmployees.map(
            (employee) => (

              <tr key={employee.name}>

                {/* NAME */}

                <td
                  style={{
                    padding: 10,
                    borderBottom:
                      "1px solid #eee",
                  }}
                >
                  {employee.name}
                </td>


                {/* DEPARTMENT */}

                <td
                  style={{
                    padding: 10,
                    borderBottom:
                      "1px solid #eee",
                  }}
                >
                  {employee.department}
                </td>


                {/* SALARY */}

                <td
                  style={{
                    padding: 10,
                    borderBottom:
                      "1px solid #eee",
                    textAlign: "right",
                  }}
                >
                  ${employee.salary.toLocaleString()}
                </td>

              </tr>

            )
          )}

        </tbody>

      </table>


      {/* =================================================
          NO RESULTS
      ================================================= */}

      {filteredEmployees.length === 0 && (
        <p
          style={{
            textAlign: "center",
            color: "#777",
            padding: 20,
          }}
        >
          No employees found.
        </p>
      )}


      {/* =================================================
          RESULT COUNT + PAGINATION
      ================================================= */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 20,
        }}
      >

        {/* RESULT COUNT */}

        <span
          style={{
            color: "#666",
            fontSize: 14,
          }}
        >
          {filteredEmployees.length === 0
            ? "Showing 0-0 of 0 results"
            : `Showing ${startIndex + 1}-${endIndex} of ${filteredEmployees.length} results`}
        </span>


        {/* PAGINATION BUTTONS */}

        <div
          style={{
            display: "flex",
            gap: 8,
          }}
        >

          {/* PREVIOUS */}

          <button
            onClick={previousPage}
            disabled={
              page === 1 ||
              totalPages === 0
            }
            style={{
              padding: "7px 14px",
              border: "1px solid #ccc",
              borderRadius: 5,
              cursor:
                page === 1 ||
                totalPages === 0
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            Prev
          </button>


          {/* NEXT */}

          <button
            onClick={nextPage}
            disabled={
              page === totalPages ||
              totalPages === 0
            }
            style={{
              padding: "7px 14px",
              border: "1px solid #ccc",
              borderRadius: 5,
              cursor:
                page === totalPages ||
                totalPages === 0
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
}

export default EmployeeDataTable;