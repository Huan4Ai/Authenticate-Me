import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSingleQuestion } from "../../store/question";

function ShowOneQuestion() {
  const dispatch = useDispatch();
  const singleQuestion = useSelector(state => state.newQuestion);

  useEffect(() => {
    dispatch(getSingleQuestion())
  }, [dispatch]);


  // return (
  //       // <ul>{Object.keys(singleQuestion).map(key => <li><div>{singleQuestion[key].title}</div><div>{singleQuestion[key].description}</div></li>)}</ul>

  // )
  return null;



}

export default ShowOneQuestion;
