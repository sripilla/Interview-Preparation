/*
===========================================================
REACT LESSON: PRIORITY TASK BOARD
===========================================================

This program practices:

1. useState
2. Arrays of objects
3. map()
4. filter()
5. sort()
6. Conditional rendering
7. Ternary operator
8. Dynamic styling
9. Event handlers
10. Derived data
11. Helper functions
12. Sorting using a custom priority order
13. Filter chips
14. Passing arguments to event handlers


===========================================================
1. TASK DATA
===========================================================

Each task is an object:

{
    id: 1,
    title: "Fix production login bug",
    priority: "high"
}


The priority can be:

"low"
"medium"
"high"


===========================================================
2. PRIORITY COLORS
===========================================================

The requirement gives us:

low    → green
medium → amber
high   → red


Instead of writing colors everywhere,
we create a helper function:

getPriorityColor(priority)


Example:

getPriorityColor("high")

returns:

{
    bg: "...",
    text: "..."
}


This keeps our code organized.


===========================================================
3. FILTER STATE
===========================================================

We need to remember which filter is selected.

Example:

const [activeFilter, setActiveFilter] =
    useState("all");


Possible values:

"all"
"low"
"medium"
"high"


Initially:

activeFilter = "all"


Therefore all tasks are displayed.


===========================================================
4. FILTER CHIPS
===========================================================

We have:

All
Low
Medium
High


Clicking a chip changes activeFilter.

Example:

setActiveFilter("high");


Now:

activeFilter = "high"


Only high-priority tasks are displayed.


===========================================================
5. DYNAMIC CHIPS
===========================================================

We can store the filter names:

const filters = [
    "all",
    "low",
    "medium",
    "high"
];


Then use:

filters.map(...)


This avoids writing four separate
button elements.


===========================================================
6. ACTIVE CHIP
===========================================================

The currently selected chip should look different.

We can check:

activeFilter === filter


If true:

highlight it.


If false:

normal appearance.


Example:

background:
    activeFilter === filter
        ? "#eee"
        : "white"


===========================================================
7. FILTERING
===========================================================

If:

activeFilter === "all"

show every task.


Otherwise:

tasks.filter(
    (task) =>
        task.priority === activeFilter
)


Example:

activeFilter = "high"


Only:

task.priority === "high"

remains.


===========================================================
8. SORTING
===========================================================

Tasks must ALWAYS be sorted:

High
Medium
Low


Regardless of their original array order.


We can create a priority ranking:

const priorityOrder = {
    high: 1,
    medium: 2,
    low: 3
};


Then:

a.priority
    compared with
b.priority


using:

priorityOrder[a.priority]
    -
priorityOrder[b.priority]


Smaller number appears first.


===========================================================
9. IMPORTANT: SORT BEFORE FILTER
===========================================================

The requirement says:

"Tasks are always sorted by priority before
any filter is applied."


Therefore the easiest approach is:

1. Copy the tasks
2. Sort the copy
3. Filter the sorted list


Example:

const sortedTasks = [...tasks].sort(...);

const filteredTasks =
    activeFilter === "all"
        ? sortedTasks
        : sortedTasks.filter(...);


===========================================================
10. WHY [...tasks]?
===========================================================

sort() MUTATES the original array.

We don't want to directly modify state/data.

Avoid:

tasks.sort(...)


Instead:

[...tasks].sort(...)


The spread operator creates a copy first.


===========================================================
11. DERIVED DATA
===========================================================

sortedTasks and filteredTasks do not need
useState.

Why?

They can be calculated from:

tasks
+
activeFilter


Therefore they are:

DERIVED DATA.


===========================================================
12. PRIORITY BADGE
===========================================================

Each task displays:

Fix production login bug       HIGH


The badge gets its colors from:

getPriorityColor(task.priority)


For example:

high:
red background + dark red text

medium:
amber background + dark amber text

low:
green background + dark green text


===========================================================
13. map() TO DISPLAY TASKS
===========================================================

We use:

filteredTasks.map((task) => (
    ...
))


Each task needs:

key={task.id}


===========================================================
14. SHOWING TASK COUNT
===========================================================

Requirement:

"Showing {n} tasks"


So:

filteredTasks.length


Example:

Showing 4 tasks


If High is selected and there is
only one high task:

Showing 1 task


===========================================================
15. IMPORTANT DATA FLOW
===========================================================

tasks
  ↓
sort by priority
  ↓
activeFilter
  ↓
filter
  ↓
filteredTasks
  ↓
map()
  ↓
display tasks


===========================================================
16. REQUIREMENTS
===========================================================

1. Priorities:
   low / medium / high

2. getPriorityColor(priority)
   provides colors.

3. Filter chips:
   All / Low / Medium / High

4. Active chip highlighted.

5. Always sort:
   High → Medium → Low

6. Apply filter after sorting.

7. Display title and colored badge.

8. Display filtered count.


===========================================================
PROGRAM STARTS HERE
===========================================================
*/

import React, { useState } from "react";

function PriorityTaskBoard() {

  // -------------------------------------------------------
  // TASK DATA
  // -------------------------------------------------------

  const tasks = [
    {
      id: 1,
      title: "Organize team lunch",
      priority: "low",
    },

    {
      id: 2,
      title: "Update API documentation",
      priority: "medium",
    },

    {
      id: 3,
      title: "Fix production login bug",
      priority: "high",
    },

    {
      id: 4,
      title: "Review pull request #482",
      priority: "medium",
    },
  ];


  // -------------------------------------------------------
  // FILTER STATE
  // -------------------------------------------------------

  const [activeFilter, setActiveFilter] =
    useState("all");


  // -------------------------------------------------------
  // FILTER OPTIONS
  // -------------------------------------------------------

  const filters = [
    "all",
    "low",
    "medium",
    "high",
  ];


  // -------------------------------------------------------
  // PRIORITY ORDER
  // -------------------------------------------------------

  /*
    Smaller number = higher priority.

    high   → 1
    medium → 2
    low    → 3
  */

  const priorityOrder = {
    high: 1,
    medium: 2,
    low: 3,
  };


  // -------------------------------------------------------
  // PRIORITY COLOR HELPER
  // -------------------------------------------------------

  function getPriorityColor(priority) {

    if (priority === "high") {

      return {
        bg: "#fde8e8",
        text: "#c62828",
      };

    }

    if (priority === "medium") {

      return {
        bg: "#fff1d6",
        text: "#a65f00",
      };

    }

    return {
      bg: "#e8f5df",
      text: "#4d7c20",
    };
  }


  // -------------------------------------------------------
  // SORT TASKS
  // -------------------------------------------------------

  /*
    IMPORTANT:

    sort() changes the original array.

    Therefore create a copy first:

    [...tasks]
  */

  const sortedTasks = [...tasks].sort(
    (a, b) =>
      priorityOrder[a.priority] -
      priorityOrder[b.priority]
  );


  // -------------------------------------------------------
  // FILTER TASKS
  // -------------------------------------------------------

  let filteredTasks = sortedTasks;


  /*
    If "all" is selected,
    keep all sorted tasks.

    Otherwise filter by priority.
  */

  if (activeFilter !== "all") {

    filteredTasks =
      sortedTasks.filter(
        (task) =>
          task.priority === activeFilter
      );
  }


  // -------------------------------------------------------
  // JSX
  // -------------------------------------------------------

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "30px auto",
        padding: 26,
        border: "1px solid #ddd",
        borderRadius: 12,
        fontFamily: "Arial",
      }}
    >

      {/* =================================================
          HEADING
      ================================================= */}

      <h2
        style={{
          marginTop: 0,
          fontSize: 20,
        }}
      >
        My tasks
      </h2>


      {/* =================================================
          FILTER CHIPS
      ================================================= */}

      <div
        style={{
          display: "flex",
          gap: 10,
          marginBottom: 20,
        }}
      >

        {filters.map((filter) => {

          const isActive =
            activeFilter === filter;

          return (

            <button
              key={filter}

              onClick={() =>
                setActiveFilter(filter)
              }

              style={{
                border: isActive
                  ? "1px solid #999"
                  : "none",

                borderRadius: 999,

                padding: "8px 14px",

                cursor: "pointer",

                background:
                  isActive
                    ? "#f5f5f5"
                    : "#fff",

                fontSize: 13,

                textTransform: "capitalize",
              }}
            >
              {filter}
            </button>

          );
        })}

      </div>


      {/* =================================================
          TASK LIST
      ================================================= */}

      <div>

        {filteredTasks.map((task) => {

          // Get colors for this task's priority
          const colors =
            getPriorityColor(
              task.priority
            );


          return (

            <div
              key={task.id}
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
                padding: "12px 0",
                borderBottom:
                  "1px solid #ddd",
              }}
            >

              {/* TASK TITLE */}

              <span
                style={{
                  fontSize: 14,
                }}
              >
                {task.title}
              </span>


              {/* PRIORITY BADGE */}

              <span
                style={{
                  background:
                    colors.bg,

                  color:
                    colors.text,

                  padding:
                    "5px 10px",

                  borderRadius:
                    999,

                  fontSize: 12,

                  fontWeight:
                    "bold",

                  textTransform:
                    "capitalize",
                }}
              >
                {task.priority}
              </span>

            </div>

          );
        })}

      </div>


      {/* =================================================
          TASK COUNT
      ================================================= */}

      <p
        style={{
          marginTop: 20,
          fontSize: 13,
          color: "#777",
        }}
      >
        Showing {filteredTasks.length} tasks
      </p>

    </div>
  );
}

export default PriorityTaskBoard;