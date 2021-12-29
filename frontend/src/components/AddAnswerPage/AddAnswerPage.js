import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import { createAnswer } from "../../store/answer";
import "./AddAnswers.css"

const CreateSingleAnswer = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = useSelector((state) => state.session.user.id);
  const questionId = useParams().questionId;
  const [answer, setAnswer] = useState("");


  const reset = () => {
    setAnswer("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      userId,
      questionId,
      answer
    };
    let createdAnswer = await dispatch(createAnswer(data, questionId));
    if (createdAnswer) {
      setShowModal(false);
      history.push(`/questions/${questionId}`)
      reset();
    }

  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (

    <form onSubmit={handleSubmit} className="addAnswerContainer">
      <div>
        <input id='answer' type='text' className="inputField" onChange={(e) => setAnswer(e.target.value)} value={answer} required />
      </div>
      <div>
        <button type="submit" className="submitButton">Submit</button>
      </div>
    </form>


  );

};





export default CreateSingleAnswer
