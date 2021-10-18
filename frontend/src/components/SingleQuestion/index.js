import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getSingleQuestion } from "../../store/question";
import { useParams } from "react-router";
import EditQuestionModal from "../EditQuestionPage";
import DeleteQuestionModal from "../DeleteQuestion";
import AddAnswerModal from "../AddAnswerPage";
import "./SingleQuestion.css"

function ShowOneQuestion() {
  const { questionId } = useParams(); // has to be exactly same as in the APP.js route
  const dispatch = useDispatch();
  const singleQuestion = useSelector(state => state.question[questionId]);

  useEffect(() => {
    dispatch(getSingleQuestion(questionId))
  }, [dispatch, questionId]);


  if (singleQuestion !== null || singleQuestion !== undefined) {
    return (
      <div className="singleQuestionContainer">
        <div className="questionTitle">
          {singleQuestion?.title}
        </div>
        <div className="answerButton">
          <i className="fas fa-pencil-alt" />
          <AddAnswerModal />
        </div>
        <div className="editAndDelete">
        <EditQuestionModal />
        <DeleteQuestionModal />
        </div>
      </div>
  )
  }


  return null;



}

export default ShowOneQuestion;
