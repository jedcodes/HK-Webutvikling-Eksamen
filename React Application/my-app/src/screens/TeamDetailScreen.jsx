import React, { useContext, useEffect, useState } from "react";
import FormulaContext from "../context/FormulaContext";
import { useParams } from "react-router-dom";
import { TeamDetails } from "../components";

const TeamDetailScreen = () => {
  const { getTeamByIdFromService } = useContext(FormulaContext);
  const { id } = useParams();
  const [teamDetail, setTeamDetail] = useState(null);

  useEffect(() => {
    getTeamDetails();
  }, []);

  const getTeamDetails = async () => {
    const data = await getTeamByIdFromService(id);

    setTeamDetail(data);
  };

  return (
    <section className="max-container shadow-lg">
      {teamDetail && (
        <TeamDetails driver1={teamDetail.driver1} image={teamDetail.image} />
      )}
    </section>
  );
};

export default TeamDetailScreen;
