import React, { useState } from 'react';
import GoalForm from './GoalForm';
import GoalList from './GoalList';
import ProgressBar from './ProgressBar';
import './Home.css';

const Home = ({ addGoal, goals, completeGoal, calculateProgress }) => {
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          {/* <h2>Goal Form</h2>
          <button className="toggle-button" onClick={toggleFormVisibility}>
            {isFormVisible ? 'Hide Form' : 'Show Form'}
          </button> */}
        </div>
        {isFormVisible && (
          <div className="card-body">
            {/* <GoalForm addGoal={addGoal} /> */}
          </div>
        )}
      </div>
      {/* <GoalList goals={goals} completeGoal={completeGoal} /> */}
      <ProgressBar progress={calculateProgress()} />
    </div>
  );
};

export default Home;
