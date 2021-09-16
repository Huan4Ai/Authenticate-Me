import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createAQuestion } from "../../store/question";


function CreateSingleQuestion() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const updateTitle = (e) => 

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Create a question about dogs</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='title'>Title:</label>
          <input id='title' type='text' onChange={(e) => setTitle(e.target.value)} value={title} />
        </div>
        <div>
          <label htmlFor='description'>Description:</label>
          <textarea id='description' type='text' onChange={(e) => setDescription(e.target.value)} value={description} />
        </div>
        <button>Submit</button>
      </form>
    </div>

  );



}

export default CreateSingleQuestion
