import { csrfFetch } from "./csrf";

const LOAD_ANSWERS = 'questions//:id(\\d+)/LOAD_ANSWERS';
const ADD_ONE_ANSWER = 'questions//:id(\\d+)/ADD_ONE_ANSWER'
const EDIT_ANSWER = 'answer/EDIT_ANSWER'
const DELETE_ANSWER = 'answer/DELETE_ANSWER'

export const load_Answers = (allAnswers, questionId) => {
  return {
    type: LOAD_ANSWERS,
    allAnswers,
    questionId
  }

};

export const addOneAnswer = (answer) => {

  return {
    type: ADD_ONE_ANSWER,
    answer
  }

};

export const editOneAnswer = (answer) => {

  return {
    type: EDIT_ANSWER,
    answer
  }

};

export const removeAnswer = (answerId, questionId) => {

  return {
    type: DELETE_ANSWER,
    answerId,
    questionId
  }

};

export const getAnswers = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/questions/${id}/answers`);

  if (response.ok) {
    const allAnswers = await response.json();

    dispatch(load_Answers(allAnswers, id));
  };
};

export const createAnswer = (data, questionId) => async (dispatch) => {
  const response = await csrfFetch(`/api/questions/${questionId}/answers`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    const answer = await response.json();
    dispatch(addOneAnswer(answer));
    return answer;
  }
};

export const updateAnswer = (data) => async (dispatch) => {
  const response = await csrfFetch(`/api/answers/${data.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    const answer = await response.json();
    dispatch(updateAnswer(answer));
    return answer;
  }
};

export const deleteAnswer = (itemId) => async (dispatch) => {
  const response = await csrfFetch(`/api/answers/${itemId}`, {
    method: 'delete'
  });

  if (response.ok) {
    const answer = await response.json();
    dispatch(deleteAnswer(answer.id, answer.questionId));
  }
};


const ininitalState = {};

const answersReducer = (state = ininitalState, action) => {
  switch (action.type) {
    case LOAD_ANSWERS: {
      const newAnswers = {};
      action.allAnswers.forEach((answer) => {
        newAnswers[answer.id] = answer;
      });
      return {
        ...newAnswers
      };
    }
    case ADD_ONE_ANSWER: {
      return {
        ...state,
        [action.answer.id]: action.answer
      };
    }

    case EDIT_ANSWER: {
      return {
        ...state,
        [action.answer.id]: action.answer
      };
    }

    case DELETE_ANSWER: {
      const newState = { ...state };
      delete newState[action.answerId];
      return newState;
    }

    default:
      return state;
  }
};

export default answersReducer;
