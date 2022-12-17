const express = require('express')
const router = express.Router()
// 載入 controller
const fakeclassController = require('../controllers/fake-class-controller')
// 載入 modules
const admin = require('./modules/admin')

router.use('/admin', admin)
router.get('/fake-class', fakeclassController.getfakeClass)
router.use('/', (req, res) => res.render('fake-class'))

module.exports = router
