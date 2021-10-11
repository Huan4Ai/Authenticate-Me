const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { User, Question, Answer } = require('../../db/models');


router.get('/', asyncHandler(async (req, res) => {
  const answers = await Answer.findAll();
  res.json(answers);
})

);

// router.post('/', requireAuth, asyncHandler(async (req, res, next) => {

//   const { answer } = req.body;
//   const newAnswer = await Answer.create({
//     ownerId: req.user.id,
//     questionId: ???
//     answer
//   });
//   res.json(newAnswer);


// router.post('/:id(\\d+)/answers', requireAuth, asyncHandler(async (req, res, next) => {

//   const { answer } = req.body;
//   const newAnswer = await Answer.create({
//     ownerId: req.user.id,
//     questionId: req.params.id,
//     answer
//   });
//   res.json(newAnswer);



module.exports = router;
