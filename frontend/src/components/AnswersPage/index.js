import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getSingleQuestion } from "../../store/question";
import { getAnswers } from "../../store/answer";
import AddAnswerModal from "../AddAnswerPage";
import { NavLink } from "react-router-dom";
import "./Answers.css"
function ShowAllAnswers() {
  const dispatch = useDispatch();
  const answers = useSelector(state => state.answer);
  const questionId = useParams().questionId;
  const singleQuestion = useSelector(state => state.question[questionId]);

  useEffect(() => {
    dispatch(getAnswers(questionId));
    dispatch(getSingleQuestion(questionId));
  }, [dispatch, questionId]);

  return (
    <div className="mainAnswerContainer">
      <h1 id="questionTitle">{singleQuestion?.title}</h1>
      <AddAnswerModal />
      {Object.keys(answers).map(key =>
        // <li key={answers[key].id}>
        <div className="eachAnswer" key={answers[key].id}>
          <p id="questionAnswerer">{answers?.[key]?.User?.username}</p>
          <p id="answerDetail">{answers?.[key]?.answer}</p>
          {/* <div>
            <NavLink to={`/answers/${answers[key].id}`}>Edit this answer</NavLink>
          </div> */}
        </div>
        // </li>)}
      )}


    </div>
  );
}


export default ShowAllAnswers
