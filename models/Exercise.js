var mongoose = require('mongoose');

var ExerciseSchema = new mongoose.Schema({
	exercise: String,
	primaryMuscle: String,
	secondaryMuscles: [String],
	equipment:[String],
	data:[
		{
			measure:String,
			unit:String
		}
	],
	updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Exercise', ExerciseSchema);