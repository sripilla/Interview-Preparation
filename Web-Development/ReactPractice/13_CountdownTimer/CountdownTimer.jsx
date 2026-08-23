/*
===========================================================
REACT LESSON: COUNTDOWN TIMER
===========================================================

This program practices:

1. useState
2. useEffect
3. setInterval()
4. clearInterval()
5. useEffect cleanup
6. Dependency arrays
7. Conditional rendering
8. Event handlers
9. Disabling buttons
10. Time calculations
11. Zero-padding numbers
12. Avoiding stale state
13. Preventing memory leaks


===========================================================
1. useState
===========================================================

We need two pieces of state:

time
    Stores the remaining seconds.

running
    Tells us whether the timer is currently running.


Example:

time = 90
running = false


After clicking Start:

time = 89
running = true


===========================================================
2. setInterval()
===========================================================

JavaScript provides:

setInterval(function, 1000)


It repeatedly executes a function every
1000 milliseconds = 1 second.


For a countdown:

90
89
88
87
...


===========================================================
3. WHY useEffect?
===========================================================

setInterval() creates a side effect.

React's useEffect() is designed for side effects.

Example:

useEffect(() => {

    const interval = setInterval(() => {
        ...
    }, 1000);

    return () => {
        clearInterval(interval);
    };

}, [running]);


===========================================================
4. DEPENDENCY ARRAY
===========================================================

We use:

[running]


This means:

When running changes,
React runs the effect again.


If:

running = true

create the interval.


If:

running = false

don't create an interval.


===========================================================
5. CLEANUP FUNCTION
===========================================================

This is VERY IMPORTANT.

setInterval() creates a running timer.

We must stop it using:

clearInterval(interval)


React allows us to return a cleanup function:

return () => {
    clearInterval(interval);
};


Cleanup happens when:

1. running changes
2. component unmounts


This prevents:

- multiple intervals
- stale intervals
- memory leaks


===========================================================
6. WHY CLEAR THE INTERVAL?
===========================================================

Imagine:

Start → creates interval #1

Then somehow another interval gets created:

interval #2

Now both run simultaneously.

The timer could decrease:

90
88
86
84...


instead of:

90
89
88
87...


Therefore we must always clean up.


===========================================================
7. FUNCTIONAL STATE UPDATE
===========================================================

Inside setInterval we use:

setTime((prevTime) => prevTime - 1);


instead of:

setTime(time - 1);


The functional form is safer for asynchronous
updates and intervals because it receives the
latest state value.


===========================================================
8. STOPPING AT ZERO
===========================================================

We must never allow:

-1
-2
-3


When time reaches zero:

setTime(0)

and:

setRunning(false)


This causes the effect cleanup to run.


===========================================================
9. START BUTTON
===========================================================

Start should be disabled when:

1. timer is already running
2. timer has reached zero


Condition:

running || time === 0


Therefore:

disabled={running || time === 0}


===========================================================
10. PAUSE BUTTON
===========================================================

Pause only works while running.

Therefore:

disabled={!running}


Clicking Pause:

setRunning(false)


The time does NOT reset.


===========================================================
11. RESET BUTTON
===========================================================

Reset should always be available.

Clicking Reset:

setTime(90);
setRunning(false);


The timer returns to:

01:30


===========================================================
12. TIME FORMAT
===========================================================

The timer must display:

mm:ss


90 seconds:

01:30


5 seconds:

00:05


0 seconds:

00:00


===========================================================
13. MINUTES
===========================================================

Calculate:

Math.floor(time / 60)


Example:

90 / 60 = 1.5

Math.floor(1.5) = 1


===========================================================
14. SECONDS
===========================================================

Calculate:

time % 60


Example:

90 % 60 = 30


So:

minutes = 1
seconds = 30


===========================================================
15. ZERO PADDING
===========================================================

We want:

01

instead of:

1


Use:

String(value).padStart(2, "0")


Examples:

1 → "01"

5 → "05"

30 → "30"


===========================================================
16. "TIME'S UP!"
===========================================================

When:

time === 0

the Start/Pause buttons disappear.

Instead show:

Time's up!


Reset remains visible.


===========================================================
17. CONDITIONAL RENDERING
===========================================================

We can use:

{time === 0 ? (
    <p>Time's up!</p>
) : (
    buttons
)}


This displays different JSX
depending on the timer state.


===========================================================
18. IMPORTANT DATA FLOW
===========================================================

Click Start
     ↓
running = true
     ↓
useEffect runs
     ↓
setInterval starts
     ↓
time decreases every second
     ↓
time reaches 0
     ↓
running = false
     ↓
cleanup runs
     ↓
"Time's up!" appears


===========================================================
19. REQUIREMENTS
===========================================================

1. Start at 90 seconds.
2. Start counts down once per second.
3. Pause stops the countdown.
4. Pause does not reset the timer.
5. Reset returns to 90 seconds.
6. Display mm:ss.
7. Zero-pad minutes and seconds.
8. Start disabled while running.
9. Start disabled at zero.
10. Pause disabled unless running.
11. Reset always enabled.
12. Stop automatically at zero.
13. Never go below zero.
14. Show "Time's up!" at zero.
15. Properly clear intervals.
16. No memory leaks.


===========================================================
PROGRAM STARTS HERE
===========================================================
*/

import React, { useEffect, useState } from "react";

function CountdownTimer() {

  // -------------------------------------------------------
  // STATE
  // -------------------------------------------------------

  // Remaining time in seconds
  const [time, setTime] = useState(90);

  // Whether the timer is currently running
  const [running, setRunning] = useState(false);


  // -------------------------------------------------------
  // TIMER EFFECT
  // -------------------------------------------------------

  useEffect(() => {

    /*
      If the timer isn't running,
      there is nothing to do.
    */

    if (!running) {
      return;
    }


    /*
      Create an interval that runs
      once every 1000 milliseconds.
    */

    const interval = setInterval(() => {

      setTime((previousTime) => {

        /*
          If we are already at zero,
          stop the timer.
        */

        if (previousTime <= 1) {

          setRunning(false);

          return 0;
        }


        /*
          Otherwise decrease by 1 second.
        */

        return previousTime - 1;

      });

    }, 1000);


    /*
      CLEANUP FUNCTION

      This is extremely important.

      Whenever running changes or the component
      unmounts, React runs this function.

      It prevents old intervals from continuing.
    */

    return () => {
      clearInterval(interval);
    };

  }, [running]);


  // -------------------------------------------------------
  // START
  // -------------------------------------------------------

  function startTimer() {

    setRunning(true);
  }


  // -------------------------------------------------------
  // PAUSE
  // -------------------------------------------------------

  function pauseTimer() {

    setRunning(false);
  }


  // -------------------------------------------------------
  // RESET
  // -------------------------------------------------------

  function resetTimer() {

    setTime(90);
    setRunning(false);
  }


  // -------------------------------------------------------
  // CALCULATE MINUTES
  // -------------------------------------------------------

  const minutes =
    Math.floor(time / 60);


  // -------------------------------------------------------
  // CALCULATE SECONDS
  // -------------------------------------------------------

  const seconds =
    time % 60;


  // -------------------------------------------------------
  // ZERO-PAD TIME
  // -------------------------------------------------------

  const formattedMinutes =
    String(minutes).padStart(2, "0");

  const formattedSeconds =
    String(seconds).padStart(2, "0");


  // -------------------------------------------------------
  // JSX
  // -------------------------------------------------------

  return (
    <div
      style={{
        maxWidth: 380,
        margin: "40px auto",
        padding: 30,
        border: "1px solid #ddd",
        borderRadius: 14,
        textAlign: "center",
        fontFamily: "Arial",
      }}
    >

      {/* =================================================
          TITLE
      ================================================= */}

      <h2
        style={{
          fontSize: 18,
          fontWeight: "normal",
          marginBottom: 25,
        }}
      >
        Break timer
      </h2>


      {/* =================================================
          TIMER DISPLAY
      ================================================= */}

      <div
        style={{
          fontSize: 52,
          fontWeight: "normal",
          marginBottom: 28,
          letterSpacing: 2,
        }}
      >
        {formattedMinutes}:{formattedSeconds}
      </div>


      {/* =================================================
          START / PAUSE BUTTONS
      ================================================= */}

      {time === 0 ? (

        /*
          At zero, hide Start/Pause
          and show "Time's up!"
        */

        <div
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Time's up!
        </div>

      ) : (

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginBottom: 10,
          }}
        >

          {/* =================================================
              START BUTTON
          ================================================= */}

          <button
            onClick={startTimer}

            /*
              Start is disabled when:

              1. Already running
              2. Time has reached zero
            */

            disabled={
              running || time === 0
            }

            style={{
              padding: "10px 22px",
              cursor:
                running
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            Start
          </button>


          {/* =================================================
              PAUSE BUTTON
          ================================================= */}

          <button
            onClick={pauseTimer}

            /*
              Pause is enabled only
              while the timer is running.
            */

            disabled={!running}

            style={{
              padding: "10px 22px",
              cursor:
                running
                  ? "pointer"
                  : "not-allowed",
            }}
          >
            Pause
          </button>

        </div>

      )}


      {/* =================================================
          RESET BUTTON
      ================================================= */}

      <button
        onClick={resetTimer}
        style={{
          padding: "10px 22px",
          cursor: "pointer",
        }}
      >
        Reset
      </button>

    </div>
  );
}

export default CountdownTimer;