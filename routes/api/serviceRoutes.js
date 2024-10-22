const router = require('express').Router()
const serviceController = require('../../controllers/serviceController')

router.route('/create')
.post(serviceController.create)

router.route('/read')
.get(serviceController.read)

router.route('/update')
.post(serviceController.update)

router.route('/delete')
.post(serviceController.delete)

module.exports = router