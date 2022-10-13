const Post = require('../model/BlogPost')
const { post } = require('../routes/postRoutes')

const index = (req,res) =>{
    Post.find({}, (err, posts) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(posts)
    })
}

const getOnePost = (req,res) =>{
    Post.findById(req.params.id, (err, post) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(post)
    })
}

module.exports = {
    index,
    getOnePost,
}