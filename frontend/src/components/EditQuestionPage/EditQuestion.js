import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { editAQuestion } from "../../store/question";
import "./EditQuestionPage.css";
import { getQuestion } from "../../store/question";

function EditSingleQuestion({ singleQuestion, onClose }) {
  const dispatch = useDispatch();
  const questionId = singleQuestion.id;
  const username = useSelector(state => state?.session?.user?.username);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const handleEdit = async (e) => {
    e.preventDefault();
    const payload = {
      id: questionId,
      title,
      description
    };

    let editedQuestion = await dispatch(editAQuestion(payload));
    if (editedQuestion) {
      onClose();
      dispatch(getQuestion());
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <form className="editQuestionContainer" onSubmit={handleEdit}>
      <p id="usernameTitle">{username}</p>
      <div>
        <input id='title' placeholder={`Start your question with "What", "How", "Why", etc.`} type='text' onChange={(e) => setTitle(e.target.value)} value={title} className="editQuestionInput" />
      </div>
      <div className="editQuestionButtons">
        <button type="button" onClick={handleCancelClick} id="cancelButtonModal">Cancel</button>
        <button type="submit" id="submitButtonModal">Submit</button>
      </div>

    </form>

  );



}




export default EditSingleQuestion;
