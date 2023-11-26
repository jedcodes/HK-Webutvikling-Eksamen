import { useContext } from "react";
import { Card, FloatingActionButton, SearchBar } from "../components";
import { Link } from "react-router-dom";
import FormulaContext from "../context/FormulaContext";

const DriversScreen = () => {
  const { drivers, searchTerm } = useContext(FormulaContext);

  const renderDriverCards = () => {
    const driverCards = drivers.map((driver) => (
      <Link key={driver.id} to={`/drivers/${driver.id}`}>
        <Card
          name={driver.name}
          imgSrc={driver.image}
          driveAge={driver.age}
          points={driver.points}
          ranking={driver.ranking}
        />
      </Link>
    ));

    return driverCards;
  };

  return (
    <section className=" w-full max-container md:my-0 md:mx-auto md:w-[80%]">
      <div className="my-10 flex md:flex-row flex-col items-center justify-between">
        <h1 className="font-playfairDisplay text-5xl font-bold">
          F1 Drivers 2023
          {searchTerm}
        </h1>
        <SearchBar />
      </div>
      <div className="flex flex-col items-center h-full relative">
        <div className="sm:grid sm:grid-cols-2  md:grid-cols-4 md:gap-5">
          {renderDriverCards()}
        </div>
        <div className="self-center sticky cursor-pointer mt-5">
          <FloatingActionButton />
        </div>
      </div>
    </section>
  );
};

export default DriversScreen;
