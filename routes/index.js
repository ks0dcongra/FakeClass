const express = require('express')
const router = express.Router()
// 載入 modules
const admin = require('./modules/admin')
// 載入 controller
const fakeclassController = require('../controllers/fake-class-controller')
const userController = require('../controllers/user-controller')

router.use('/admin', admin)
router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)
router.get('/fake-class', fakeclassController.getfakeClass)
router.use('/', (req, res) => res.render('fake-class'))

module.exports = router
