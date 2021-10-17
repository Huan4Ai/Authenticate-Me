import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getQuestion } from "../../store/question";
import { Link } from "react-router-dom";
import "./QuestionsPage.css"

function ShowAllQuestions() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.question);

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


    	<div className="questionsContainer">
				{Object.keys(questions).map((question) => (
					<Link key={questions[question].id} to={`/questions/${questions[question].id}`}>
						<div className="questionsLinks">
							<p> {questions[question].title} </p>
						</div>
					</Link>
				))}
			</div>
  );

  // return null;




}

export default ShowAllQuestions;
