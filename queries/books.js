const db = require("../db/dbConfig");

// const  getAllBooks = async () =>{
//     try {
//         const allBooks = await db.any('SELECT * FROM books');
//         return allBooks;
//     } catch (error){
//         return error
//     }
// }

const getAllBooks = async () => {
    return db.any('SELECT * FROM books')
      .then(allBooks => {
        return allBooks;
      })
      .catch(error => {
        return error;
      });
  }; 

const getBook = async (id) => {
    return db.one('SELECT * FROM books WHERE id=$1', id)
    .then(book => {
        return book;
    })
    .catch(error => {
        return error;
      });
}

const createBook = async (book) => {
    try {
      const newBook = await db.one(
        'INSERT INTO books (title, author, year_published, status, reader_notes, recommend_to) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [book.title, book.author, book.year_published, book.status, book.reader_notes, book.recommend_to]
      );
      return newBook;
    } catch (error){
      throw error;
    }
  };
  


module.exports ={
    getAllBooks,
    getBook,
    createBook
};

