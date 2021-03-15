const mongoose = require('mongoose');

const Shema = mongoose.Schema;

const postShema = new Shema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    creator: {
        type: Shema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, 
{
    timestamps: true
})

module.exports = mongoose.model('Post', postShema);