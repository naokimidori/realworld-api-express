const express = require('express')
const tagsController = require('../controller/tag')

const router = express.Router()

router.get('/tags', tagsController.getTags)

module.exports = router
