const express = require("express");
const books = require("express").Router();

const { AppError, errorHandler } = require('../errorHandler');

const {
    getAllBooks,
    getBook,
    createBook,
    deleteBook,
    updateBook
} = require("../queries/books");

//GET all 
books.get("/", async (req, res) => {
    const allBooks = await getAllBooks();
    res.send(allBooks)
})

// GET one
books.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    const book = await getBook(id);
    try {
        // Check if the book exists
        if (book.code === 0) {
            throw new AppError("Book not found", 404);
        }
        if (book.length) {
            throw new AppError("request must be a number", 400);
        }
        res.status(200).json(book);
    } catch (error) {
        next(error);
    }
});

books.post("/", async (req, res, next) => {
    try {
        const newBook = await createBook(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({error: error});
    }
})

//DELETE
books.delete("/:id", async (req, res, next ) => {
    const {id} = req.params;
    const deletedBook = await deleteBook(id);
    if(deletedBook.id){
        res.status(200).json(deletedBook);
    }else{
        res.status(404).json("book not found")
    }
})

//PUT 
books.put("/:id", async (req,res) => {
    const {id} = req.params;
    const {title, author, year_published, status, reader_notes, recommend_to} =req.body;
    const updatedBook = await updateBook(id, req.body);
    res.status(200).json(updatedBook);
})

books.use(errorHandler);

module.exports = books;

