import { useDispatch } from "react-redux";
import { removeAQuestion } from "../../store/question";
import "./DeleteQuestion.css"

function DeleteSingleQuestion({ singleQuestion, onClose }) {
  const dispatch = useDispatch();
  const questionId = singleQuestion.id;


  const handleDelete = (e) => {
    e.preventDefault();
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
          <h2 id="deleteQuestionHeader">Are you sure you want to delete this question?</h2>
        </div>
        <div className="deleteQuestionButtons">
          <button type="button" onClick={handleCancelClick} id="cancelDeleteButton">Cancel</button>
          <button type="submit" id="deleteButton">Delete</button>
        </div>
      </form>
    </div>
  );


}

export default DeleteSingleQuestion;
