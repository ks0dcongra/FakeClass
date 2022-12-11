const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')

router.get('/fake-class', adminController.getfakeClass)
router.use('/', (req, res) => res.render('/admin/fake-class'))

module.exports = router;
