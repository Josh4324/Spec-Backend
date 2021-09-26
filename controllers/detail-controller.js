const DetailService = require("../services/detail-service");
const { Response, Token } = require("../helpers");
const { v4: uuidv4 } = require("uuid");

const detailService = new DetailService();


exports.createDetail  = async (req, res) => {
  try {
    const { social, number, } = req.body;

    const detail = await detailService.createDetail(req.body);

    const response = new Response(
      true,
      200,
      "Question created successfully",
      detail
    );
    return res.status(response.code).json(response);

    
  } catch (err) {
    console.log(err);
    const response = new Response(false, 500, "Server Error", err);
    return res.status(response.code).json(response);
  }
};


