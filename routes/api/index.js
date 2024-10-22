const router = require('express').Router()
const userRoutes = require('./userRoutes')
const reviewRoutes = require('./reviewRoutes')
const serviceRoutes = require('./serviceRoutes')

router.use('/users', userRoutes)
router.use('/reviews', reviewRoutes)
router.use('/services', serviceRoutes)

module.exports = router;