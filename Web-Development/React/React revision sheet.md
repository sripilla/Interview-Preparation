# React — Quick Revision Sheet

Covers your exam syllabus: Basic Routing, Rendering Elements, State
Management (internal), Handling Events, ES6 (already covered separately),
Form Validation.

## 1. What is JSX
JSX lets you write HTML-like syntax inside JavaScript. It compiles down
to `React.createElement()` calls under the hood.
```jsx
function Welcome() {
    return <h1>Hello, world!</h1>;
}

// JSX with embedded JS expressions (use curly braces)
function Greeting({ name }) {
    return <h1>Hello, {name}!</h1>;
}
```
**Rules:** must return ONE root element (or use a Fragment `<>...</>`),
use `className` not `class`, all tags must close (`<img />` not `<img>`).

## 2. Components (function components — the modern standard)
```jsx
// Simple component
function Button() {
    return <button>Click me</button>;
}

// Component with props
function Button({ label, onClick }) {
    return <button onClick={onClick}>{label}</button>;
}

// Using it
<Button label="Submit" onClick={() => console.log("clicked")} />
```

## 3. Rendering Elements & Conditional Rendering
```jsx
function StatusBadge({ isOnline }) {
    // Ternary — most common pattern
    return <span>{isOnline ? "Online" : "Offline"}</span>;
}

function Message({ hasError }) {
    // && operator — render something OR nothing
    return (
        <div>
            {hasError && <p style={{ color: 'red' }}>Something went wrong</p>}
        </div>
    );
}
```

## 4. Rendering Lists (map() + keys — critical pattern)
```jsx
function TodoList({ todos }) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    );
}

// Example data
const todos = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a project" },
];
```
**`key` is REQUIRED** on list items — React uses it to track which items
changed. Always use a stable unique ID, NEVER the array index if the
list can reorder/change.

## 5. State Management — useState
```jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);   // [value, setter function]

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(prev => prev - 1)}>Decrement</button>
        </div>
    );
}
```
**Key rules:**
- Never mutate state directly (`count++` is WRONG) — always use the
  setter function
- Use the functional update form `setCount(prev => prev + 1)` when the
  new state depends on the previous state — safer with async updates
- State updates are asynchronous and trigger a re-render

## 6. State with Objects/Arrays (immutability pattern)
```jsx
function UserForm() {
    const [user, setUser] = useState({ name: '', email: '' });

    const updateName = (newName) => {
        // Spread the old state, override just the changed field
        setUser({ ...user, name: newName });
    };

    return <input value={user.name} onChange={e => updateName(e.target.value)} />;
}

function TodoApp() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        // Never push directly — create a new array
        setTodos([...todos, { id: Date.now(), text }]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
}
```
**Why immutability matters:** React detects changes by comparing
references — mutating the existing object/array in place won't trigger
a re-render.

## 7. Handling Events
```jsx
function EventDemo() {
    const handleClick = () => {
        console.log("Button clicked");
    };

    const handleChange = (e) => {
        console.log("Input value:", e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();   // stops the page from reloading
        console.log("Form submitted");
    };

    return (
        <form onSubmit={handleSubmit}>
            <button onClick={handleClick}>Click</button>
            <input onChange={handleChange} />
        </form>
    );
}
```
**Common events:** `onClick`, `onChange`, `onSubmit`, `onFocus`,
`onBlur`, `onKeyDown`. Always `e.preventDefault()` in form submit
handlers to stop default browser reload.

## 8. Form Validation (controlled inputs)
```jsx
function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.includes('@')) {
            setError('Please enter a valid email');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        setError('');
        console.log('Form is valid, submitting...');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Login</button>
        </form>
    );
}
```
**"Controlled input"** = the input's value is driven entirely by React
state (`value={email}`), and every keystroke updates that state via
`onChange`. This is THE standard React form pattern.

## 9. useEffect (side effects — data fetching, subscriptions)
```jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            const response = await fetch(`/api/users/${userId}`);
            const data = await response.json();
            setUser(data);
        }
        fetchUser();
    }, [userId]);   // dependency array — re-runs effect when userId changes

    return <div>{user ? user.name : "Loading..."}</div>;
}
```
**Dependency array rules:**
- `[]` (empty) — runs once, when component first mounts
- `[userId]` — re-runs whenever `userId` changes
- No array at all — runs after EVERY render (rarely what you want)

## 10. Basic Routing (react-router)
```jsx
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users/:id" element={<UserDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

// Programmatic navigation
function LoginButton() {
    const navigate = useNavigate();
    const handleLogin = () => {
        // ... login logic
        navigate('/dashboard');
    };
    return <button onClick={handleLogin}>Login</button>;
}

// Reading URL params
import { useParams } from 'react-router-dom';
function UserDetail() {
    const { id } = useParams();
    return <p>Viewing user {id}</p>;
}
```
**Key pieces:** `<Link>` for clickable navigation (like `<a>` but
doesn't reload the page), `<Route>` maps a path to a component,
`useNavigate()` for navigating from code (e.g. after form submit),
`useParams()` to read dynamic URL segments.

## 11. Passing Data: Props vs State
| | Props | State |
|---|---|---|
| Owned by | Parent component | The component itself |
| Can it change? | No (read-only from child's view) | Yes, via setter function |
| Purpose | Pass data DOWN to children | Track data that changes over time |

```jsx
function Parent() {
    const [count, setCount] = useState(0);   // state — owned here
    return <Child value={count} />;             // passed down as a prop
}

function Child({ value }) {   // receives it as a prop, can't change it directly
    return <p>{value}</p>;
}
```

## 12. Common Beginner Mistakes to Avoid
- Forgetting `key` on list items rendered with `.map()`
- Mutating state directly instead of using the setter (`state.push()` vs `setState([...state, x])`)
- Forgetting `e.preventDefault()` in form submit handlers
- Missing or wrong dependency array in `useEffect` (causes infinite loops or stale data)
- Using `class` instead of `className` (copy-pasted from HTML)

## Priority Checklist for the Exam
- [ ] Comfortable writing functional components with props
- [ ] `useState` + immutable updates (spread for objects/arrays) feels natural
- [ ] Know controlled input pattern for forms (value + onChange)
- [ ] Understand `.map()` + `key` for rendering lists
- [ ] Comfortable with basic react-router setup (Route, Link, useNavigate, useParams)
- [ ] Know when/why `e.preventDefault()` is needed