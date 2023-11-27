import React, { useState } from "react";
import FlashCardService from "../services/FlashCardService";

const FlashCardModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [image, setImage] = useState("");

  const handleChange = (event) => {
    const name = event.currentTarget.name;

    switch (name) {
      case "question":
        setQuestion(event.currentTarget.value);
        break;
      case "answer":
        setAnswer(event.currentTarget.value);
        break;
      case "optionOne":
        setOptionOne(event.currentTarget.value);
        break;
      case "optionTwo":
        setOptionTwo(event.currentTarget.value);
        break;
      case "optionThree":
        setOptionThree(event.currentTarget.value);
        break;
      case "image":
        setImage(event.currentTarget.files[0]);
        break;
      default:
        console.log("Something went wrong");
    }
  };

  const saveFlashCard = () => {
    const newCard = {
      question,
      answer,
      optionOne,
      optionTwo,
      optionThree,
      image: image.name,
    };
    FlashCardService.postFlashCard(newCard, image);
  };

  const handleClick = () => {
    saveFlashCard();
    setShowModal(false);
  };

  return (
    <>
      <button
        className="py-2 px-4 bg-primary-red text-white"
        onClick={() => setShowModal(true)}
      >
        Add New Flash Card
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
                      placeholder="Enter question"
                      type="text"
                      name="question"
                    />
                    <input
                      onChange={handleChange}
                      name="answer"
                      placeholder="Enter Answer"
                      type="text"
                    />
                    <input
                      onChange={handleChange}
                      name="optionOne"
                      placeholder="Enter Option One"
                      type="text"
                    />
                    <input
                      onChange={handleChange}
                      name="optionTwo"
                      placeholder="Enter Option Two"
                      type="text"
                    />
                    <input
                      onChange={handleChange}
                      name="optionThree"
                      placeholder="Enter Option Three"
                      type="text"
                    />
                    <input name="image" type="file" />
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="py-2 px-4 bg-primary-red text-white rounded-lg"
                    type="button"
                    onClick={handleClick}
                  >
                    Add New Card
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

export default FlashCardModal;
