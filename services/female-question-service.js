const FemaleQuestion = require("../models/index")['FemaleQuestion'];
const { Op } = require("sequelize");

module.exports = class FemaleQuestionService {
   
    async createQuestion(question){
        return await FemaleQuestion.create(question);
    }

    async getQuestion(id){
        return await FemaleQuestion.findOne({
            where: {
                id
            }
        });
    }

    async updateQuestion(id, payload){
        return await FemaleQuestion.update(payload, {
            where: {
                id
            }
        })
    }

}