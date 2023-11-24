import { FlashCard } from "../components";

const SIMPLEQUESTION = [
  {
    id: 1,
    question: "What is 1+1?",
    answer: "4",
    option1: "2",
    option2: "4",
    option3: "5",
    option4: "10",
  },
  {
    id: 1,
    question: "What is 1+10?",
    answer: "11",
    option1: "2",
    option2: "4",
    option3: "5",
    option4: "11",
  },
];

const renderFlashCards = () => {
  const cards = SIMPLEQUESTION.map((flashCard) => {
    <FlashCard key={flashCard.id} question={flashCard.question} />;
  });
  return cards;
};

const FlashCardScreen = () => {
  return <section className="max-container">{renderFlashCards()}</section>;
};

export default FlashCardScreen;
