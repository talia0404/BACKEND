const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
    {
        id:{type: String, required:true},
        concern:{type: String, required:true}
    }


)
module.exports = mongoose.model('Post', postSchema) 
