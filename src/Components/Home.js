import React, { useState } from 'react';
import GoalForm from './GoalForm';
import GoalList from './GoalList';
import ProgressBar from './ProgressBar';
import './Home.css';

const Home = ({ addGoal, goals, completeGoal, calculateProgress }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container">
      <div className="card">
        {showForm ? <GoalForm addGoal={addGoal} /> : null}
        <button className="toggle-button" onClick={toggleForm}>
          {showForm ? 'Hide Form' : 'Show Form'}
        </button>
      </div>
      <GoalList goals={goals} completeGoal={completeGoal} />
      <ProgressBar progress={calculateProgress()} />
    </div>
  );
};

export default Home;
