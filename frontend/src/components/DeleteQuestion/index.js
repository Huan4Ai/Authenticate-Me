import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeAQuestion } from "../../store/question";
import { useHistory } from "react-router-dom";

function DeleteSingleQuestion() {
  const dispatch = useDispatch();
  const { questionId } = useParams();
  const singleQuestion = useSelector(state => state.question[questionId]);
  const history = useHistory();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeAQuestion(questionId));
    history.push("/")
  }


  if (singleQuestion !== null || singleQuestion !== undefined) {
    return (
        <form onSubmit={handleDelete}>
          <button type="submit">Delete</button>
        </form>


  );

  }
  return null;
}

export default DeleteSingleQuestion;
