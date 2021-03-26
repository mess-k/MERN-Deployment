const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
	name:{
		type: String,
		required:[true, "Name is required"],
		minlength: [3, "Name must be at least 3 characters"]
	},
	type:{
		type: String,
		required: [true,"Type is required"],
		minlength: [1, " Pet must have type"]
	},
	description:{
		type: String,
		required: [true,"Pet description is required"],
		minlength: [5, "Pet descriptions help pets get adopted!"]
	},
	skill_1:{
		type: String,
		required: [false]
	},
	skill_2:{
		type: String,
		required: [false]
	},
	skill_3:{
		type: String,
		required: [false]
	}
},{timestamps:true});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;