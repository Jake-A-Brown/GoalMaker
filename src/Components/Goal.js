// A component to render each individual goal
import React from 'react';

const Goal = ({ goal, completeGoal }) => {
  const { name, category, deadline, description } = goal;

  const handleComplete = () => {
    completeGoal(goal);
  };

  return (
    <div>
      <h3>{category}</h3>
      <p>Goal name: {name}</p>
      <p>Deadline: {deadline}</p>
      <p>Description: {description}</p>
      <button onClick={handleComplete}>Complete</button>
    </div>
  );
};

export default Goal;

