const {sequelize} = require('../data/connection');
const {Sequelize} = require('sequelize');

//console.log('sequelize.models',sequelize.models);

const {Books, Reviews} =sequelize.models;


//console.log('db',db);
const getAllBooks=async()=>{

    //const result=await db.query('SELECT * FROM books');
    //console.log('result',result);

    const books=await Books.findAll();

    return books;

}

const getBookByIsbn=async(isbn)=>{
    
    const book= await Books.findOne({where:{isbn:isbn}});
    if(book)
        return book;
    else
        throw new Error('Book Not Found');
}

const addBook=async(book)=>{

    //const dbBook=new Book(book);
    //await dbBook.save(); //this will save the book in the database    
    const dbBook=await Books.create(book); //create and save to data base
    return dbBook;
}

const updateBook=async(book)=>{
    await Books.destroy({
        where: {
          isbn: book.isbn
        }
    });
    return await addBook(book);
}

const deleteBook=async(isbn)=>{
    await Books.destroy({
        where: {
          isbn: isbn
        }
    });
}

const Op = Sequelize.Op;

const priceRange=async(min, max)=> {
    const book= await Books.findOne({where: {
        price: {
                [Op.lte]: max,
                [Op.gte]: min
        }
    }});
    if(book)
        return book;
    else
        throw new Error('Book Not Found');
}

const ratingRange=async(min, max)=> {
    const book= await Books.findOne({where: {
        rating: {
            [Op.lte]: max,
            [Op.gte]: min
        }
    }});
    if(book)
        return book;
    else
        throw new Error('Book Not Found');
}

const getReviews = async (isbn) => {
    const book = await getBookByIsbn(isbn);
    console.log(book.title)
    const book_name = book.title;
    
    return await Reviews.findAll({
      where: {
        book_name: book_name
      },
    });
  
  };

const addReviews = async (isbn, review) => {
    const book = await getBookByIsbn(isbn);
  
    const book_name = book.title;
    
    return await Reviews.create(
        review
      );
  
  };


  const getSingleReview = async (isbn, id) => {
    const book = await getBookByIsbn(isbn);
  
    const book_name = book.title;
    
    return await Reviews.findOne({
      where: {
        book_name: book_name,
        id: id
      },
    });
  
  };


  const updateSingleReview = async (isbn, review, id) => {
    const book = await getBookByIsbn(isbn);
  
    const book_name = book.title;
    
    await Reviews.destroy({
      where: {
        book_name: book_name,
        id: id
      },
    });
    
    return await addReviews(isbn, review);
  };

  const deleteReview = async (isbn, id) => {
      const book = await getBookByIsbn(isbn);

      const book_name = book.title;

      await Reviews.destroy({
          where: {
              book_name: book_name,
              id: id
          },
      })
  }

module.exports={
    getAllBooks,
    getBookByIsbn,
    addBook,
    updateBook,
    deleteBook,
    priceRange,
    ratingRange,
    getReviews,
    addReviews,
    getSingleReview,
    updateSingleReview,
    deleteReview
}