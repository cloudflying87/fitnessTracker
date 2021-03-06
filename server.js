const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
mongoose.set('useFindAndModify', false);
const db = require("./models");


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

mongoose.connect(process.env.MONGOATLAS_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useUnifiedTopology: true });



// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
