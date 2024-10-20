const mongoose = require("mongoose");
const BoookSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number, required: true },
  genre: { type: String, required: true },
});
const Book = mongoose.model("books", BoookSchema);
module.exports = Book;
