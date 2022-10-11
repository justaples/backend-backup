require('./connection')

const Post = require('../model/BlogPost')
const postSeeds = require('./seeds.json')

Post.deleteMany({})
.then(async () =>{
    return await Post.insertMany(postSeeds)
}).then(console.log)
.catch(err =>{
    console.log(err)
})

.finally(()=>{
    process.exit()
})