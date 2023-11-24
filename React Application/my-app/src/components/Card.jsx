//import { Link } from "react-router-dom"

//const imgSrc =
"https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/hamilton.jpg.img.1920.medium.jpg/1677069594164.jpg";

const Card = ({ name, imgSrc }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5">
      <img src={imgSrc} alt={name} className="w-full" />
      {/* Card Content */}
      <div className="px-6 py-4">
        {/* Card Header */}
        <div className="font-semibold text-lg pt-4 pb-2 flex justify-between">
          <h1>{name}</h1>
          <p>Flag</p>
        </div>
        {/* Card Body*/}
        <div className=" mb-2 flex justify-between">
          <h1>ranking</h1>
          <h2>points PTS</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
