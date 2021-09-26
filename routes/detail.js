const express = require("express");
const router = express.Router();
const detailController = require("../controllers/detail-controller");
const { Token } = require("../helpers");

const token = new Token();

router.post(
  "/",
  detailController.createDetail
);




module.exports = router;
