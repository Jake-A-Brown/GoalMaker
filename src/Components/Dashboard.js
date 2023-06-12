import React, { useState } from "react";
import GoalList from "./GoalList";
// import { Link } from 'react-router-dom';

function Dashboard() {
  // Fetch user's goals, progress, and deadlines
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
    <div className="dashboard">
      <h1>Dashboard</h1>

      {/**
       * Reminders: Provides reminders for important activities or tasks.
       * Goal List: Shows a list of goals with progress tracking and completion status.
       * Task to complete list: Displays a list of tasks with options to mark as complete, edit, or delete.
       * Task Form: Allows users to add or edit tasks.
       * Goal Form: Allows users to add or edit goals.
       * **/}

      <div className="mt-5 container">
        <div className="card">
          <div className="card-header">Your Goal's</div>
          <div className="card-body">
            <GoalList goals={goals} deleteGoal={deleteGoal} />
          </div>
        </div>
      </div>

      {/* <Link to="/new-goal-form">Create New Goal</Link> */}
    </div>
  );
}

export default Dashboard;
