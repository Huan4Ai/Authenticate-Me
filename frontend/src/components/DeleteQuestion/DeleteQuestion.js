import { useDispatch } from "react-redux";
import { removeAQuestion } from "../../store/question";
import "./DeleteQuestion.css"

function DeleteSingleQuestion({ singleQuestion, onClose }) {
  const dispatch = useDispatch();
  const questionId = singleQuestion.id;


  const handleDelete = (e) => {
    onClose();
    dispatch(removeAQuestion(questionId));
  }

  const handleCancelClick = (e) => {
    e.preventDefault();
    onClose();
  };


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

export default DeleteSingleQuestion;
