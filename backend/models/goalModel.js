const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        text: {
            type: String,
            required: [true, 'Please add a text value']
        },
        location: {
            type: String,
            required: [true, 'Please add a location value']
        },
        date: {
            type: String,
            required: [true, 'Please add a date value']
        },
    }, 
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Goal', goalSchema)