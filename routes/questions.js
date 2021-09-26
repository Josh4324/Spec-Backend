const express = require("express");
const router = express.Router();
const questionController = require("../controllers/question-controller");
const { Token } = require("../helpers");

const token = new Token();

router.post(
  "/malequestion",
  questionController.createMaleQuestion
);

router.post(
    "/femalequestion",
    questionController.createFemaleQuestion
);

router.patch(
    "/malequestion/:questionId",
    questionController.updateMaleQuestionCount
);

router.patch(
    "/malequestion/:questionId/answers",
    questionController.updateMaleQuestionAnswerCount
);

router.patch(
    "/femalequestion/:questionId",
    questionController.updateFemaleQuestionCount
);

router.patch(
    "/femalequestion/:questionId/answers",
    questionController.updateFemaleQuestionAnswerCount
);




module.exports = router;
