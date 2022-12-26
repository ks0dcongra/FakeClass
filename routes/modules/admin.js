const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')
const { authenticatedAdmin } = require('../../middleware/auth') // 驗證是否為管理員

router.get('/fake-class', authenticatedAdmin, adminController.getfakeClass)
router.use('/', (req, res) => res.render('/admin/fake-class'))

module.exports = router
