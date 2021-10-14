import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteAnswer } from "../../store/answer";
import { useHistory } from "react-router";

function DeleteAnswer() {
  const dispatch = useDispatch();
  const {answerId} = useParams();
  const singleAnswer = useSelector(state => state.answer[answerId]);
  const history = useHistory();

  return null;

}

export default DeleteAnswer;
