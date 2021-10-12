import { csrfFetch } from "./csrf";

const LOAD_ANSWERS = 'questions//:id(\\d+)/LOAD_ANSWERS';
const ADD_ONE_ANSWER = 'questions//:id(\\d+)/ADD_ONE_ANSWER'
const EDIT_ANSWER = 'answer/EDIT_ANSWER'
const DELETE_ANSWER = 'answer/DELETE_ANSWER'

const load_Answers = (allAnswers, questionId) => {
  return {
    type: LOAD_ANSWERS,
    allAnswers,
    questionId
  }

};

const addOneAnswer = (singleAnswer, questionId) => {

  return {
    type: ADD_ONE_ANSWER,
    singleAnswer,
    questionId
  }

};

const editOneAnswer = (editAnswer) => {

  return {
    type: EDIT_ANSWER,
    editAnswer
  }

};

const removeAnswer = (deleteAnswer) => {

  return {
    type: DELETE_ANSWER,
    deleteAnswer
  }

};

export const getAnswers = (id) => async (dispatch) => {
  const response = await fetch(`/api/questions/${id}/answers`);

  if (response.ok) {
    const allAnswers = await response.json();
    dispatch(load_Answers(allAnswers, id));
  };
};
