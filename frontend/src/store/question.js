import { csrfFetch } from "./csrf";

const LOAD = 'questions/LOAD';
const ADD_ONE = 'questions/ADD_ONE'


const load = list => ({
  type: LOAD,
  list,
});

const addOneQuestion = ({
  type: ADD_ONE,
  question,
});

export const getQuestion = () => async dispatch => {
  const response = await fetch('/api/questions');

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }

};

export const getSingleQuestion = (questionId) => async dispatch => {
  const response = await fetch(`/api/questions/${questionId}`);

  if (response.ok) {
    const question = await response.json();
    dispatch(addOneQuestion(question));
  }

};
