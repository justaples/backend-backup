const BlogPost = require('../model/BlogPost')

const index = (req,res) =>{
    BlogPost.find({}, (err, posts) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(posts)
    })
}

const getOnePost = (req,res) =>{
    BlogPost.findById(req.params.id, (err, post) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(post)
    })
}

const createPost = async (req, res) =>{
    console.log(req.body)
        let newPost = await BlogPost.create(req.body)
        // newPost.save(() => console.log("post saved"))
        console.log(newPost)
        res.json(newPost)
}

module.exports = {
    index,
    getOnePost,
    createPost
}