import { useContext } from "react";
import { TeamCard } from "../components";
import FormulaContext from "../context/FormulaContext";
import { Link } from "react-router-dom";

const TeamsScreen = () => {
  const { teams } = useContext(FormulaContext);

  const renderTeamCards = () => {
    const teamCards = teams.map((team) => (
      <Link key={team.id} to={`/teams/${team.id}`}>
        <TeamCard
          driver1={team.driver1}
          driver2={team.driver2}
          image={team.image}
          manufacturer={team.manufacturer}
          points={team.points}
          ranking={team.ranking}
        />
      </Link>
    ));

    return teamCards;
  };
  return (
    <section className="w-full max-container md:my-0 md:mx-auto md:w-[80%]">
      <div className="text-5xl font-bold my-10 font-playfairDisplay">
        <h1>F1 Teams 2023</h1>
      </div>
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-4 md:gap-5">
        {renderTeamCards()}
      </div>
    </section>
  );
};

export default TeamsScreen;
