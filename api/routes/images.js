const express = require('express');
const router = express();
const imageController = require("../controllers/image.controller")
const upload = require('../../config/multer')

router.post('/image', upload.single('image'), imageController.sendImage);

module.exports = router;
