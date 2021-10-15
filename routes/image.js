const express = require("express");
const router = express.Router();
const { Token } = require("../helpers");
const imageController = require("../controllers/image");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const token = new Token();

router.patch(
    "/",
    upload.single("picture"),
    imageController.imageUpload
);

module.exports = router;
