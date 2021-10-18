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
    <div className="addAnswerContainer">
      <h3>Create an answer</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='answer'>Answer:</label>
        </div>
        <div>
          <input id='answer' type='text' className="inputField" onChange={(e) => setAnswer(e.target.value)} value={answer} required />
        </div>
        <div>
        <button type="submit" className="submitButton">Submit</button>
        <button type="button" onClick={handleCancelClick} className="cancelButton">Cancel</button>
        </div>
      </form>
    </div>


  );

  };





export default CreateSingleAnswer
