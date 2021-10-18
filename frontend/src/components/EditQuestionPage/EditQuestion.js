import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editAQuestion } from "../../store/question";
import "./EditQuestionPage.css"
function EditSingleQuestion({ setShowModal }) {
  const dispatch = useDispatch();
  const { questionId } = useParams();
  const history = useHistory();
  const singleQuestion = useSelector(state => state.question[questionId]);

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
      setShowModal(false);
      history.push(`/questions/${questionId}`);
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setShowModal(false);
    history.push(`/questions/${questionId}`);
  };

  if (singleQuestion !== null || singleQuestion !== undefined) {
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

  return null;

  }




export default EditSingleQuestion;
