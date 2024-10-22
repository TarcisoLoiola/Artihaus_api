// servicesRoutes.js
const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/create')
.post(userController.create)

router.route('/read')
.get(userController.read)

router.route('/update')
.post(userController.update)

router.route('/delete')
.post(userController.delete)

module.exports = router;
