import React, { useState } from 'react';

/**
 * EXERCISE 1: Rendering Elements + Conditional Rendering + Lists
 *
 * Covers:
 * - JSX rendering
 * - Conditional rendering (ternary + &&)
 * - Rendering lists with .map() + key
 *
 * Task: A task list that shows "No tasks yet" when empty, otherwise
 * renders each task with a completed/pending badge.
 */

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn JSX', done: true },
    { id: 2, text: 'Practice useState', done: false },
    { id: 3, text: 'Build a form', done: false },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const pendingCount = tasks.filter(t => !t.done).length;

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '400px' }}>
      <h2>Task List</h2>

      {/* Conditional rendering with && */}
      {pendingCount > 0 && (
        <p style={{ color: '#c05621' }}>{pendingCount} task(s) remaining</p>
      )}

      {/* Conditional rendering with ternary */}
      {tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map(task => (
            <li
              key={task.id}
              onClick={() => toggleTask(task.id)}
              style={{
                padding: '8px',
                marginBottom: '4px',
                background: task.done ? '#e6f4ea' : '#fdf2e9',
                textDecoration: task.done ? 'line-through' : 'none',
                cursor: 'pointer',
                borderRadius: '4px',
              }}
            >
              {task.done ? '✓ ' : '○ '}{task.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;