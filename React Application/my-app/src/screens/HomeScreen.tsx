import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <section className="min-h-screen bg-primary-dark relative">
      <div className="h-screen bg-hero bg-cover bg-center bg-no-repeat relative object-contain"></div>
       <div className="absolute top-10 flex flex-col justify-center items-start w-full pt-10 px-5 ml-5">
        <h1 className="text-5xl font-bold font-playfairDisplay text-white my-10">All the <span className="text-primary-red font-extrabold">F1</span> information you need <br /> in one place.</h1>
        <ul className="list-disc text-lg ml-5 text-primary-red">
          <li><span className="text-white-400">Access to all drivers</span></li>
          <li><span className="text-white-400">Access to all teams</span></li>
          <li><span className="text-white-400">And teams clash battles</span></li>
        </ul>
       <div className="py-2 px-5 bg-primary-red text-white-400 mt-4 rounded-full"><Link to="/drivers">Explore</Link></div>
      </div>
    </section>
  )
};

export default HomeScreen;
