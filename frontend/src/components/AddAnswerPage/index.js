import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { createAnswer } from '../../store/answer';
import "./AddAnswers.css"
function AddAnswerModal() {
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = useSelector((state) => state.session.user.id);
  const questionId = useParams().questionId;
  const [answer, setAnswer] = useState("");

  const reset = () => {
    setAnswer("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      userId,
      questionId,
      answer
    };
    let createdAnswer = await dispatch(createAnswer(data, questionId));
    if (createdAnswer) {
      history.push(`/questions/${questionId}`)
      reset();
    }

  };

  return (
    <>
      <div className='answerButton'>
        <span className='answerPencilIcon'>
          <i className="fas fa-pencil-alt" />
        </span>
        <p>Answer</p>
      </div>

      <form onSubmit={handleSubmit} className="addAnswerContainer">
        <textarea id='answer' type='text' className="addAnswerTextArea" onChange={(e) => setAnswer(e.target.value)} value={answer} required />
        <div className='addAnswerRow'>
          <button type="submit" id="addAnswerButton">Submit</button>
        </div>
      </form>
    </>
  );
}

export default AddAnswerModal;
