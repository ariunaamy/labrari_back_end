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
  
  const deleteBook = async (id) => {
    try {
      const deletedBook = await db.one(
        'DELETE FROM books WHERE id=$1 RETURNING *',
        id
      )
      return deletedBook;
    }catch(error){
      return {error: error}
    }
  }

  const updateBook = async (id, book) => {
    try {
      const updatedBook = await db.one(
        'UPDATE books SET title=$1, author=$2, year_published=$3, status=$4, reader_notes=$5, recommend_to=$6 WHERE id=$7 RETURNING *',
         [book.title, book.author, book.year_published, book.status, book.reader_notes, book.recommend_to, id]
      );
      return updateBook;
    }catch (error){
      throw error;
    }
  }

module.exports ={
    getAllBooks,
    getBook,
    createBook,
    deleteBook,
    updateBook  
};

