import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getQuestion } from "../../store/question";

function ShowAllQuestions() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.question);

  useEffect(() => {
    dispatch(getQuestion())
  }, [dispatch]);

  return (
    <ul>{Object.keys(questions).map(key => <li><div>{questions[key].title}</div><div>{questions[key].description}</div></li>)}</ul>
  );

  // return null;




}

export default ShowAllQuestions;
