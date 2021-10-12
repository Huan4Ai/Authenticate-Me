import { csrfFetch } from "./csrf";

const LOAD_ANSWERS = 'questions//:id(\\d+)/LOAD_ANSWERS';
const ADD_ONE_ANSWER = 'questions//:id(\\d+)/ADD_ONE_ANSWER'
const EDIT_ANSWER = 'answer/EDIT_ANSWER'
const DELETE_ANSWER = 'answer/DELETE_ANSWER'

const load_Answers = answers => ({
  type: LOAD_ANSWERS,
  payload: answers
});

const addOneAnswer = answer => ({
  type: ADD_ONE,
  payload: answer
});

const editOneAnswer = editAnswer => ({
  type: EDIT,
  payload: editAnswer
});

const removeAnswer = deleteAnswer => ({
  type: REMOVE_ANSWER,
  payload: deleteAnswer
})

