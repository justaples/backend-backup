const mongoose = require('mongoose')
// const Schema = mongoose.Schema

const commentSchema = new mongoose.Schema({
    content: String,
},{
    timestamps: true
})


const postSchema = new mongoose.Schema({
    picture: String,
    title: String,
    content: String,
    // comments: [commentSchema]
},{
    timestamps: true
})

const BlogPost = mongoose.model('BlogPost', postSchema)

module.exports = BlogPost

// module.exports = mongoose.model("Post", postSchema)