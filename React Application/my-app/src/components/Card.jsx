const Card = ({ name, imgSrc, driverAge, points, ranking }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-5">
      <img src={imgSrc} alt={name} className="w-full" />
      {/* Card Content */}
      <div className="px-6 py-4">
        {/* Card Header */}
        <div className="font-semibold text-lg pt-4 pb-2 flex justify-between">
          <h1>Name: {name}</h1>
          <h1>Age: {driverAge}</h1>
        </div>
        {/* Card Body*/}
        <div className=" mb-2 flex justify-between">
          <h1>Ranking: {ranking}</h1>
          <h2>PTS: {points}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
