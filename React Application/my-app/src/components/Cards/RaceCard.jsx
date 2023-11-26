import React from "react";

const RaceCard = ({ winnerName, winnerTime, grandPrix, laps }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5">
      {/* Card Content */}
      <div className="px-6 py-4">
        {/* Card Header */}
        <div className="font-semibold text-lg pt-4 pb-2 flex justify-between">
          <h1>Winner Name: {winnerName}</h1>
          <h1>Winner Time: {winnerTime}</h1>
        </div>
        {/* Card Body*/}
        <div className=" mb-2 flex justify-between">
          <h1>Location: {grandPrix}</h1>
          <h2>Laps: {laps}</h2>
        </div>
      </div>
    </div>
  );
};

export default RaceCard;
