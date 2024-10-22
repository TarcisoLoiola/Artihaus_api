const router = require('express').Router();
const reviewController = require('../../controllers/reviewController')

router.route('/create')
.post(reviewController.create)

router.route('/read')
.get(reviewController.read)

router.route('/update')
.post(reviewController.update)

router.route('/delete')
.post(reviewController.delete)

module.exports = router