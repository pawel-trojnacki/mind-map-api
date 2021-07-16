const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const { dbConfig } = require("./src/db");
const { mapRouter } = require("./src/routes/map.router");

const PORT = process.env.PORT || 5000;

dotenv.config();

dbConfig();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/maps", mapRouter);

app.listen(PORT, () => console.log(`🚀 Server is running at port ${PORT}`));
