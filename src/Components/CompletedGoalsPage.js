import React from 'react';
import Goal from './Goal';

const CompletedGoalsPage = ({ completedGoals }) => {
  const goalsByCategory = completedGoals.reduce((acc, goal) => {
    const { category } = goal;
    if (acc[category]) {
      acc[category].push(goal);
    } else {
      acc[category] = [goal];
    }
    return acc;
  }, {});

  const categories = Object.keys(goalsByCategory).sort();

  return (
    <div>
      <h2>Completed Goals</h2>
      {categories.map((category) => (
        <div key={category} className="category-container">
          <h3>{category}</h3>
          <div className="goal-cards-container">
            {goalsByCategory[category].map((goal) => (
              <div key={goal.id} className="goal-card">
                <Goal goal={goal} isCompletedPage={true} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompletedGoalsPage;
