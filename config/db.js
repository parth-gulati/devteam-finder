const mongoose = require("mongoose");
const config = require("config");

console.log(config);

const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log("Mongoose Connected...");
  } catch (err) {
    console.log(err.message);
    //Exit w/ failure

    process.exit(1);
  }
};

module.exports = connectDB;
