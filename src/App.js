//main state that renders all components
import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CompletedGoalsPage from './Components/CompletedGoalsPage';
import Home from './Components/Home';
import GoalForm from './Components/GoalForm';
import GoalList from './Components/GoalList';

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
            <Link to="/new">New</Link>
          </li>
          <li>
            <Link to="/goals">Goals</Link>
          </li>
          <li>
            <Link to="/completed">Completed Goals</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                addGoal={addGoal}
                goals={goals}
                completeGoal={completeGoal}
                calculateProgress={calculateProgress}
              />
            }
          />
          <Route path="/new" element={<GoalForm addGoal={addGoal} />} />
          <Route
            path="/goals"
            element={<GoalList goals={goals} completeGoal={completeGoal} />}
          />
          <Route
            path="/completed"
            element={<CompletedGoalsPage completedGoals={completedGoals} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;







