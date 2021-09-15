import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getQuestion } from "../../store/question";

function ShowAllQuestions() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questions);

  useEffect(() => {
    dispatch(getQuestion())
  }, [dispatch]);

  // return (
    // <ul>{questions.map(question => <li>{question}</li>)}</ul>

  // );

  return null;





}

export default ShowAllQuestions;
