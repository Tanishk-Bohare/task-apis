const multer = require('multer')
const path = require('path')

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images")
    },
    filename: (req, file, cb) => {
        const _id = req.body.id;
        cb(null, _id + path.extname(file.originalname) )
    }
})

const upload = multer({storage: fileStorageEngine})

module.exports = upload