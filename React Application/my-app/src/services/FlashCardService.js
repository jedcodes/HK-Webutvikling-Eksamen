import axios from "axios";

const FlashCardService = (() => {
  const flashCardController = "http://localhost:5068/api/flashcard";
  const imageController = "http://localhost:5068/api/imageUpload";
  const imageUrl = "http://localhost:5068/images";

  const getFlashCards = async () => {
    try {
      const result = await axios.get(flashCardController);

      return result;
    } catch {
      return [];
    }
  };

  // Get ID
  const getByID = async (id) => {
    const { data } = await axios.get(`${flashCardController}/${id}`);

    return data;
  };

  // Adding new flashcard to database
  const postFlashCard = async (newFlashCard, image) => {
    try {
      const formData = new FormData();
      formData.append("file", image);

      const result = axios.post(flashCardController, newFlashCard);

      const resultImageUpload = await axios({
        url: imageController,
        method: "POST",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (result.status && resultImageUpload.status == 200) {
        console.log(result);
        alert("Flash Card Added");
        formData.delete("file");
      } else {
        alert("Something went wrong");
      }
    } catch (e) {
      console.log(e);
    }
  };

  // Deleting Flash card

  const deleteFlashCard = async (id) => {
    try {
      const result = await axios.delete(`${flashCardController}/${id}`);

      if (result.status == 200) {
        alert("Flash Card Deleted");
      }
    } catch {
      alert("Something went wrong");
    }
  };

  // Updating flashcard in database
  const putFlashCard = async (flashCardToUpdate) => {
    const result = axios.put(flashCardController, flashCardToUpdate);

    if (result.status == 200) {
      alert("Flash card Updated");
    }
  };

  const getImageUrl = () => imageUrl;

  return {
    getFlashCards,
    postFlashCard,
    putFlashCard,
    getByID,
    deleteFlashCard,
    getImageUrl,
  };
})();

export default FlashCardService;
