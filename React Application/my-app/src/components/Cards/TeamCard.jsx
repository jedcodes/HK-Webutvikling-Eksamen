import React from "react";
import TeamsService from "../../services/TeamService";

const TeamCard = ({ image, manufacturer }) => {
  const imageUrl = TeamsService.getImageUrl();
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5">
      <img
        src={`${imageUrl}/teams/${image}`}
        alt={manufacturer}
        className="w-full"
      />
      {/* Card Content */}
      <div className="px-6 py-4">
        {/* Card Header */}
        <div className="font-semibold text-lg pt-4 pb-2 flex justify-center">
          <h1>Team: {manufacturer}</h1>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
