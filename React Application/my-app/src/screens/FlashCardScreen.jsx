import { useContext } from "react";
import { EditModal, FlashCardModal, FlashCards } from "../components";
import FormulaContext from "../context/FormulaContext";

const FlashCardScreen = () => {
  const { flashcards } = useContext(FormulaContext);

  const renderFlashCards = () => {
    const flashCard = flashcards.map((card) => (
      <FlashCards
        key={card.id}
        id={card.id}
        question={card.question}
        image={card.image}
        answer={card.answer}
        option1={card.option1}
        option2={card.option2}
        option3={card.option3}
      />
    ));
    return flashCard;
  };
  return (
    <section className="max-container">
      <div className="">
        {renderFlashCards()}
        <FlashCardModal />
        <EditModal />
      </div>
    </section>
  );
};

export default FlashCardScreen;
