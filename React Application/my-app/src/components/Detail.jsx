import React from "react";
import DriversService from "../services/DriversService";

const Detail = (props) => {
  const imagesSrc = DriversService.getImageUrl();
  const {
    driverName,
    driverAge,
    driverImage,
    driverNationality,
    driverRanking,
    driverPoints,
  } = props;
  return (
    <div className="rounded-xl flex">
      <img
        src={`${imagesSrc}/drivers/${driverImage}`}
        alt={driverName}
        className="w-48 h-auto"
      />
      <div className="p-8 text-left space-y-4">
        <h4>Name: {driverName}</h4>
        <h4>Nationality: {driverNationality}</h4>
        <h4>Age: {driverAge}</h4>
        <h4>F1 Ranking: {driverRanking}</h4>
        <h4>Season Points: {driverPoints}PTS</h4>
      </div>
    </div>
  );
};

export default Detail;
