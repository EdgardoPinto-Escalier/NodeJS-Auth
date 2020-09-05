const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

// Connect to the MongoDB database
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((conn) => {
    console.log("DB Connection has been made successfully");
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Application running on port ${port}...`);
});
