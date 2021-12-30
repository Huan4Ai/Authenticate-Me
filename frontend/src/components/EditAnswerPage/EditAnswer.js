import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAnswer } from "../../store/answer";
import { getAnswers } from "../../store/answer";

function EditSingleAnswer({ singleAnswer, onClose }) {
  const dispatch = useDispatch();
  const questionId = singleAnswer.questionId;
  const username = useSelector(state => state?.session?.user?.username);

  const [answer, setAnswer] = useState(singleAnswer.answer);

  const handleEdit = async (e) => {
    e.preventDefault();
    const data = {
      ...singleAnswer,
      answer
    };

    let updatedAnswer = await dispatch(updateAnswer(data));
    if (updatedAnswer) {
      onClose();
      dispatch(getAnswers(questionId));
    }

  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <form className="editAnswerContainer" onSubmit={handleEdit}>
      <p id="usernameTitle">{username}</p>
      <div>
        <input className="editAnswerInput" type='text' onChange={(e) => setAnswer(e.target.value)} value={answer} required />
      </div>
      <div className="editAnswerButtons">
        <button type="button" onClick={handleCancelClick} id="cancelButtonModal">Cancel</button>
        <button type="submit" id="submitButtonModal">Submit</button>
      </div>
    </form>

  )
}

export default EditSingleAnswer;
