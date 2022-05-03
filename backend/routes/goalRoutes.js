const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updatedGoal, deleteGoal } = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updatedGoal)

module.exports = router