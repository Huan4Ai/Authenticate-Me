import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteSingleQuestion from './DeleteQuestion';
import "./DeleteQuestion.css"
function DeleteQuestionModal({singleQuestion}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button onClick={() => setShowModal(true)} className="deleteButtonOnQuestion">Delete</button> */}
      <i className="far fa-trash-alt" onClick={() => setShowModal(true)}></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteSingleQuestion onClose={() => setShowModal(false)} singleQuestion={singleQuestion} />
        </Modal>
      )}
    </>
  );
}

export default DeleteQuestionModal;
