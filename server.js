require("dotenv").config();

const express = require("express"),
    app = express(),
    port = process.env.PORT,
    cors = require("cors"),
    server=app.listen(port,()=> console.log(`listening on port ${port}`))


// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(cors(), express.json(),express.urlencoded({ extended: true }));

// This is where we import the users routes function from our user.routes.js file
require("./server/config/mongoose.config");
require("./server/routes/pet.routes")(app)



