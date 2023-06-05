// A component to display the list of goals
import React from 'react';
import Goal from './Goal';

const GoalList = ({ goals, completeGoal }) => {
  return (
    <div>
      {goals.map((goal, index) => (
        <Goal key={index} goal={goal} completeGoal={completeGoal} />
      ))}
    </div>
  );
};

export default GoalList;
