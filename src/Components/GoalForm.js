//A form component to add new goals
import React, { useState } from 'react';
import './GoalForm.css';

const GoalForm = ({ addGoal }) => {
  const [goal, setGoal] = useState({
    name: '',
    category: '',
    deadline: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setGoal((prevGoal) => ({ ...prevGoal, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addGoal(goal);
    setGoal({ name: '', category: '', deadline: '', description: '' });
  };

  return (
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
      <button type="submit" className="btn">Add Goal</button>
    </form>
  );
};

export default GoalForm;


