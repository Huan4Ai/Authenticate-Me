import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeAQuestion } from "../../store/question";
import { useHistory } from "react-router-dom";
import "./DeleteQuestion.css"

function DeleteSingleQuestion({ setShowModal }) {
  const dispatch = useDispatch();
  const { questionId } = useParams();
  const singleQuestion = useSelector(state => state.question[questionId]);
  const history = useHistory();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(removeAQuestion(questionId));
    setShowModal(false);
    history.push("/")
  }

  const handleCancelClick = (e) => {
    e.preventDefault();
    setShowModal(false);
    history.push(`/questions/${questionId}`);
  };

  if (singleQuestion !== null || singleQuestion !== undefined) {
    return (
      <div className="deleteQuestionContainer">
        <form onSubmit={handleDelete}>
          <div>
            <h3>Delete a question about dogs</h3>
            <p>Are you sure you want to delete this question?</p>
          </div>
          <div>
            <button type="submit" className="deleteButton">Delete</button>
            <button type="button" onClick={handleCancelClick} className="cancelButton">Cancel</button>
          </div>
        </form>
      </div>
  );

  }
  return null;
}

export default DeleteSingleQuestion;
