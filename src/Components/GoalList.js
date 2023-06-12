import React from "react";
import GoalRowItem from "./GoalRowItem";

const GoalList = (props) => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Category</th>
          <th scope="col">Description</th>
          <th scope="col">Deadline</th>
        </tr>
      </thead>
      <tbody>
        {props.goals.map((goal) => (
          <GoalRowItem
            key={goal.rowNumber}
            rowNumber={goal.rowNumber}
            rowCategory={goal.rowCategory}
            rowDescription={goal.rowDescription}
            rowDeadline={goal.rowDeadline}
            deleteGoal={props.deleteGoal}
          />
        ))}
      </tbody>
    </table>
  );
};

export default GoalList;
