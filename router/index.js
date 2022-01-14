const express = require('express')

const router = express.Router()

// user
router.use(require('./user'))
// profile
router.use(require('./profile'))
// article
router.use(require('./article'))
// tag
router.use(require('./tag'))

module.exports = router
