import { useEffect, useState } from "react";
import { Card, FloatingActionButton } from "../components";
import DriversService from "../services/DriversService";

const DriversScreen = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getDrivers();
  }, []);

  const getDrivers = async () => {
    const { data } = await DriversService.getAllDrivers();

    setDrivers(data);
    console.log(drivers);
  };

  const renderDriverCards = () => {
    const driverCards = drivers.map((driver) => (
      <Card
        key={driver.id}
        name={driver.name}
        imgSrc={driver.image}
        driver={driver}
      />
    ));

    return driverCards;
  };

  return (
    <section className=" w-full max-container md:my-0 md:mx-auto md:w-[80%]">
      <div className="text-5xl font-bold my-10 font-playfairDisplay">
        <h1>F1 Drivers 2023</h1>
      </div>
      <div className="flex flex-col items-center h-full relative">
        <div className="flex items-center justify-center flex-col md:flex-row md:gap-5">
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
