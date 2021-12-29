import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateSingleAnswer from './AddAnswerPage';
import "./AddAnswers.css"
function AddAnswerModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button onClick={() => setShowModal(true)} className="answerOnQuestionButton">Answer</button> */}
      <div className='answerButton'>
        <span className='answerPencilIcon'>
          <i className="fas fa-pencil-alt" />
        </span>
        <p>Answer</p>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSingleAnswer setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default AddAnswerModal;
