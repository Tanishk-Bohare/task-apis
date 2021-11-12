const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' })

const users = require('./api/routes/users')
const images = require('./api/routes/images')
// const upload = require('./config/multer')

// const multer = require('multer')
// const path = require('path')

// const fileStorageEngine = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "./images")
//     },
//     filename: (req, file, cb) => {
//         const _id = req.body.id;
//         cb(null, _id + path.extname(file.originalname) )
//     }
// })

// const upload = multer({storage: fileStorageEngine})

connectDB()

const app= express()

app.use(express.json())

app.use('/api/v1/', users)

// define image api
app.use("/api/v1/", images)

const PORT= process.env.PORT || 5000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))