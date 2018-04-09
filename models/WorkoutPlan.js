var mongoose = require('mongoose');

var WorkoutPlanSchema = new mongoose.Schema({

	plan:String,
	exercises:[{
		exercise:{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Exercise'
		},
		betweenReps:Number,
		afterExercise:Number
	}],
	updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("WorkoutPlan", WorkoutPlanSchema);