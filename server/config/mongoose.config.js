const mongoose = require("mongoose"),
	db = process.env.DB_URI

mongoose.connect(`mongodb://localhost/${db}`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Established a connection to the database"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));