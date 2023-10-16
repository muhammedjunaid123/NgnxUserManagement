

const express = require('express')
const multer = require('multer')
const userRoute = express()
const upload = multer({dest : './file'})    

const userController = require('../controllers/users.controller')

userRoute.post('/register', userController.register)   

userRoute.post('/login' , userController.login)

userRoute.get('/user' , userController.getUser)

userRoute.post('/image' , upload.single('image') ,  userController.uploadImage)

userRoute.post('/logout' , userController.logout)

module.exports = userRoute