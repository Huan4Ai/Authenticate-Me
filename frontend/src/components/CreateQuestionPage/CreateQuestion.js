import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createAQuestion } from "../../store/question";


const  CreateSingleQuestion = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const ownerId = useSelector((state) => state.session.user.id)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const reset = () => {
    setTitle("");
    setDescription("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ownerId,
      title,
      description
    };

    let createdQuestion = await dispatch(createAQuestion(payload));
    if (createdQuestion) {
      setShowModal(false);
      history.push(`/questions/${createdQuestion.id}`);
    }
    reset();
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setShowModal(false);
    history.push(`/`);
  };

  return (
    <div>
      <h4>Create a question about dogs</h4>
      <div className="createQuestionContainer">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='title'>Title:</label>
          </div>
          <div>
            <input id='title' type='text' onChange={(e) => setTitle(e.target.value)} value={title} required className="inputField"/>
          </div>
          <div>
            <label htmlFor='description'>Description:</label>
          </div>
          <div>
            <textarea id='description' type='text' onChange={(e) => setDescription(e.target.value)} value={description} className="inputField" required/>
          </div>
          <div>
            <button type="submit" className="submitButton">Submit</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
          </div>
        </form>
      </div>
    </div>

  );



}

export default CreateSingleQuestion
