// A component to display the list of goals
import React from 'react';
import Goal from './Goal';
import './GoalList.css';

const GoalList = ({ goals, completeGoal }) => {
  return (
    <div className="card goal-list">
      <div className="card-header">Goals</div>
      <div className="card-body">
        {goals.map((goal, index) => (
          <Goal key={index} goal={goal} completeGoal={completeGoal} />
        ))}
      </div>
    </div>
  );
};

export default GoalList;

