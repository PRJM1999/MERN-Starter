const express = require('express');
const router = express.Router()
const { getMessage, setMessage} = require('../controllers/messageController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect, getMessage).post(protect, setMessage)

// router.get('/', getMessage)

// router.post('/', setMessage)

module.exports = router
