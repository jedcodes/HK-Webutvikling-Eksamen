import DriversService from "../services/DriversService";

const Card = ({ name, imgSrc }) => {
  const imagesUrl = DriversService.getImageUrl();
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5">
      <img
        src={`${imagesUrl}/drivers/${imgSrc}`}
        alt={name}
        className="w-full h-auto"
      />
      {/* Card Content */}
      <div className="px-6 py-4">
        {/* Card Header */}
        <div className="font-semibold text-lg pt-4 pb-2 flex justify-between">
          <h1>Name: {name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
