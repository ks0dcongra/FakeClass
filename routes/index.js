const express = require('express')

const router = express.Router()

// 載入controller
const fakeclassController = require('../controllers/fake-class-controller')

router.get('/fake-class', fakeclassController.getfakeClass)

router.use('/', (req, res) => res.render('fake-class'))

module.exports = router
