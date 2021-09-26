const MaleQuestionService = require("../services/male-question-service");
const FemaleQuestionService = require("../services/female-question-service");
const { Response, Token } = require("../helpers");
const { v4: uuidv4 } = require("uuid");

const malequestionService = new MaleQuestionService();
const femalequestionService = new FemaleQuestionService();


exports.createMaleQuestion  = async (req, res) => {
  try {
    const { name, count, } = req.body;

    const question = await malequestionService.createQuestion(req.body);

    const response = new Response(
      true,
      200,
      "Question created successfully",
      question
    );
    return res.status(response.code).json(response);

    
  } catch (err) {
    console.log(err);
    const response = new Response(false, 500, "Server Error", err);
    return res.status(response.code).json(response);
  }
};

exports.createFemaleQuestion  = async (req, res) => {
  try {
    const { name, count, } = req.body;

    const question = await femalequestionService.createQuestion(req.body);

    const response = new Response(
      true,
      200,
      "Question created successfully",
      question
    );
    return res.status(response.code).json(response);

    
  } catch (err) {
    console.log(err);
    const response = new Response(false, 500, "Server Error", err);
    return res.status(response.code).json(response);
  }
};

exports.updateMaleQuestionCount = async (req, res) => {
  try {
    const questionId = req.params.questionId;

    const currquestion = await malequestionService.getQuestion(questionId);
    const currcount = currquestion.count
    const newcount = currcount + 1
    
    req.body.count = newcount

    const question = await malequestionService.updateQuestion(questionId, req.body);

    const response = new Response(true, 200, "count updated successfully", question);
    res.status(response.code).json(response);
  } catch (err) {
    const response = new Response(false, 500, "Server Error", err);
    res.status(response.code).json(response);
  }
};

exports.updateMaleQuestionAnswerCount = async (req, res) => {
  try {
    const questionId = req.params.questionId;
    let currquestion;
    let question;
    let newcount;

    if (req.body.option1){
      currquestion = await malequestionService.getQuestion(questionId);
      newcount = currquestion.option1 + 1

      req.body.option1 = newcount
      question = await malequestionService.updateQuestion(questionId, req.body);
    }

    if (req.body.option2){
      currquestion = await malequestionService.getQuestion(questionId);
      newcount = currquestion.option2 + 1

      req.body.option2 = newcount
      question = await malequestionService.updateQuestion(questionId, req.body);
    }

    if (req.body.option3){
      currquestion = await malequestionService.getQuestion(questionId);
      newcount = currquestion.option3 + 1

      req.body.option3 = newcount
      question = await malequestionService.updateQuestion(questionId, req.body);
    }

    if (req.body.option4){
      currquestion = await malequestionService.getQuestion(questionId);
      newcount = currquestion.option4 + 1

      req.body.option4 = newcount
      question = await malequestionService.updateQuestion(questionId, req.body);
    }

    if (req.body.option5){
      currquestion = await malequestionService.getQuestion(questionId);
      newcount = currquestion.option5 + 1

      req.body.option5 = newcount
      question = await malequestionService.updateQuestion(questionId, req.body);
    }

    const response = new Response(true, 200, "answer count updated successfully", question);
    res.status(response.code).json(response);
  } catch (err) {
    const response = new Response(false, 500, "Server Error", err);
    res.status(response.code).json(response);
  }
};

exports.updateFemaleQuestionCount = async (req, res) => {
  try {
    const questionId = req.params.questionId;

    const currquestion = await femalequestionService.getQuestion(questionId);
    const currcount = currquestion.count
    const newcount = currcount + 1
    
    req.body.count = newcount

    const question = await femalequestionService.updateQuestion(questionId, req.body);

    const response = new Response(true, 200, "count updated successfully", question);
    res.status(response.code).json(response);
  } catch (err) {
    const response = new Response(false, 500, "Server Error", err);
    res.status(response.code).json(response);
  }
};

exports.updateFemaleQuestionAnswerCount = async (req, res) => {
  try {
    const questionId = req.params.questionId;
    let currquestion;
    let question;
    let newcount;

    if (req.body.option1){
      currquestion = await femalequestionService.getQuestion(questionId);
      newcount = currquestion.option1 + 1

      req.body.option1 = newcount
      question = await femalequestionService.updateQuestion(questionId, req.body);
    }

    if (req.body.option2){
      currquestion = await femalequestionService.getQuestion(questionId);
      newcount = currquestion.option2 + 1

      req.body.option2 = newcount
      question = await femalequestionService.updateQuestion(questionId, req.body);
    }

    if (req.body.option3){
      currquestion = await femalequestionService.getQuestion(questionId);
      newcount = currquestion.option3 + 1

      req.body.option3 = newcount
      question = await femalequestionService.updateQuestion(questionId, req.body);
    }

    if (req.body.option4){
      currquestion = await femalequestionService.getQuestion(questionId);
      newcount = currquestion.option4 + 1

      req.body.option4 = newcount
      question = await femalequestionService.updateQuestion(questionId, req.body);
    }

    if (req.body.option5){
      currquestion = await femalequestionService.getQuestion(questionId);
      newcount = currquestion.option5 + 1

      req.body.option5 = newcount
      question = await femalequestionService.updateQuestion(questionId, req.body);
    }

    const response = new Response(true, 200, "answer count updated successfully", question);
    res.status(response.code).json(response);
  } catch (err) {
    const response = new Response(false, 500, "Server Error", err);
    res.status(response.code).json(response);
  }
};

