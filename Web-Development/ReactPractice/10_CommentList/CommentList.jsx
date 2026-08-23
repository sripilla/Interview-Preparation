/*
===========================================================
REACT LESSON: COMMENT LIST
===========================================================

This program practices:

1. useState
2. Arrays of objects
3. map()
4. Conditional rendering
5. Event handlers
6. Passing arguments to functions
7. Ternary operator
8. Logical && operator
9. Dynamic styling
10. Object spread operator
11. Controlled state updates
12. Rendering lists with key
13. Helper functions
14. Empty-state rendering


===========================================================
1. COMMENT DATA
===========================================================

Each comment is an object:

{
    id: 1,
    author: "Priya Nair",
    text: "Great explanation!",
    liked: false,
    likes: 12,
    replies: 3
}


Important properties:

id
    Unique identifier.

author
    Person who wrote the comment.

text
    Comment content.

liked
    Whether the current user liked it.

likes
    Number of likes.

replies
    Number of replies.


===========================================================
2. useState
===========================================================

The comments array is stored in state:

const [comments, setComments] =
    useState([...]);

When comments change, React automatically
re-renders the component.


===========================================================
3. toggleLike()
===========================================================

The question says that toggleLike(id)
is already implemented.

It changes:

liked: false → true

and:

liked: true → false


It also adjusts the likes count.


===========================================================
4. map()
===========================================================

We use map() to render every comment:

comments.map((comment) => (
    <div>
        ...
    </div>
))


Each comment needs a unique key:

key={comment.id}


===========================================================
5. LIKE BUTTON
===========================================================

Clicking the like button must call:

toggleLike(comment.id)


Notice:

WRONG:

onClick={toggleLike(comment.id)}

This calls the function immediately.

CORRECT:

onClick={() => toggleLike(comment.id)}


The arrow function waits until the user clicks.


===========================================================
6. HEART ICON
===========================================================

Liked comment:

♥

Unliked comment:

♡


We can use a ternary:

comment.liked ? "♥" : "♡"


===========================================================
7. HEART COLOR
===========================================================

Liked:

accent color

Unliked:

muted gray


Example:

color: comment.liked
    ? "#e04b5a"
    : "#999"


===========================================================
8. LIKE COUNT
===========================================================

The number of likes is displayed next to
the heart:

♥ 12


or:

♡ 4


The value comes from:

comment.likes


===========================================================
9. REPLY COUNT
===========================================================

The question provides a helper:

getReplyLabel(count)


We MUST use that helper.

For example:

getReplyLabel(1)

returns:

"1 reply"


and:

getReplyLabel(3)

returns:

"3 replies"


We do NOT implement pluralization ourselves.


===========================================================
10. CONDITIONAL RENDERING
===========================================================

If there are comments:

    render the comment list.


If comments is empty:

    show:

    "No comments yet"


Example:

{comments.length === 0 ? (
    <p>No comments yet</p>
) : (
    ...
)}


===========================================================
11. TERNARY OPERATOR
===========================================================

Syntax:

condition
    ? valueIfTrue
    : valueIfFalse


Example:

comment.liked
    ? "♥"
    : "♡"


===========================================================
12. DYNAMIC STYLING
===========================================================

React allows styles to depend on state.

Example:

style={{
    color: comment.liked
        ? "red"
        : "gray"
}}


So the UI automatically changes
when liked changes.


===========================================================
13. IMPORTANT DATA FLOW
===========================================================

comments
    ↓
map()
    ↓
comment row
    ↓
like button
    ↓
toggleLike(id)
    ↓
comments state changes
    ↓
React re-renders


===========================================================
14. REQUIREMENTS
===========================================================

1. Show "Comments" heading.
2. Show author name.
3. Show comment text.
4. Show like button.
5. Show like count.
6. Show reply count.
7. Use toggleLike(id).
8. Liked = filled heart.
9. Unliked = outline heart.
10. Liked heart uses accent color.
11. Unliked heart uses muted gray.
12. Use getReplyLabel(count).
13. If list is empty, show "No comments yet".


===========================================================
PROGRAM STARTS HERE
===========================================================
*/

import React, { useState } from "react";

function CommentList() {

  // -------------------------------------------------------
  // COMMENTS STATE
  // -------------------------------------------------------

  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Priya Nair",
      text: "Great explanation, this really helped!",
      liked: false,
      likes: 12,
      replies: 3,
    },
    {
      id: 2,
      author: "Rahul Verma",
      text: "Can you share the source code?",
      liked: false,
      likes: 4,
      replies: 1,
    },
    {
      id: 3,
      author: "Sana Iqbal",
      text: "Bookmarking this for later.",
      liked: false,
      likes: 0,
      replies: 0,
    },
  ]);


  // -------------------------------------------------------
  // TOGGLE LIKE
  // -------------------------------------------------------

  function toggleLike(id) {

    setComments(
      comments.map((comment) => {

        if (comment.id === id) {

          return {
            ...comment,

            liked: !comment.liked,

            likes:
              comment.liked
                ? comment.likes - 1
                : comment.likes + 1,
          };
        }

        return comment;
      })
    );
  }


  // -------------------------------------------------------
  // REPLY LABEL HELPER
  // -------------------------------------------------------

  function getReplyLabel(count) {

    if (count === 1) {
      return "1 reply";
    }

    return `${count} replies`;
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
        Comments
      </h2>


      {/* =================================================
          EMPTY STATE
      ================================================= */}

      {comments.length === 0 ? (

        <p
          style={{
            color: "#777",
            textAlign: "center",
            padding: 20,
          }}
        >
          No comments yet
        </p>

      ) : (

        /* =================================================
           COMMENT LIST
        ================================================= */

        <div>

          {comments.map((comment) => (

            <div
              key={comment.id}
              style={{
                padding: "14px 0",
                borderBottom:
                  "1px solid #ddd",
              }}
            >

              {/* =================================================
                  AUTHOR
              ================================================= */}

              <div
                style={{
                  fontWeight: "bold",
                  fontSize: 14,
                  marginBottom: 7,
                }}
              >
                {comment.author}
              </div>


              {/* =================================================
                  COMMENT TEXT
              ================================================= */}

              <div
                style={{
                  fontSize: 14,
                  color: "#444",
                  marginBottom: 8,
                }}
              >
                {comment.text}
              </div>


              {/* =================================================
                  ACTION ROW
              ================================================= */}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  fontSize: 13,
                }}
              >

                {/* =================================================
                    LIKE BUTTON
                ================================================= */}

                <button
                  onClick={() =>
                    toggleLike(comment.id)
                  }
                  style={{
                    border: "none",
                    background: "transparent",
                    padding: 0,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    color: comment.liked
                      ? "#e04b5a"
                      : "#999",
                    fontSize: 15,
                  }}
                >

                  {/* HEART */}

                  <span>
                    {comment.liked
                      ? "♥"
                      : "♡"}
                  </span>


                  {/* LIKE COUNT */}

                  <span
                    style={{
                      color: comment.liked
                        ? "#e04b5a"
                        : "#777",
                    }}
                  >
                    {comment.likes}
                  </span>

                </button>


                {/* =================================================
                    REPLY COUNT
                ================================================= */}

                <span
                  style={{
                    color: "#555",
                  }}
                >
                  {getReplyLabel(
                    comment.replies
                  )}
                </span>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default CommentList;