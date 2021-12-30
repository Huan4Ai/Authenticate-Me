import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSingleQuestion from './EditQuestion';
import "./EditQuestionPage.css"

function EditQuestionModal({ singleQuestion }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <i className="far fa-edit" onClick={() => setShowModal(true)}></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditSingleQuestion onClose={() => setShowModal(false)} singleQuestion={singleQuestion} />
        </Modal>
      )}
    </>
  );
}

export default EditQuestionModal;
