const express = require("express");
const cors = require("cors");
const { connection } = require("./db");

const app = express();
app.use(cors());
app.use(express.json());
const bookRouter = require("./Routes/BookRoutes");

app.use("/api/books", bookRouter);
app.use("/", (req, res) => {
  res.send("server is working");
});
app.listen(8080, async () => {
  console.log("server is running");
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
    console.log("error in connectiong");
  }
});
