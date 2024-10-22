const path = require('path')
const router = require('express').Router();
const API = require('./api/index')

// API Routes

router.use('/api', API)

// router.get('/', (req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "build", "home.js"));
// })

module.exports = router;