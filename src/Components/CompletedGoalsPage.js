//A component that displays a list of completed goals
import React from 'react';

const CompletedGoalsPage = ({ completedGoals }) => {
  return (
    <div>
      <h2>Completed Goals</h2>
      {completedGoals.map((goal, index) => (
        <div key={index}>
          <h3>{goal.name}</h3>
          <p>Category: {goal.category}</p>
          <p>Deadline: {goal.deadline}</p>
          <p>Description: {goal.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CompletedGoalsPage;