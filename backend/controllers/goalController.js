const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require('../models/goalModel')

// @desc    Get Goals
// @route   GET /api/goals
// @access  Private

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id })
    
    res.status(200).json(goals)
})

// @desc    Set Goal
// @route   Post /api/goals
// @access  Private

const setGoal = asyncHandler(async (req, res) => {
    if(!req.body) {
        res.status(400)
        console.log(req)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({
        text: req.body[0],
        user: req.user.id,
        location: req.body[1],
        date: req.body[2],
    })


    res.status(200).json(goal)
})

// @desc    Update Goals
// @route   GET /api/goals/:id
// @access  Private

const updatedGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('')
    }

    // check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if(goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedGoal)
})

// @desc    Delete Goal
// @route   DELETE /api/goals/:id
// @access  Private

const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('')
    }

    // check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if(goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await goal.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals,
    setGoal,
    updatedGoal,
    deleteGoal
}