const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const {User, Question} = require('../../db/models')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


//get all questions in the database
router.get('/', asyncHandler(async (req, res) => {
  const allQuestions = await Question.findAll({
    include: User
  });

  return res.json({
    allQuestions,
  });

}),

);

//get a specific question in the database
router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const specificQuestion = await Question.findByPk(req.params.id, {
    include: User
  });

  if (specificQuestion) {
    return res.json({
      specificQuestion
    })
  } else {
    next(new Error("Question not found"));
  };

}),

);

router.post('/', csrf)
