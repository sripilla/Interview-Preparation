/*
========================================
SECTION 10: BASIC ROUTING
========================================

ROUTING:
Routing allows a React application to
display different components for
different URLs.

Example:

/          → Home
/about     → About
/contact   → Contact
/users/10  → User with ID 10

----------------------------------------
IMPORTANT COMPONENTS
----------------------------------------

1. BrowserRouter

Wraps the application and enables routing.

<BrowserRouter>
  <App />
</BrowserRouter>

----------------------------------------

2. Routes

Contains all Route components.

<Routes>
  ...
</Routes>

----------------------------------------

3. Route

Maps a URL path to a component.

<Route path="/about" element={<About />} />

/about URL → Displays About component

----------------------------------------

4. Link

Used for navigation without reloading
the entire page.

<Link to="/about">About</Link>

----------------------------------------

5. useNavigate()

Used for programmatic navigation.

Example:

const navigate = useNavigate();

navigate("/dashboard");

Useful after:
- Login
- Form submission
- Button click

----------------------------------------

6. useParams()

Used to read dynamic values from the URL.

Route:

<Route path="/users/:id" element={<User />} />

URL:

/users/10

useParams() gives:

id = "10"

*/


import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams
} from "react-router-dom";

function Home() {
  return <h2>Welcome to Home Page</h2>;
}

function About() {
  return <h2>About Us</h2>;
}

function UserDetail() {
  const { id } = useParams();

  return <h2>Viewing User ID: {id}</h2>;
}

function LoginButton() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
}

function Dashboard() {
  return <h2>Welcome to Dashboard</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <h1>React Router Example</h1>

      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/about">About</Link>
        {" | "}
        <Link to="/users/101">User 101</Link>
      </nav>

      <hr />

      <LoginButton />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;