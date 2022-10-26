const router = require('express').Router()
const postCtrl = require('../controllers/postController')

router.get('/', postCtrl.index)
router.get('/:id', postCtrl.getOnePost)
router.post('/', postCtrl.createPost)
router.put('/:id', postCtrl.updatePost)

module.exports = router