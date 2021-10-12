import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSingleQuestion } from "../../store/question";
import { useParams } from "react-router";

function ShowOneQuestion() {
  const { questionId } = useParams(); // has to be exactly same as in the APP.js route
  const dispatch = useDispatch();
  const singleQuestion = useSelector(state => state.question[questionId]);

  useEffect(() => {
    dispatch(getSingleQuestion(questionId))
  }, [dispatch, questionId]);


  if (singleQuestion !== null || singleQuestion !== undefined) {
      return (
       <ul>
          <li>
            <div>{singleQuestion?.title}</div>
            <div>{singleQuestion?.description}</div>
          </li>
        </ul>

  )
  }


  return null;



}

export default ShowOneQuestion;
