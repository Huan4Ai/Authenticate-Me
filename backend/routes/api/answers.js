const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { User, Question, Answer } = require('../../db/models');


router.get('/', asyncHandler(async (req, res) => {
  const answers = await Answer.findAll();
  res.json(answers);
})

)

module.exports = router;
