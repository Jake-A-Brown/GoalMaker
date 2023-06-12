const GoalRowItem = (props) => {
  return (
    <tr onClick={() => props.deleteGoal(props.rowNumber)}>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowCategory}</td>
      <td>{props.rowDescription}</td>
      <td>{props.rowDeadline}</td>
    </tr>
  );
};

export default GoalRowItem;
