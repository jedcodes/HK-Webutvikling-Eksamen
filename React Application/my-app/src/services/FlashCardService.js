import axios from "axios";

const FlashCardService = (() => {
  const flashCardController = "http://localhost:5068/api/flashcard";

  const getFlashCards = async () => {
    try {
      const result = await axios.get(flashCardController);

      return result;
    } catch {
      return [];
    }
  };

  //
  const postFlashCard = async (newFlashCard) => {
    try {
      const result = axios.post(flashCardController, newFlashCard);
      if (result.status == 200) {
        console.log(result);
        alert("Flash Card Added");
      } else alert("Something went wrong");
    } catch (e) {
      console.log(e);
    }
  };

  return { getFlashCards, postFlashCard };
})();

export default FlashCardService;
