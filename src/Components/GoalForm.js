//A form component to add new goals
import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={goal.name}
        onChange={handleChange}
        placeholder="Goal name"
        required
      />
      <input
        type="text"
        name="category"
        value={goal.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <input
        type="date"
        name="deadline"
        value={goal.deadline}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        value={goal.description}
        onChange={handleChange}
        placeholder="Description"
      ></textarea>
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default GoalForm;

