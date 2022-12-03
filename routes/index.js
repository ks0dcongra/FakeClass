const express = require('express')

const router = express.Router()

// 載入controller
const fakeclassController = require('../controller/fake-class-contoller')

// 刪除
router.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = router
