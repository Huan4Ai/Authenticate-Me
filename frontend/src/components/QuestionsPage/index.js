import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getQuestion } from "../../store/question";
import { Link } from "react-router-dom";
import "./QuestionsPage.css";
import EditQuestionModal from "../EditQuestionPage";
import DeleteQuestionModal from "../DeleteQuestion";
import QuestionBoxModal from "./AddQuestionBox";

function ShowAllQuestions() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state?.question);
  const currentUserId = useSelector(state => state?.session?.user?.id);


  useEffect(() => {
    dispatch(getQuestion())
  }, [dispatch]);

  return (

    <div className="QuestionsPageContainer">

      <QuestionBoxModal />

      {Object.keys(questions).map((question) => (
        // <Link key={questions[question].id} to={`/questions/${questions[question].id}`} className="questionsLinks">
        //   <div>
        //     <p> {questions[question].title} </p>
        //   </div>
        // </Link>
        <div key={questions[question]?.id} className="singleQuestion">
          <div className="topQuestion">
            <p className="questionOwner">{questions[question]?.User?.username}</p>
            {questions[question]?.User?.id === currentUserId && <div className="editAndDeleteIcons">
              {/* <i className="far fa-edit"></i> */}
              <EditQuestionModal singleQuestion={questions[question]} />
              {/* <i className="far fa-trash-alt"></i> */}
              <DeleteQuestionModal singleQuestion={questions[question]} />
            </div>}
          </div>
          <Link to={`/questions/${questions[question]?.id}`} className="questionsLinks">
            <span> {questions[question]?.title} </span>
          </Link>
          <p className="singleAnswerbelowQuestion">{questions[question]?.Answers?.[0]?.answer}</p>
        </div>
      ))}
    </div>
  );



}

export default ShowAllQuestions;
