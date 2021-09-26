const Detail = require("../models/index")['Detail'];
const { Op } = require("sequelize");


module.exports = class DetailService {
   
    async createDetail(detail){
        return await Detail.create(detail);
    }

    

}