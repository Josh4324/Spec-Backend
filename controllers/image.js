
const { Response, Token } = require("../helpers");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});



exports.imageUpload = async (req, res) => {
    try {
        cloudinary.uploader.upload(req.file.path, async (error, result) => {
            if (result) {
                let picture = result.secure_url;

                const response = new Response(
                    true,
                    200,
                    "success",
                    picture
                );
                res.status(response.code).json(response);
            }
        });
    } catch (err) {
        console.log(err)
        const response = new Response(
            false,
            500,
            "An error ocurred, please try again",
            err
        );
        res.status(response.code).json(response);
    }
};

