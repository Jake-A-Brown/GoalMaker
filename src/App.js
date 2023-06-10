//main state that renders all components
// App.js

import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CompletedGoalsPage from './Components/CompletedGoalsPage';
import Home from './Components/Home';
import GoalForm from './Components/GoalForm';
import GoalList from './Components/GoalList';

const App = () => {
  const [goalsByCategory, setGoalsByCategory] = useState({});
  const [completedGoals, setCompletedGoals] = useState([]);

  const addGoal = (goals) => {
    setGoalsByCategory(goals);
  };

  const completeGoal = (goal) => {
    const category = goal.category;
    const updatedGoals = goalsByCategory[category].filter((g) => g !== goal);
    setGoalsByCategory({
      ...goalsByCategory,
      [category]: updatedGoals,
    });
    setCompletedGoals([...completedGoals, goal]);
  };

  const calculateProgress = () => {
    let totalGoals = 0;
    let completedCount = 0;
    Object.values(goalsByCategory).forEach((categoryGoals) => {
      totalGoals += categoryGoals.length;
      completedCount += categoryGoals.filter((goal) => completedGoals.includes(goal)).length;
    });
    const progress = (completedCount / totalGoals) * 100;
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
                goalsByCategory={goalsByCategory}
                completeGoal={completeGoal}
                calculateProgress={calculateProgress}
              />
            }
          />
          <Route path="/new" element={<GoalForm addGoal={addGoal} goalsByCategory={goalsByCategory} />} />
          <Route
            path="/goals"
            element={<GoalList goalsByCategory={goalsByCategory} completeGoal={completeGoal} />}
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








