const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Resistance
const ExerciseSchema = new Schema({
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number,
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

const WorkoutSchema = new Schema({
    day:{
        type: Date,
        default: Date.now
    },
    exercises: [ExerciseSchema]
})

const Workout = mongoose.model("Exercise",WorkoutSchema);

module.exports = Workout;
