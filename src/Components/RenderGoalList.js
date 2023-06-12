// App.js
import React, { useState } from "react";
import GoalList from "./GoalList";
import NewGoalForm from "../Pages/NewGoalForm";

const RenderGoalList = () => {
  const [showAddGoalForm, setShowAddGoalForm] = useState(false);

  const [goals, setGoals] = useState([
    {
      rowNumber: null,
      rowCategory: "",
      rowDescription: "",
      rowDeadline: "",
    },
  ]);

  const addGoal = (goalcategory, goaldescription, goaldeadline) => {
    let rowNumber = 0;
    if (goalcategory.length > 0) {
      rowNumber = goals[goals.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newGoal = {
      rowNumber: rowNumber,
      rowCategory: goalcategory,
      rowDescription: goaldescription,
      rowDeadline: goaldeadline,
    };
    setGoals((goals) => [...goals, newGoal]);
  };

  const deleteGoal = (deleteGoalRowNumber) => {
    let filtered = goals.filter(function (value) {
      return value.rowNumber !== deleteGoalRowNumber;
    });
    setGoals(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Goal's</div>
        <div className="card-body">
          <GoalList goals={goals} deleteGoal={deleteGoal} />
        </div>
      </div>
      <br />
      <div className="card">
        <div className="card-body">
          <button
            onClick={() => setShowAddGoalForm(!showAddGoalForm)}
            className="btn btn-primary"
          >
            {showAddGoalForm ? "Close New Goal" : "Add Goal"}
          </button>
          {showAddGoalForm && <NewGoalForm addGoal={addGoal} />}
        </div>
      </div>
    </div>
  );
};

export default RenderGoalList;
