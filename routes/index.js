const express = require('express')
const router = express.Router()
// 載入 modules
const admin = require('./modules/admin')
// 載入 controller
const fakeclassController = require('../controllers/fake-class-controller')
const userController = require('../controllers/user-controller')
const { authenticated } = require('../middleware/auth') // 驗證是否登入
const { generalErrorHandler } = require('../middleware/error-handler') // flash-message讓錯誤資訊傳遞下去
const passport = require('../config/passport') // 引入 Passport，需要他幫忙做驗證

router.get('/signin', userController.signInPage)
router.post('/signin', passport.authenticate('local', { failureRedirect: '/signin', failureFlash: true }), userController.signIn) // 驗證第三方登入工具

router.use('/admin', admin)
router.get('/signup', userController.signUpPage)
router.post('/signup', userController.signUp)
router.get('/logout', userController.logout)
router.get('/fake-class', authenticated, fakeclassController.getfakeClass)
router.use('/', (req, res) => res.render('fake-class'))
router.use('/', generalErrorHandler) // flash-message讓錯誤資訊傳遞下去

module.exports = router
