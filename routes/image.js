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

router.patch(
    "/finish",
    upload.single("picture"),
    imageController.imageUpload2
);


module.exports = router;
