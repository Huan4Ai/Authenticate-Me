import { useDispatch, useSelector } from "react-redux";
import { deleteAnswer } from "../../store/answer";
import { useHistory } from "react-router";
import "./DeleteAnswer.css"

function DeleteAnswer({ singleAnswer, onClose }) {
  const dispatch = useDispatch();
  const answerId = singleAnswer.id;

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteAnswer(answerId));
  }
  return (

    <form onSubmit={handleDelete}>
      <button type="submit" className="deleteButtonOnAnswer">Delete</button>
    </form>

  );



}

export default DeleteAnswer;
