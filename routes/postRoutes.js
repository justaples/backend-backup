const router = require('express').Router()
const postCtrl = require('../controllers/postController')

router.get('/', postCtrl.index)
router.get('/:id', postCtrl.getOnePost)
router.post('/', postCtrl.createPost)

module.exports = router