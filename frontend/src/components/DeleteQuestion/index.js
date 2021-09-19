import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeAQuestion } from "../../store/question";

function DeleteSingleQuestion() {
  const dispatch = useDispatch();
  const { questionId } = useParams();
  const singleQuestion = useSelector(state => state.question[questionId]);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeAQuestion(questionId));
  }


  if (singleQuestion !== null || singleQuestion !== undefined) {
    return (
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>


  );

  }
  return null;
}

export default DeleteSingleQuestion;
