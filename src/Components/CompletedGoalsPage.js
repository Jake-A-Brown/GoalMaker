//A component that displays a list of completed goals
import React from 'react';
import Goal from './Goal';

const CompletedGoalsPage = ({ completedGoals }) => {
  // Create an object to store completed goals by category
  const goalsByCategory = completedGoals.reduce((acc, goal) => {
    const { category } = goal;
    if (acc[category]) {
      acc[category].push(goal);
    } else {
      acc[category] = [goal];
    }
    return acc;
  }, {});

  // Get the list of categories and sort them alphabetically
  const categories = Object.keys(goalsByCategory).sort();

  return (
    <div>
      <h2>Completed Goals</h2>
      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          {goalsByCategory[category].map((goal) => (
            <Goal key={goal.id} goal={goal} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CompletedGoalsPage;
