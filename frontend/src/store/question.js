import { csrfFetch } from "./csrf";

const LOAD = 'questions/LOAD';
const ADD_ONE = 'questions/ADD_ONE'
const EDIT = 'questions/:id'
const REMOVE_QUESTION = 'questions/:id'


const load = list => ({
  type: LOAD,
  payload: list
});

const addOneQuestion = question => ({
  type: ADD_ONE,
  payload: question
});

const editOneQuestion = editQuestion => ({
  type: EDIT,
  payload: editQuestion
});

const removeQuestion = () => ({
  type:REMOVE_QUESTION,
})

export const getQuestion = () => async dispatch => {
  const response = await csrfFetch('/api/questions');

  if (response.ok) {
    const list = await response.json();
    // console.log(list);
    dispatch(load(list));
  }

};

export const getSingleQuestion = (questionId) => async dispatch => {
  const response = await csrfFetch(`/api/questions/${questionId}`);

  if (response.ok) {
    const question = await response.json();
    console.log(question);
    dispatch(addOneQuestion(question));
  }

};
export const createAQuestion = (questionData) => async dispatch => {
  const response = await csrfFetch(`/api/questions`, {
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
  const response = await csrfFetch(`/api/questions/${questionData.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(questionData),
  });
  if (response.ok) {
    const question = await response.json();
    dispatch(editOneQuestion(editAQuestion));
    return question;
  }

};

export const removeAQuestion = (questionData) => async dispatch => {
  const response = await csrfFetch(`/api/questions/${questionData.id}`, {
    method: 'DELETE',
  });
  dispatch(removeQuestion());
  return response;
};

const ininitalState = {};

const questionReducer = (state = ininitalState, action) => {

  let newState, newQuestion;
  switch (action.type) {
    case (LOAD):
      newState = Object.assign({}, state);
      action.payload["allQuestions"].forEach((question) => {
        newState[question.id] = question;
      })
      return newState;
    case (ADD_ONE):
      newState = Object.assign({}, state);
      newQuestion = action.payload;
      newState[newQuestion.id] = newQuestion;
      return newState;
    case (EDIT):/*  */
      newState = Object.assign({}, state);
      newQuestion = action.payload;
      newState[newQuestion.id] = newQuestion;
      return newState;
    case (REMOVE_QUESTION):
      newState = Object.assign({}, state);
      action.payload.forEach((question) => {
        newState[question.id] = question;
      })
      return newState;
    default:
      return state;

  };


};

export default questionReducer;
