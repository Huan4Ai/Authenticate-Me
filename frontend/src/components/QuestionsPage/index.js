import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getQuestion } from "../../store/question";
import { Link } from "react-router-dom";

function ShowAllQuestions() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.question);

  useEffect(() => {
    dispatch(getQuestion())
  }, [dispatch]);

  return (
    <ul>{Object.keys(questions).map(key =>
        <li key={questions[key].id}>
        <Link to={`/questions/${questions[key].id}`}>
          <div>{questions[key].title}</div>
        </Link>
        </li>)}
    </ul>
  );

  // return null;




}

export default ShowAllQuestions;
