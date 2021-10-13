import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getAnswers } from "../../store/answer";

function ShowAllAnswers() {
  const dispatch = useDispatch();
  const answers = useSelector(state => state.answer);
  const questionId = useParams();
  console.log(answers)

  useEffect(() => {
    dispatch(getAnswers(questionId.questionId))
  }, [dispatch, questionId]);

  return (
    <ul>{Object.keys(answers).map(key =>
        <li key={answers[key].id}>
          <div>{answers[key].answer}</div>
        </li>)}
    </ul>


  );
}


export default ShowAllAnswers
