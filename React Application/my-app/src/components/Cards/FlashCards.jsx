import React, { useState } from "react";

const FlashCards = ({ question, answer, option1, option2, option3 }) => {
  const [flip, setFlip] = useState(false);

  const frontSide = () => {
    <div className="px-6 py-4">
      {/* Card Header */}
      <div className="font-semibold text-lg pt-4 pb-2 flex justify-center">
        <h1>Question: {question}</h1>
      </div>
      {/* Card Body*/}
      <div className=" mb-2 flex justify-center">
        <ul>
          <li>{option1}</li>
          <li>{option2}</li>
          <li>{option3}</li>
        </ul>
      </div>
    </div>;
  };

  return (
    <div
      onClick={() => setFlip(!flip)}
      className="max-w-sm rounded overflow-hidden shadow-lg mb-5"
    >
      {/* Card Content */}
      {flip ? <h1>{answer}</h1> : frontSide}
    </div>
  );
};

export default FlashCards;
