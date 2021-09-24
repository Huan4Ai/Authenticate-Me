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

router.post('/', requireAuth, asyncHandler(async (req, res, next) => {

  const { title, description } = req.body;
  const newQuestion = await Question.create({
    ownerId: req.user.id,
    title,
    description
  });
  res.json(newQuestion);
  // if (questionErrors.isEmpty()) {
  //   const createQuestion = await Question.create({
  //     ownerId: req.user.id,
  //     title,
  //     description
  //   });
  //   res.redirect('/questions')
  // } else {
  //   const errors = questionErrors.array().map(error => error.msg);
  //   res.json({
  //     errors
  //   });
  // };

}),
);


router.put('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {

  const question = await Question.findByPk(req.params.id);
  const { title, description } = req.body;

  if (question && (req.user.id === question.ownerId)) {
    question.update({
      title,
      description
    });
    res.json(question);
    res.redirect('/questions/:id');
  } else if (req.user.id !== question.ownerId) {
    next(new Error("You are not authorized to update that"));
  } else {
    next(new Error("Question not found"));
  }


}));

router.delete('/:id(\\d+)', requireAuth, asyncHandler(async(req, res, next) => {
    const questionId = req.params.id
    const question = await Question.findByPk(req.params.id);
    const currentUserId = req.user.id;

  if (question && (currentUserId === question.ownerId)) {
    await question.destroy();
    // const remainingQuestions = await Question.findAll( {
    //     include: User
    //   })
    // return res.json({remainingQuestions});
    return res.json({ questionId })
    } else if (!question) {
        next(new Error('Question not found'));
    } else if (currentUserId !== question.ownerId) {
        next(new Error('You are not authorized to delete that. You are not that user.'));
    }
}));

module.exports = router;

// const { check, validationResult } = require('express-validator');
// const questionValidators = [
//   check('title')
//     .exists({ checkFalsy: true })
//     .withMessage('Please provide a value for question')
//     .isLength({ max: 1000 })
//     .withMessage('User Name must not be more than 50 characters long')
//     .custom((value) => {
//       return db.User.findOne({ where: { user_name: value } })
//         .then((user) => {
//           if (user) {
//             return Promise.reject('The provided user name is already in use by another account');
//           }
//         });
//     })]
//     /////POST NEW QUESTION/////
// const questionValidator = [
//   check('title')
//     .exists({ checkFalsy: true })
//     .withMessage('Please provide a value for Title')
//     .isLength({ max: 1000 })
//     .withMessage('Title must not be more than 1000 characters long')
// ]

// router.post('/questions', requireAuth, csrfProtection, questionValidator, asyncHandler(async(req,res)=>{
//   const {title}=req.body;
//   const validatorErrors = validationResult(req);

//   if (validatorErrors.isEmpty()) {
//     await db.Question.create({
//       title,
//       user_id:res.locals.user.id
//     })
//     res.redirect('/');
//   } else {
//     const errors = validatorErrors.array().map((error) => error.msg);
//     res.render('create-question', {
//       errors,
//       token: req.csrfToken(),
//     });
//   }
// }));
