const express = require("express");
const controller = require("../controller/Books.controller");
const Router = express.Router();
Router.post("/create", controller.createBook);
Router.get("/get", controller.getBooks);
Router.patch("/update/:id", controller.updateBook);
Router.delete("/delete/:id", controller.deleteBook);
module.exports = Router;
