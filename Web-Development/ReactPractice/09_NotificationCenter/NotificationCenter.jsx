/*
===========================================================
REACT LESSON: NOTIFICATION CENTER
===========================================================

This program practices:

1. useState
2. Arrays of objects
3. map()
4. Conditional rendering
5. Event handlers
6. Passing arguments to event handlers
7. Ternary operator
8. Logical && operator
9. Dynamic styles
10. Array filter()
11. Calculating derived values
12. Date/time handling
13. Relative time display
14. Conditional rendering for empty arrays
15. Nested JSX
16. className / inline styling


===========================================================
1. NOTIFICATION DATA
===========================================================

Each notification is an object.

Example:

{
    id: 1,
    title: "New comment on your post",
    createdAt: Date.now(),
    read: false
}


The important properties are:

id
    uniquely identifies the notification.

title
    text displayed to the user.

createdAt
    tells us when the notification was created.

read
    tells us whether the notification has been read.


===========================================================
2. useState
===========================================================

The notifications array is stored in state:

const [notifications, setNotifications] =
    useState([...]);

When the state changes, React re-renders the UI.


===========================================================
3. DERIVED VALUE: unreadCount
===========================================================

We don't need separate state for unreadCount.

We can calculate it from notifications:

notifications.filter(
    (notification) => !notification.read
).length


This is called DERIVED DATA.

If a notification becomes read,
the count automatically changes.


===========================================================
4. MARK ONE AS READ
===========================================================

When the user clicks a notification:

markAsRead(id)

We use map() to create a new array.

If the ID matches:

read: true

Otherwise, keep the notification unchanged.


===========================================================
5. map()
===========================================================

map() is commonly used in React to render
a list of components.

Example:

notifications.map((notification) => (
    <div>
        {notification.title}
    </div>
))


===========================================================
6. MARK ALL AS READ
===========================================================

The "Mark all as read" button calls:

markAllAsRead()


This changes every notification:

read: false

to:

read: true


===========================================================
7. CONDITIONAL RENDERING WITH &&
===========================================================

The unread badge should only appear when
there is at least one unread notification.

Example:

{unreadCount > 0 && (
    <span>{unreadCount}</span>
)}


If unreadCount = 2:

    badge appears.

If unreadCount = 0:

    badge does not appear.


===========================================================
8. CONDITIONAL STYLING
===========================================================

Unread notifications should look different.

For example:

Unread:
    blue/tinted background
    colored dot
    bold title

Read:
    normal background
    no dot
    normal title


We can use:

notification.read
    ? readStyle
    : unreadStyle


===========================================================
9. CONDITIONAL DOT
===========================================================

Unread:

● New comment on your post

Read:

  Weekly summary available


The dot can be rendered using:

{!notification.read && (
    <span>●</span>
)}


===========================================================
10. CLICKING A ROW
===========================================================

The entire notification row should be clickable.

We use:

onClick={() =>
    markAsRead(notification.id)
}


This means clicking anywhere on the row
marks that notification as read.


===========================================================
11. RELATIVE TIME
===========================================================

Instead of displaying the complete date:

August 23, 2026 6:30 AM

we display:

2 minutes ago
1 hour ago
Yesterday


A helper function can calculate the difference
between now and createdAt.


===========================================================
12. EMPTY STATE
===========================================================

If:

notifications.length === 0

display:

"No notifications"


Otherwise:

render the notification list.


===========================================================
13. TERNARY OPERATOR
===========================================================

Syntax:

condition ? valueIfTrue : valueIfFalse


Example:

notification.read
    ? "white"
    : "#e5f0ff"


This allows styles to change depending
on notification state.


===========================================================
14. IMPORTANT DATA FLOW
===========================================================

notifications
       |
       +------> unreadCount
       |
       +------> map()
       |          |
       |          +----> notification rows
       |
       +------> markAsRead()
       |
       +------> markAllAsRead()


===========================================================
15. REQUIREMENTS
===========================================================

1. Header:
   - bell icon
   - "Notifications"
   - unread count badge

2. Badge:
   - only visible when unreadCount > 0

3. Mark all as read:
   - calls markAllAsRead()

4. Notification rows:
   - title
   - relative time
   - unread dot
   - unread styling

5. Clicking a row:
   - calls markAsRead(id)

6. Empty notifications:
   - display "No notifications"


===========================================================
PROGRAM STARTS HERE
===========================================================
*/

import React, { useState } from "react";

function NotificationCenter() {

  // -------------------------------------------------------
  // NOTIFICATION STATE
  // -------------------------------------------------------

  const [notifications, setNotifications] =
    useState([
      {
        id: 1,
        title: "New comment on your post",
        createdAt: Date.now() - 2 * 60 * 1000,
        read: false,
      },
      {
        id: 2,
        title: "Your report is ready",
        createdAt: Date.now() - 60 * 60 * 1000,
        read: false,
      },
      {
        id: 3,
        title: "Weekly summary available",
        createdAt: Date.now() - 24 * 60 * 60 * 1000,
        read: true,
      },
    ]);


  // -------------------------------------------------------
  // CALCULATE UNREAD COUNT
  // -------------------------------------------------------

  const unreadCount =
    notifications.filter(
      (notification) => !notification.read
    ).length;


  // -------------------------------------------------------
  // MARK ONE NOTIFICATION AS READ
  // -------------------------------------------------------

  function markAsRead(id) {

    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              read: true,
            }
          : notification
      )
    );
  }


  // -------------------------------------------------------
  // MARK ALL NOTIFICATIONS AS READ
  // -------------------------------------------------------

  function markAllAsRead() {

    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  }


  // -------------------------------------------------------
  // RELATIVE TIME FUNCTION
  // -------------------------------------------------------

  function getRelativeTime(createdAt) {

    const difference =
      Date.now() - createdAt;

    const seconds =
      Math.floor(difference / 1000);

    const minutes =
      Math.floor(seconds / 60);

    const hours =
      Math.floor(minutes / 60);

    const days =
      Math.floor(hours / 24);


    if (minutes < 1) {
      return "Just now";
    }

    if (minutes < 60) {
      return `${minutes} minute${
        minutes === 1 ? "" : "s"
      } ago`;
    }

    if (hours < 24) {
      return `${hours} hour${
        hours === 1 ? "" : "s"
      } ago`;
    }

    if (days === 1) {
      return "Yesterday";
    }

    return `${days} days ago`;
  }


  // -------------------------------------------------------
  // JSX
  // -------------------------------------------------------

  return (
    <div
      style={{
        maxWidth: 420,
        margin: "30px auto",
        padding: 24,
        border: "1px solid #ddd",
        borderRadius: 12,
        fontFamily: "Arial",
      }}
    >

      {/* =================================================
          HEADER
      ================================================= */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 18,
        }}
      >

        {/* LEFT SIDE OF HEADER */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >

          {/* Bell icon */}
          <span
            style={{
              fontSize: 22,
            }}
          >
            🔔
          </span>


          {/* Heading */}
          <strong
            style={{
              fontSize: 18,
            }}
          >
            Notifications
          </strong>


          {/* UNREAD BADGE */}

          {unreadCount > 0 && (
            <span
              style={{
                background: "#d64545",
                color: "white",
                borderRadius: 999,
                minWidth: 20,
                height: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                fontWeight: "bold",
              }}
            >
              {unreadCount}
            </span>
          )}

        </div>


        {/* MARK ALL AS READ */}

        <button
          onClick={markAllAsRead}
          disabled={unreadCount === 0}
          style={{
            border: "none",
            background: "transparent",
            color:
              unreadCount > 0
                ? "#2878c8"
                : "#aaa",
            cursor:
              unreadCount > 0
                ? "pointer"
                : "not-allowed",
            fontSize: 13,
          }}
        >
          Mark all as read
        </button>

      </div>


      {/* =================================================
          EMPTY STATE
      ================================================= */}

      {notifications.length === 0 ? (

        <p
          style={{
            textAlign: "center",
            color: "#777",
            padding: 20,
          }}
        >
          No notifications
        </p>

      ) : (

        /* =================================================
           NOTIFICATION LIST
        ================================================= */

        <div>

          {notifications.map(
            (notification) => (

              <div
                key={notification.id}

                onClick={() =>
                  markAsRead(notification.id)
                }

                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  padding: 14,
                  marginBottom: 8,
                  borderRadius: 8,

                  // Unread gets a highlighted background
                  background:
                    notification.read
                      ? "white"
                      : "#e5f0ff",

                  cursor: "pointer",

                  transition:
                    "background 0.2s",
                }}
              >

                {/* =================================================
                    UNREAD DOT
                ================================================= */}

                {!notification.read && (
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      marginTop: 5,
                      borderRadius: "50%",
                      background: "#2878d7",
                      flexShrink: 0,
                    }}
                  />
                )}


                {/* =================================================
                    NOTIFICATION CONTENT
                ================================================= */}

                <div
                  style={{
                    flex: 1,
                  }}
                >

                  {/* TITLE */}

                  <div
                    style={{
                      fontWeight:
                        notification.read
                          ? "normal"
                          : "bold",

                      fontSize: 14,
                    }}
                  >
                    {notification.title}
                  </div>


                  {/* RELATIVE TIME */}

                  <div
                    style={{
                      marginTop: 6,
                      fontSize: 12,
                      color: "#777",
                    }}
                  >
                    {getRelativeTime(
                      notification.createdAt
                    )}
                  </div>

                </div>

              </div>

            )
          )}

        </div>

      )}

    </div>
  );
}

export default NotificationCenter;