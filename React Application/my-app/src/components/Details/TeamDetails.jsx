import React from "react";
import TeamsService from "../../services/TeamService";

const TeamDetails = ({ driver1, image }) => {
  const imagesSrc = TeamsService.getImageUrl();
  return (
    <div className="rounded-xl flex">
      <img src={`${imagesSrc}/teams/${image}`} alt="" />
      <div>
        <h1>{driver1}</h1>
      </div>
    </div>
  );
};

export default TeamDetails;
