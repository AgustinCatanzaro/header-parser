const express = require('express')
const router = express.Router()

const { headerParser } = require('../controllers/header-parser')

router.route('/whoami').get(headerParser)

module.exports = router
