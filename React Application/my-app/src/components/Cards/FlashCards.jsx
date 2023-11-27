import React, { useContext, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import FormulaContext from "../../context/FormulaContext";
import FlashCardService from "../../services/FlashCardService";

const FlashCards = ({
  id,
  question,
  answer,
  option1,
  option2,
  option3,
  image,
}) => {
  const [flip, setFlip] = useState(false);
  const { deleteFlashCard } = useContext(FormulaContext);

  const imgUrl = FlashCardService.getImageUrl();

  const renderImg = () => {
    return <img src={`${imgUrl}/flashCard/${image}`} />;
  };

  const frontSide = () => {
    return (
      <div className="px-6 py-4">
        <button onClick={() => deleteFlashCard(id)}>
          <AiOutlineDelete />
        </button>
        <div className="font-semibold text-lg pt-4 pb-2 flex justify-center">
          <h1>Question: {question}</h1>
          {image && renderImg()}
        </div>
        <div className=" mb-2 flex justify-center">
          <ul>
            <li>{option1}</li>
            <li>{option2}</li>
            <li>{option3}</li>
          </ul>
        </div>
      </div>
    );
  };

  const backSide = () => {
    return (
      <div className="p-10 font-playfairDisplay font-bold max-h-15 text-center">
        <h1>{answer}</h1>
      </div>
    );
  };

  return (
    <div
      onClick={() => setFlip(!flip)}
      className="max-w-sm rounded overflow-hidden shadow-lg mb-5"
    >
      {flip ? backSide() : frontSide()}
    </div>
  );
};

export default FlashCards;
