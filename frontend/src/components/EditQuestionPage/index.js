import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSingleQuestion from './EditQuestion';
import "./EditQuestionPage.css"

function EditQuestionModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="editButtonOnQuestion">Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditSingleQuestion setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditQuestionModal;
