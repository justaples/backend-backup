const router = require('express').Router()
const postCtrl = require('../controllers/postController')

router.get('/', postCtrl.index)


module.exports = router