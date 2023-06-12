import React from "react";
import RenderGoalListSolo from "./RenderGoalListSolo";

// import { Link } from 'react-router-dom';

function Dashboard() {
  // Fetch user's goals, progress, and deadlines

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

       <RenderGoalListSolo />

      {/* <Link to="/new-goal-form">Create New Goal</Link> */}
    </div>
  );
}

export default Dashboard;
