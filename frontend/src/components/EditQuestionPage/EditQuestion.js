import { useState } from "react";
import { useDispatch } from "react-redux";
import { editAQuestion } from "../../store/question";
import "./EditQuestionPage.css";
import { getQuestion } from "../../store/question";

function EditSingleQuestion({ singleQuestion, onClose }) {
  const dispatch = useDispatch();
  const questionId = singleQuestion.id;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // console.log(questionId)


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
    <div className="editQuestionContainer">
      <h3>Edit a question about dogs</h3>
      <form onSubmit={handleEdit}>
        <div>
          <label htmlFor='title'>Title:</label>
        </div>
        <div>
          <input id='title' type='text' onChange={(e) => setTitle(e.target.value)} value={title} required className="inputField" />
        </div>
        <div>
          <label htmlFor='description'>Description:</label>
        </div>
        <div>
          <textarea id='description' type='text' onChange={(e) => setDescription(e.target.value)} value={description} required className="inputField" />
        </div>
        <div>
          <button type="submit" className="submitButton">Submit</button>
          <button type="button" onClick={handleCancelClick} className="cancelButton">Cancel</button>
        </div>

      </form>
    </div>

  );



}




export default EditSingleQuestion;
