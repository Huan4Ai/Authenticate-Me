import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createAQuestion } from "../../store/question";
import { getQuestion } from "../../store/question";


const CreateSingleQuestion = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const ownerId = useSelector((state) => state?.session?.user?.id);
  const username = useSelector(state => state?.session?.user?.username);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


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
      dispatch(getQuestion());
    }

  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    setShowModal(false);
    history.push(`/`);
  };

  return (
    <form className="createQuestionContainer" onSubmit={handleSubmit}>
      <p id="usernameTitle">{username}</p>
      <div>
        <input id='title' placeholder={`Start your question with "What", "How", "Why", etc.`} type='text' onChange={(e) => setTitle(e.target.value)} value={title} className="createQuestionInput" />
      </div>
      <div className="addQuestionButtons">
        <button type="button" onClick={handleCancelClick} id="cancelButtonModal">Cancel</button>
        <button type="submit" id="submitButtonModal">Submit</button>
      </div>
    </form>

  );



}

export default CreateSingleQuestion
