import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { updateAnswer } from "../../store/answer";


function EditSingleAnswer() {
  const dispatch = useDispatch();
  const { answerId } = useParams();
  const singleAnswer = useSelector(state => state.answer[answerId]);

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
      reset();
    }

  };


  return (
    <h1>hhh</h1>
  )
}

export default EditSingleAnswer;
