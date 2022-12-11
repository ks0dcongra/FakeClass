const express = require('express')
const router = express.Router()
// 載入 controller
const fakeclassController = require('../controllers/fake-class-controller')
// 載入 modules
const admin = require('./modules/admin')
const userController = require('../controllers/user-controller') //新增Bcrypt.js

router.use('/admin', admin)
router.get('/signup', userController.signUpPage) //新增Bcrypt.js
router.post('/signup', userController.signUp) //新增Bcrypt.js
router.get('/fake-class', fakeclassController.getfakeClass)
router.get('/', (req, res) => res.render('fake-class'))

module.exports = router

var appe = "123";
