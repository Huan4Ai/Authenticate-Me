import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSingleAnswer from './EditAnswer';
import "./EditAnswer.css"

function EditAnswerModal({ singleAnswer }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <i className="far fa-edit" onClick={() => setShowModal(true)}></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditSingleAnswer onClose={() => setShowModal(false)} singleAnswer={singleAnswer} />
        </Modal>
      )}

    </>
  );

}

export default EditAnswerModal;
