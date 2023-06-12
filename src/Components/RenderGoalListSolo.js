import React, { useState } from "react";
import GoalList from "./GoalList";

const RenderGoalListSolo = () => {
  const [goals, setGoals] = useState([
    {
      rowNumber: null,
      rowCategory: "",
      rowDescription: "",
      rowDeadline: "",
    },
  ]);

  const deleteGoal = (deleteGoalRowNumber) => {
    let filtered = goals.filter(function (value) {
      return value.rowNumber !== deleteGoalRowNumber;
    });
    setGoals(filtered);
  };

  return (
    <div>
      <div className="mt-5 container">
        <div className="card">
          <div className="card-header">Your Goal's</div>
          <div className="card-body">
            <GoalList goals={goals} deleteGoal={deleteGoal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderGoalListSolo;
