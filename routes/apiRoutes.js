// const Workout = require("../models/Workout");
const db = require("../models");

module.exports = function(app) {
    app.put("/api/workouts/:id", (req, res) => {
        console.log("Put: ",req.body)
        // Find workout by id and then push the new exercise into the exercises array of the workout choosen by id
        db.Workout.findOneAndUpdate(
            {_id: req.params.id},
            {$push: { 'exercises' : req.body}},
            {new:true},)
            .then(exercise => res.json(exercise))
            .catch(function (err) {
            res.status(401).json(err);
            });
    });

    app.get('/api/workouts/', (req, res) => {
        db.Workout.find({})
            .then(exercise => res.json(exercise))
            .catch(err => {
                res.json(err);
              });
    })

    app.post('/api/workouts/', function (req, res) {
        console.log("Body: ",req.body)
        db.Workout.create(req.body)
        .then(exercise => {res.json(exercise)})
        .catch(function (err) {
          res.status(401).json(err);
        });

    })

    app.get('/api/workouts/range', function (req, res) {
        db.Workout.find({})
            .then(exercise => res.json(exercise))
            .catch(err => {
                res.json(err);
              });
    })

}
