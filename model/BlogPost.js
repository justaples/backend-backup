const mongoose = require('mongoose')

const commentSchema = new Schema({
    content: String,
},{
    timestamps: true
})


const postSchema = new mongoose.Schema({
    img: String,
    title: String,
    content: String,
    comments: [commentSchema]
},{
    timestamps: true
})

const BlogPost = mongoose.model('Post', postSchema)

module.exports = BlogPost