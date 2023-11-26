import React from "react";

const TeamCard = ({
  driver1,
  driver2,
  image,
  manufacturer,
  points,
  ranking,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5">
      <img src={image} alt={manufacturer} className="w-full" />
      {/* Card Content */}
      <div className="px-6 py-4">
        {/* Card Header */}
        <div className="font-semibold text-lg pt-4 pb-2 flex justify-between">
          <h1>
            Drivers Name: {driver1} & {driver2}
          </h1>
          <h1>Manufacturer: {manufacturer}</h1>
        </div>
        {/* Card Body*/}
        <div className=" mb-2 flex justify-between">
          <h1>Ranking: {ranking}</h1>
          <h2>PTS: {points}</h2>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
