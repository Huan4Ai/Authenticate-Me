import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAnswer } from "../../store/answer";
import { useHistory } from "react-router";


function EditSingleAnswer() {
  const dispatch = useDispatch();
  // const singleAnswer = useSelector(state => state.answer[answerId]);
  // const questionId = useSelector(state => state.answer[answerId].questionId);
  // const username = useSelector(state => state?.session?.user?.username);
  const history = useHistory();

  const [answer, setAnswer] = useState("");
  const reset = () => {
    setAnswer("");
  }

  const handleEdit = async (e) => {
    e.preventDefault();
    const data = {
      // ...singleAnswer,
      answer
    };

    let updatedAnswer = await dispatch(updateAnswer(data));
    if (updatedAnswer) {
      // history.push(`/questions/${questionId}`)
      reset();
    }

  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    // history.push(`/questions/${questionId}`);
  };

  return (
    <form onSubmit={handleEdit}>
      <div>
        <input id='answer' type='text' onChange={(e) => setAnswer(e.target.value)} value={answer} required />
      </div>
      <div>
        <button type="button" onClick={handleCancelClick} className="cancelButton">Cancel</button>
        <button type="submit" className="submitButton">Submit</button>
      </div>
    </form>

  )
}

export default EditSingleAnswer;
