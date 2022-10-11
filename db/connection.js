const mongoose = require('mongoose')

const mongoURI = 'mongodb://localhost:27017/blog'

mongoose.connect(mongoURI, {
    useNewUrlParser: true
})
.then(instance => {
    console.log(`Connected on ${instance.connections[0].name}`)
})
.catch(err => console.log(`There's an error, see details, ${err}`))