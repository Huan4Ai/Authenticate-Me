import { useDispatch } from "react-redux";
import { deleteAnswer } from "../../store/answer";
import "./DeleteAnswer.css"

function DeleteAnswer({ singleAnswer, onClose }) {
  const dispatch = useDispatch();
  const answerId = singleAnswer.id;

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteAnswer(answerId));
  }

  const handleCancelClick = (e) => {
    e.preventDefault();
    onClose();
  };

  return (

    <div className="deleteAnswerContainer">
      <form onSubmit={handleDelete}>
        <div>
          <h2 id="deleteAnswerHeader">Are you sure you want to delete this answer?</h2>
        </div>
        <div className="deleteAnswerButtons">
          <button type="button" onClick={handleCancelClick} id="cancelDeleteButton">Cancel</button>
          <button type="submit" id="deleteButton">Delete</button>
        </div>
      </form>
    </div>

  );


}

export default DeleteAnswer;
