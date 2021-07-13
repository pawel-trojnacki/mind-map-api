const mongoose = require("mongoose");

const dbConfig = () => {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on("error", (error) => console.error(error));

  db.once("open", () => console.log("😎 Connected do database"));
};

module.exports = { dbConfig };
