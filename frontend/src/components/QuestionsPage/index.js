import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getQuestion } from "../../store/question";
import { Link } from "react-router-dom";
import "./QuestionsPage.css"

function ShowAllQuestions() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state?.question);
  const username = useSelector(state => state?.session?.user?.username)


  useEffect(() => {
    dispatch(getQuestion())
  }, [dispatch]);

  return (
    // <ul>{Object.keys(questions).map(key =>
    //     <li key={questions[key].id}>
    //     <Link to={`/questions/${questions[key].id}`}>
    //       <div>{questions[key].title}</div>
    //     </Link>
    //     </li>)}
    // </ul>


    <div className="QuestionsPageContainer">

      <div className="askQuestionBox">
        <p id="askQuestionUsername">{username}</p>
        <p id="askQuestionPrompt">What is your question?</p>
      </div>

      {Object.keys(questions).map((question) => (
        // <Link key={questions[question].id} to={`/questions/${questions[question].id}`} className="questionsLinks">
        //   <div>
        //     <p> {questions[question].title} </p>
        //   </div>
        // </Link>
        <div key={questions[question].id} className="singleQuestion">
          <Link to={`/questions/${questions[question].id}`} className="questionsLinks">
            <span> {questions[question]?.title} </span>
          </Link>
          <p>{questions[question]?.Answers[0]?.answer}</p>
        </div>
      ))}
    </div>
  );

  // return null;
  // questions[question].Answers[0].answer



}

export default ShowAllQuestions;
