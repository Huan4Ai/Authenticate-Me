import { csrfFetch } from "./csrf";

const LOAD = 'questions/LOAD';
const ADD_ONE = 'questions/ADD_ONE'
const EDIT = 'question/edit'
const REMOVE_QUESTION = 'question/delete'


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

const removeQuestion = questionId => ({
  type: REMOVE_QUESTION,
  payload: questionId
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
    dispatch(addOneQuestion(question.specificQuestion)); // it has to be the same as the backend res.json()
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
    dispatch(editOneQuestion(question));
    return question;
  }

};

export const removeAQuestion = (questionId) => async dispatch => {
  const response = await csrfFetch(`/api/questions/${questionId}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(removeQuestion(data.questionId)); // key name same as backend route json

    return data;
  }

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
      const newState1 = { ...state };
      delete newState1[action.questionId];
      return newState1;
    default:
      return state;

  };


};

export default questionReducer;
