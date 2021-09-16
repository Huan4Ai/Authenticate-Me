import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSingleQuestion } from "../../store/question";
import { useParams } from "react-router";

function ShowOneQuestion() {
  const { questionId } = useParams();
  const dispatch = useDispatch();
  const singleQuestion = useSelector(state => state.question[questionId]);

  useEffect(() => {
    dispatch(getSingleQuestion(questionId))
  }, [dispatch]);


  // return (
  //       // <ul>{Object.keys(singleQuestion).map(key => <li><div>{singleQuestion[key].title}</div><div>{singleQuestion[key].description}</div></li>)}</ul>

  // )
  return null;



}

export default ShowOneQuestion;
