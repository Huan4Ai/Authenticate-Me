import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteAnswer from './DeleteAnswer';
import "./DeleteAnswer.css"

function DeleteAnswerModal({ singleAnswer }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <i className="far fa-trash-alt" onClick={() => setShowModal(true)}></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteAnswer onClose={() => setShowModal(false)} singleAnswer={singleAnswer} />
        </Modal>
      )}

    </>

  );

}

export default DeleteAnswerModal;
