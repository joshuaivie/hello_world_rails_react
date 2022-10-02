import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Greeting from './Greeting';

function Home() {
  return (
    <main>
      <h1>Welcome to the Greetings App!</h1>
      <Link to="/greetings">Click here to see a greeting!</Link>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/greetings" element={<Greeting />} />
    </Routes>
  );
}

export default App;