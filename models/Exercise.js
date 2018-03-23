var mongoose = require('mongoose');

var ExerciseSchema = new mongoose.Schema({
	exercise: String
	/*,
	primaryMuscle: String,
	equipment: String,
	weight:Number,
	weightUnit:String,
	weightRequired:Boolean,
	time:Number,
	timeUnit:String,
	timeRequired:Boolean,
	reps:Number,
	repsUnit:String,
	repsRequired:Boolean,
	distance:Number,
	distanceUnit:String,
	distanceRequired:Boolean,
	updated_date: { type: Date, default: Date.now }, */
});

module.exports = mongoose.model('Exercise', ExerciseSchema);