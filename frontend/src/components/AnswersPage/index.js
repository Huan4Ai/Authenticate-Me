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

  useEffect(() => {
    dispatch(getAnswers(questionId))
  }, [dispatch, questionId]);

  return null;
}


export default ShowAllAnswers
