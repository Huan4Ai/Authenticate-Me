import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteAnswer } from "../../store/answer";
import { useHistory } from "react-router";

function DeleteAnswer() {
  const dispatch = useDispatch();
  const {answerId} = useParams();
  const singleAnswer = useSelector(state => state.answer[answerId]);
  const questionId = useSelector(state => state.answer[answerId].questionId)
  const history = useHistory();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteAnswer(answerId));
    history.push(`/questions/${questionId}`);
  }

  if (singleAnswer !== null || singleAnswer !== undefined) {
    return (
        <form onSubmit={handleDelete}>
          <button type="submit">Delete</button>
        </form>
  );

  }
  return null;

}

export default DeleteAnswer;
