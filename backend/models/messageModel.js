const mongoose = require('mongoose')

const messageSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        message: {
            type: String,
            required: true,
        },
    }, 
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Message', messageSchema)