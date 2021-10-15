import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateSingleQuestion from './CreateQuestion';
function CreateQuestionModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Add question</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSingleQuestion setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default CreateQuestionModal;
