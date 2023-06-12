import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Navigation from "./Components/Navigation";
import RenderGoalList from "./Components/RenderGoalList";

function App() {
  return (
    <div className="app">
      <Navigation /> {/* Include the Navigation component */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="new-goal-form" element={<RenderGoalList />} />
        {/* Add more routes for other components/pages */}
      </Routes>
    </div>
  );
}

export default App;
