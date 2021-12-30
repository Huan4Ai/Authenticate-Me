import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { createAnswer } from '../../store/answer';
import { getAnswers } from '../../store/answer';
import "./AddAnswers.css"
function AddAnswerModal() {
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = useSelector((state) => state.session.user.id);
  const questionId = useParams().questionId;
  const [answer, setAnswer] = useState("");
  const [isOpen, setIsOpen] = useState(true);

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
      dispatch(getAnswers(questionId));
    }

  };

  const answerOpener = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className='answerButton' onClick={answerOpener}>
        <span className='answerPencilIcon'>
          <i className="fas fa-pencil-alt" />
        </span>
        <p>Answer</p>
      </div>

      <form hidden={isOpen} onSubmit={handleSubmit} className="addAnswerContainer">
        <textarea hidden={isOpen} id='answer' type='text' className="addAnswerTextArea" onChange={(e) => setAnswer(e.target.value)} value={answer} required />
        <div className='addAnswerRow'>
          <button hidden={isOpen} type="submit" id="addAnswerButton" onClick={answerOpener}>Submit</button>
        </div>
      </form>
    </>
  );
}

export default AddAnswerModal;
