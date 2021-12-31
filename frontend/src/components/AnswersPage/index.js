import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getSingleQuestion } from "../../store/question";
import { getAnswers } from "../../store/answer";
import AddAnswerModal from "../AddAnswerPage";
import EditAnswerModal from "../EditAnswerPage";
import DeleteAnswerModal from "../DeleteAnswerPage";
import "./Answers.css";
import About from "../About/about"

function ShowAllAnswers() {
  const dispatch = useDispatch();
  const answers = useSelector(state => state.answer);
  const questionId = useParams().questionId;
  const singleQuestion = useSelector(state => state.question[questionId]);
  const currentUserId = useSelector(state => state?.session?.user?.id);

  useEffect(() => {
    dispatch(getAnswers(questionId));
    dispatch(getSingleQuestion(questionId));
  }, [dispatch, questionId]);

  return (
    <div className="mainAnswerContainer">
      <h1 id="questionTitle">{singleQuestion?.title}</h1>
      <AddAnswerModal />
      {Object.keys(answers).map(key =>
        <div className="eachAnswer" key={answers[key].id}>
          <div className="topAnswer">
            <p id="questionAnswerer">{answers?.[key]?.User?.username}</p>
            {answers?.[key]?.User?.id === currentUserId &&
              <div className="editAndDeleteIcons">
                <EditAnswerModal singleAnswer={answers[key]} />
                <DeleteAnswerModal singleAnswer={answers[key]} />
              </div>}
          </div>
          <p id="answerDetail">{answers?.[key]?.answer}</p>

        </div>
      )}

      <About />


    </div>
  );
}


export default ShowAllAnswers
