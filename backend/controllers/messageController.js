const asyncHandler = require('express-async-handler')

const Message = require('../models/messageModel')

// @desc    Get Message
// @route   Get /api/message
// @access  Private

const getMessage = asyncHandler(async (req, res) => {

    const messages = Message.find({}).sort({updatedAt: -1})

    res.status(200).json((await messages))

})

// @desc    Set Message
// @route   Post /api/message
// @access  Private

const setMessage = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const message = await Message.create({
        message: req.body.text,
        user: req.user.id,
    })

    res.status(200).json(message)
})

module.exports = {
    getMessage,
    setMessage
}