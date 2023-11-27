import { useContext, useState } from "react";
import FormulaContext from "../context/FormulaContext";

const EditModal = () => {
  const { getById, editFlashCard } = useContext(FormulaContext);
  const [showModal, setShowModal] = useState(false);
  const [question, setQuestion] = useState("");

  const [cardId, setCardId] = useState(null);

  const handleChange = (event) => {
    const name = event.currentTarget.name;
    switch (name) {
      case "id":
        setCardId(event.currentTarget.value);
        break;
      case "question":
        setQuestion({ ...question, question: event.currentTarget.value });
        break;
      default:
        console.log("Something went wrong");
    }
  };

  const onModalOpen = async () => {
    const flashCardFromContext = await getById(cardId);
    setQuestion(flashCardFromContext);
    setShowModal(true);
  };

  const handleClick = () => {
    setShowModal(false);
    editFlashCard(question);
  };

  return (
    <>
      <input
        className="border border-red-500"
        onChange={handleChange}
        type="text"
        name="id"
      />
      <button
        className="py-2 px-4 bg-whte text-primary-red border border-red-400"
        onClick={onModalOpen}
      >
        Edit Flash Card
      </button>

      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <form>
                    <input
                      onChange={handleChange}
                      placeholder="Edit question"
                      type="text"
                      name="question"
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="py-2 px-4 bg-primary-red text-white rounded-lg"
                    type="button"
                    onClick={handleClick}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default EditModal;
