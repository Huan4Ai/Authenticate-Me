import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateSingleAnswer from './AddAnswerPage';
function AddAnswerModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Create an answer</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSingleAnswer setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default AddAnswerModal;
