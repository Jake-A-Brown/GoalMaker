import React, { useState } from "react";

const NewGoalForm = (props) => {
  const [goalcategory, setGoalCategory] = useState("");
  const [goaldescription, setGoalDescription] = useState("");
  const [goaldeadline, setGoalDeadline] = useState("");

  const submitGoal = () => {
    if (goalcategory !== "" && goaldescription !== "" && goaldeadline !== "") {
      props.addGoal(goalcategory, goaldescription, goaldeadline);
      setGoalCategory("");
      setGoalDescription("");
      setGoalDeadline("");
    }
  };

  return (
    <div className="mb-5">
      <form>
        <div className="mb-3">
          <label>Category</label>
          <input
            type="text"
            required
            className="form-control"
            onChange={(e) => setGoalCategory(e.target.value)}
            value={goalcategory}
          ></input>
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea
            required
            className="form-control"
            onChange={(e) => setGoalDescription(e.target.value)}
            value={goaldescription}
          ></textarea>
        </div>
        <div className="mb-3">
          <label>Deadline</label>
          <input
            required
            type="date"
            className="form-control"
            onChange={(e) => setGoalDeadline(e.target.value)}
            value={goaldeadline}
          ></input>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={submitGoal}
        >
          Add Goal
        </button>
      </form>
    </div>
  );
};

export default NewGoalForm;
