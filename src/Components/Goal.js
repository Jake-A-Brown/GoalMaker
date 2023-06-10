// A component to render each individual goal
import React from 'react';
import './Goal.css';

const Goal = ({ goal, completeGoal, isCompletedPage }) => {
  const { name, category, deadline, description } = goal;

  const handleComplete = () => {
    completeGoal(goal);
  };

  return (
    <div className="goal-container"> 
    <div className='goal'>
      {name && (
        <React.Fragment>
          <h3>{category}</h3>
          <p>Goal name: {name}</p>
          <p>Description: {description}</p>
          <p>Deadline: {deadline}</p>
          {!isCompletedPage && (
            <button onClick={handleComplete}>Complete</button>
          )}
        </React.Fragment>
      )}
      </div>
    </div>
  );
};

export default Goal;
