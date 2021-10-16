import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteSingleQuestion from './DeleteQuestion';
function DeleteQuestionModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Delete</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteSingleQuestion setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default DeleteQuestionModal;
