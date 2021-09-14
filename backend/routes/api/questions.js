const express = require('express');
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const {User, Question} = require('../../db/models')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const validationResult = require('express-validator');

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

router.post('/', csrfProtection, requireAuth, asyncHandler(async (req, res, next) => {

  const { title, description } = req.body;
  const questionErrors = validationResult(req);

  if (questionErrors.isEmpty()) {
    const createQuestion = await Question.create({
      ownerId: req.session.auth.id,
      title,
      description
    });
    res.redirect('/questions')
  } else {
    const errors = questionErrors.array().map(error => error.msg);
    res.json({
      errors
    });
  };

}),
);


router.put('/:id(\\d+)', csrfProtection, requireAuth, asyncHandler(async (req, res, next) => {

  const question = await Question.findByPk(req.params.id);
  const { title, description } = req.body;

  if (question && (req.session.auth.id === question.ownerId)) {
    question.update({
      title,
      description
    });
    res.redirect('/questions/:id')
  } else if (req.session.auth.id !== question.ownerId) {
    next(new Error("You are not authorized to update that"));
  } else {
    next(new Error("Question not found"));
  }


}));

router.delete('/questions/:id(\\d+)', requireAuth, asyncHandler(async(req, res, next) => {

    const question = await Question.findByPk(req.params.id);
    const sessionUserId = req.session.auth.id;

    if (question && (sessionUserId === question.ownerId)) {
        await question.destroy();
        res.json({'Message': 'The question has been deleted'});
    } else if (!question) {
        next(new Error('Question not found'));
    } else if (sessionUserId !== question.ownerId) {
        next(new Error('You are not authorized to delete that. You are not that user.'));
    }
}));
