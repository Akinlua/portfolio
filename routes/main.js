const express = require('express')
const router = express.Router()


const {home, downloadResume} = require('../controllers/main')

router.get('/', home)
router.get('/download-resume', downloadResume)


module.exports = router