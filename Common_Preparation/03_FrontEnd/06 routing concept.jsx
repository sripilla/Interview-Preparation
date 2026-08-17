import React, { useState } from 'react';

/**
 * EXERCISE 6: Basic Routing (concept demo)
 *
 * Note: real projects use react-router-dom (BrowserRouter, Routes,
 * Route, Link, useNavigate). This artifact environment can't install
 * that package, so this simulates routing behavior with state to
 * demonstrate the SAME mental model: current path -> which component
 * renders, and "navigate" -> change the current path.
 *
 * ---- Real react-router-dom syntax for reference ----
 *
 * import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
 *
 * function App() {
 *   return (
 *     <BrowserRouter>
 *       <Link to="/">Home</Link>
 *       <Link to="/about">About</Link>
 *       <Routes>
 *         <Route path="/" element={<Home />} />
 *         <Route path="/about" element={<About />} />
 *         <Route path="/users/:id" element={<UserDetail />} />
 *       </Routes>
 *     </BrowserRouter>
 *   );
 * }
 *
 * function LoginButton() {
 *   const navigate = useNavigate();
 *   return <button onClick={() => navigate('/dashboard')}>Login</button>;
 * }
 *
 * function UserDetail() {
 *   const { id } = useParams();
 *   return <p>Viewing user {id}</p>;
 * }
 * -----------------------------------------------------
 */

function Home() {
  return <div><h3>Home Page</h3><p>Welcome to the app.</p></div>;
}

function About() {
  return <div><h3>About Page</h3><p>This app demonstrates routing concepts.</p></div>;
}

function UserDetail({ userId }) {
  return <div><h3>User Detail</h3><p>Viewing user ID: {userId}</p></div>;
}

function RoutingDemo() {
  const [currentPath, setCurrentPath] = useState('/');

  const navigate = (path) => setCurrentPath(path);   // mimics useNavigate()

  const renderPage = () => {
    if (currentPath === '/') return <Home />;
    if (currentPath === '/about') return <About />;
    if (currentPath.startsWith('/users/')) {
      const userId = currentPath.split('/')[2];   // mimics useParams()
      return <UserDetail userId={userId} />;
    }
    return <p>404 Not Found</p>;
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '400px' }}>
      <nav style={{ marginBottom: '16px' }}>
        <button onClick={() => navigate('/')} style={{ marginRight: '8px' }}>Home</button>
        <button onClick={() => navigate('/about')} style={{ marginRight: '8px' }}>About</button>
        <button onClick={() => navigate('/users/42')}>User 42</button>
      </nav>

      <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '4px' }}>
        {renderPage()}
      </div>

      <p style={{ marginTop: '12px', fontSize: '12px', color: '#666' }}>
        Current path: {currentPath}
      </p>
    </div>
  );
}

export default RoutingDemo;