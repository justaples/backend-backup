const Post = require('../model/BlogPost')

const index = (req,res) =>{
    Post.find({}, (err, posts) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(posts)
    })
}

module.exports = {
    index,
}