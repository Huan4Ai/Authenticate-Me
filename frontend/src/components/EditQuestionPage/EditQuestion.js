import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editAQuestion } from "../../store/question";

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
      // hideForm();
    }
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    // hideForm();
  };

  if (singleQuestion !== null || singleQuestion !== undefined) {
    return (
      <div>
        <h2>Edit a question about dogs</h2>
        <form onSubmit={handleEdit}>
          <div>
            <label htmlFor='title'>Title:</label>
            <input id='title' type='text' onChange={(e) => setTitle(e.target.value)} value={title} required />
          </div>
          <div>
            <label htmlFor='description'>Description:</label>
            <textarea id='description' type='text' onChange={(e) => setDescription(e.target.value)} value={description} required />
          </div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancelClick}>Cancel</button>
        </form>
      </div>

    );
  }

  return null;

  }




export default EditSingleQuestion;
