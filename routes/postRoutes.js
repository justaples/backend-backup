const router = require('express').Router()
const postCtrl = require('../controllers/postController')

router.get('/', postCtrl.index)
router.get('/:id', postCtrl.getOnePost)


module.exports = router