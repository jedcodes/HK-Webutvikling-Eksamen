import React from "react";

const TableBody = ({ winnerName, winnerTime, grandPrix, laps }) => {
  return (
    <tr>
      <td>{grandPrix}</td>
      <td>{winnerName}</td>
      <td>{winnerTime}</td>
      <td>{laps}</td>
    </tr>
  );
};

export default TableBody;
