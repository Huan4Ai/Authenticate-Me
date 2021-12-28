import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useSelector } from "react-redux";
import CreateSingleQuestion from '../CreateQuestionPage/CreateQuestion';
import "./QuestionBox.css"

function QuestionBoxModal() {
  const [showModal, setShowModal] = useState(false);

  const username = useSelector(state => state?.session?.user?.username);


  return (
    <>
      <div className="askQuestionBox" onClick={() => setShowModal(true)}>
        <p id="askQuestionUsername">{username}</p>
        <p id="askQuestionPrompt">What is your question?</p>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSingleQuestion setShowModal={setShowModal} />
        </Modal>
      )}


    </>
  );



}

export default QuestionBoxModal;
