import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from "react-router";
import { createAnswer } from "../../store/answer";

const CreateSingleAnswer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = useSelector((state) => state.session.user.id);
  const questionId = useParams().questionId;
  const [answer, setAnswer] = useState("");


  const reset = () => {
    setAnswer("");
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {
  //     ownerId,
  //     title,
  //     description
  //   };

  //   let createdQuestion = await dispatch(createAQuestion(payload));
  //   if (createdQuestion) {
  //     history.push(`/questions/${createdQuestion.id}`);
  //   }
  //   reset();

  return (
    <div>
      <h2>Create an answer</h2>
      <form>
        <div>
          <label htmlFor='answer'>Answer:</label>
          <input id='answer' type='text' onChange={(e) => setAnswer(e.target.value)} value={answer} required />
        </div>
        <button type="submit">Submit</button>
        <button type="button">Cancel</button>
      </form>
    </div>


  );

  };





export default CreateSingleAnswer
