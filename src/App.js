//main state that renders all components
import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CompletedGoalsPage from './Components/CompletedGoalsPage';
import Home from './Components/Home';

const App = () => {
  const [goals, setGoals] = useState([]);
  const [completedGoals, setCompletedGoals] = useState([]);

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  const completeGoal = (goal) => {
    setGoals(goals.filter((g) => g !== goal));
    setCompletedGoals([...completedGoals, goal]);
  };

  const calculateProgress = () => {
    const totalGoals = goals.length + completedGoals.length;
    const progress = (completedGoals.length / totalGoals) * 100;
    return progress.toFixed(2);
  };

  return (
    <div>
      <h1>Goal Tracker</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/completed">Completed Goals</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home addGoal={addGoal} goals={goals} completeGoal={completeGoal} calculateProgress={calculateProgress} />} />
        <Route path="/completed" element={<CompletedGoalsPage completedGoals={completedGoals} />} />
      </Routes>
    </div>
  );
};

export default App;






