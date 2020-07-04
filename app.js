const express = require("express");
const { join } = require("path");
const nunjucks = require("nunjucks");
const mongoose = require("mongoose");
const router = require("./router");

const app = express();

nunjucks.configure(join(__dirname, "templates"), {
  autoescape: true,
  express: app,
  watch: true,
});

const MongoDB_URL = 'mongodb+srv://Alex:Alex1990@clustercontactbook.y0plg.mongodb.net/contactbook?retryWrites=true&w=majority';
// || 'mongodb://localhost:27017/contactbook'

mongoose.connect(MongoDB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log("MongoDB error");  
}).catch((err) => {
  console.log(err);  
});
mongoose.set("debug", true);
mongoose.connection.on("error", (e) => {
  console.error("MongoDB error:", e);
  process.exit(1);
});

app.use("/", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
