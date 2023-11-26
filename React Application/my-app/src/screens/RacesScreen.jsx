import { useContext } from "react";
import FormulaContext from "../context/FormulaContext";
import { RaceCard } from "../components";

const RacesScreen = () => {
  const { races } = useContext(FormulaContext);

  const renderRaceCards = () => {
    const raceCards = races.map((race) => {
      return (
        <RaceCard
          key={race.id}
          winnerName={race.winnerName}
          winnerTime={race.winnerTime}
          grandPrix={race.grandPrix}
          laps={race.numberOfLaps}
        />
      );
    });
    return raceCards;
  };

  return (
    <section className="w-full max-container md:my-0 md:mx-auto md:w-[80%]">
      <div className="text-5xl font-bold my-10 font-playfairDisplay">
        <h1>F1 GrandPrix 2023</h1>
      </div>
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-4 md:gap-5">
        {renderRaceCards()}
      </div>
    </section>
  );
};

export default RacesScreen;
