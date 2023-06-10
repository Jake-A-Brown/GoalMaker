//A form component to add new goals
import React, { useState } from 'react';
import './GoalForm.css';

const GoalForm = ({ addGoal, goalsByCategory }) => {
  const [goal, setGoal] = useState({
    name: '',
    category: '',
    deadline: '',
    description: '',
  });
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setGoal((prevGoal) => ({ ...prevGoal, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const category = goal.category;
    const updatedGoals = goalsByCategory[category] ? [...goalsByCategory[category], goal] : [goal];
    const updatedCategories = { ...goalsByCategory, [category]: updatedGoals };
    addGoal(updatedCategories);
    setGoal({ name: '', category: '', deadline: '', description: '' });
  };

  return (
    <div className="goal-form-container">
      <div className="card-header">
        <h2>Goal Form</h2>
        <button className="toggle-button" onClick={toggleFormVisibility}>
          {isFormVisible ? 'Hide Form' : 'Show Form'}
        </button>
      </div>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="goal-form">
          <div className="form-group">
            <label htmlFor="name">Goal Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={goal.name}
              onChange={handleChange}
              placeholder="Enter goal name"
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={goal.category}
              onChange={handleChange}
              placeholder="Enter category"
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="deadline">Deadline</label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={goal.deadline}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={goal.description}
              onChange={handleChange}
              placeholder="Enter description"
              className="form-control"
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Add Goal
          </button>
        </form>
      )}
    </div>
  );
};

export default GoalForm;


