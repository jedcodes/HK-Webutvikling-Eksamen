import { Card } from "../components";

const DriversScreen = () => {
  return (
    <section className="w-full max-container md:my-0 md:mx-auto md:w-[80%]">
      <div className="text-5xl font-bold my-10 font-playfairDisplay">
        <h1>F1 Drivers 2023</h1>
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row md:gap-5">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default DriversScreen;
