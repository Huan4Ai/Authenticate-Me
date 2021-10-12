const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');


const { User, Question, Answer } = require('../../db/models');


// Showing all answers for a specific question
router.get('/:id(\\d+)/answers', asyncHandler(async (req, res, next) => {
  const allAnswers = await Answer.findAll({
    // include: Question,
    where: { questionId: req.params.id }
  });

  return res.json(
    allAnswers,
  );


}));

// Adding an answer to a specific question
router.post('/:id(\\d+)/answers', requireAuth, asyncHandler(async (req, res, next) => {

  const { answer } = req.body;
  const newAnswer = await Answer.create({
    userId: req.user.id,
    questionId: req.params.id,
    answer
  });
  res.json(newAnswer);

}));




//Get an answer with the given id
router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  const singleAnswer = await Answer.findByPk(req.params.id)
  if (singleAnswer) {
    return res.json(
      singleAnswer
    )
  } else {
    next(new Error("Question not found"));
  };

}),

);

// Edit an answer with the given id
router.put('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {

  const answerToChange = await Answer.findByPk(req.params.id);
  const { answer } = req.body;

  if (answerToChange && (req.user.id === answerToChange.userId)) {
    answerToChange.update({
      answer
    });
    res.json(answerToChange);
    res.redirect('/');
  } else if (req.user.id !== answerToChange.userId) {
    next(new Error("You are not authorized to update that"));
  } else {
    next(new Error("Question not found"));
  }


}));

// delete an answer with the given id
router.delete('/:id(\\d+)', requireAuth, asyncHandler(async(req, res, next) => {
    const answerId = req.params.id
    const answerToDelete = await Answer.findByPk(req.params.id);
    const currentUserId = req.user.id;

  if (answerToDelete && (currentUserId === answerToDelete.userId)) {
    await answerToDelete.destroy();
    // const remainingQuestions = await Question.findAll( {
    //     include: User
    //   })
    // return res.json({remainingQuestions});
    return res.json({ answerId })
    } else if (!answerToDelete) {
        next(new Error('Answer not found'));
    } else if (currentUserId !== answerToDelete.userId) {
        next(new Error('You are not authorized to delete that. You are not that user.'));
    }
}));



module.exports = router;
