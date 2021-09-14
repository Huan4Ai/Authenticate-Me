import { csrfFetch } from "./csrf";

const LOAD = 'questions/LOAD';
const ADD_ONE = 'questions/ADD_ONE'


const load = list => ({
  type: LOAD,
  list,
});

const addOneQuestion = question => ({
  type: ADD_ONE,
  question,
});

const removeQuestion = () => ({
  type:REMOVE_QUESTION,
})

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
export const createAQuestion = (questionData) => async dispatch => {
  const response = await fetch(`/api/questions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(questionData),
  });
  if (response.ok) {
    const question = await response.json();
    dispatch(addOneQuestion(question));
    return question;
  }

};

export const editAQuestion = (questionData) => async dispatch => {
  const response = await fetch(`/api/questions/${questionData.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(questionData),
  });
  if (response.ok) {
    const question = await response.json();
    dispatch(addOneQuestion(question));
    return question;
  }

};

export const removeAQuestion = (questionData) => async dispatch => {
  const response = await fetch(`/api/questions/${questionData.id}`, {
    method: 'DELETE',
  });
  dispatch(removeQuestion());
  return response;
};
