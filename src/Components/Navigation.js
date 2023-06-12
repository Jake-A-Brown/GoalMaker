import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="new-goal-form">New Goal</Link>
        </li>
        {/* Add more navigation links for other components */}
      </ul>
    </nav>
  );
}

export default Navigation;
