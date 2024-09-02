const express = require('express');
const Workout = require('../models/workoutModel')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');
const router = express.Router();

// GET all workout
router.get('/', getWorkouts)

//Get single workout

router.get('/:id', getWorkout)

//post a new workout

router.post('/', createWorkout)
//DEL a workout
router.delete('/:id', deleteWorkout)
//update a workout
router.patch('/:id', updateWorkout)

module.exports = router