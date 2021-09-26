const MaleQuestion = require("../models/index")['MaleQuestion'];
const { Op } = require("sequelize");

module.exports = class MaleQuestionService {
   
    async createQuestion(question){
        return await MaleQuestion.create(question);
    }

    async getQuestion(id){
        return await MaleQuestion.findOne({
            where: {
                id
            }
        });
    }

    async updateQuestion(id, payload){
        return await MaleQuestion.update(payload, {
            where: {
                id
            }
        })
    }

}