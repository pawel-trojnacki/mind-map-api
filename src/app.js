const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const { dbConfig } = require("./db");
const { mapRouter } = require("./routes/map.router");

const PORT = 5000;

dotenv.config();

dbConfig();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/maps", mapRouter);

app.listen(PORT, () => console.log(`🚀 Server is running at port ${PORT}`));
