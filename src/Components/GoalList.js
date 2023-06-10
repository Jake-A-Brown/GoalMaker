// A component to display the list of goals
// GoalList.js
import React from 'react';
import Goal from './Goal';
import './GoalList.css';

const GoalList = ({ goalsByCategory, completeGoal }) => {
  return (
    <div className="goal-list">
      {Object.entries(goalsByCategory).map(([category, goals]) => (
        <div key={category} className="goal-category">
          <h3>{category}</h3>
          <div className="goal-items">
            {goals.map((goal, index) => (
             // Render the Goal component with the isCompletedPage prop set to false
             <Goal key={index} goal={goal} completeGoal={() => completeGoal(goal)} isCompletedPage={false} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GoalList;


