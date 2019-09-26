import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Rocket Power API</h1>
      <Link to="/characters">
        <button>See the characters</button>
      </Link>
      <Link to="/characters/create">
        <button>Create character</button>
      </Link>
      <Link to="/characters/random">
        <button>See random character</button>
      </Link>
    </div>
  );
}
