import React from 'react';
import Goal from './Goal';
import './GoalGroupList.css';

const GoalGroupList = ({ goals, completeGoal }) => {
  const groupedGoals = goals.reduce((groups, goal) => {
    const { category } = goal;
    if (groups[category]) {
      groups[category].push(goal);
    } else {
      groups[category] = [goal];
    }
    return groups;
  }, {});

  return (
    <div className="goal-group-list-container">
      {Object.entries(groupedGoals).map(([category, goals]) => (
        <div key={category} className="goal-group">
          <h2 className="category-heading">{category}</h2>
          {goals.map((goal, index) => (
            <Goal key={index} goal={goal} completeGoal={completeGoal} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GoalGroupList;
