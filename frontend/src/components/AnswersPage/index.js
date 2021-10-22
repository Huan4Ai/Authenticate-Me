import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getAnswers } from "../../store/answer";
import { NavLink } from "react-router-dom";
import "./Answers.css"
function ShowAllAnswers() {
  const dispatch = useDispatch();
  const answers = useSelector(state => state.answer);
  const questionId = useParams().questionId;

  useEffect(() => {
    dispatch(getAnswers(questionId))
  }, [dispatch, questionId]);

  return (
    <div>
      {Object.keys(answers).map(key =>
        // <li key={answers[key].id}>
        <div className="eachAnswer" key={answers[key].id}>
          <div>
            {answers[key].answer}
          </div>
          <div>
            <NavLink to={`/answers/${answers[key].id}`}>Edit this answer</NavLink>
          </div>
        </div>
        // </li>)}
      )}


    </div>
  );
}


export default ShowAllAnswers
