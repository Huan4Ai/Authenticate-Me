import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { updateAnswer } from "../../store/answer";
import { useHistory } from "react-router";


function EditSingleAnswer() {
  const dispatch = useDispatch();
  const { answerId } = useParams();
  const singleAnswer = useSelector(state => state.answer[answerId]);
  const questionId = useSelector(state => state.answer[answerId].questionId);
  const history = useHistory();

  const [answer, setAnswer] = useState("");
  const reset = () => {
    setAnswer("");
  }

  const handleEdit = async (e) => {
    e.preventDefault();
    const data = {
      ...singleAnswer,
      answer
    };

    let updatedAnswer = await dispatch(updateAnswer(data));
    if (updatedAnswer) {
      history.push(`/questions/${questionId}`)
      reset();
    }

  };


  return (
    <div>
      <h2>Edit an answer</h2>
      <form onSubmit={handleEdit}>
        <div>
          <label htmlFor='answer'>Answer:</label>
          <input id='answer' type='text' onChange={(e) => setAnswer(e.target.value)} value={answer} required />
        </div>
        <button type="submit">Submit</button>
        <button type="button">Cancel</button>
      </form>
    </div>







  )
}

export default EditSingleAnswer;
