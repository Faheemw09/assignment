const Book = require("../Model/BookModel");

const createBook = async (req, res) => {
  try {
    const { title, author, genre, publishedYear } = req.body;
    console.log(req.body);
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBooks = async (req, res) => {
  const { page = 1, limit = 10, publishedYear, genre } = req.query;

  const query = {};
  if (publishedYear) query.publishedYear = publishedYear;
  if (genre) query.genre = genre;

  try {
    const books = await Book.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit);
    const count = await Book.countDocuments(query);
    res.json({
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      books,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
};
