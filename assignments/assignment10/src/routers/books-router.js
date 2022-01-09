const express= require('express');
const {addBook,getAllBooks,getBookByIsbn,updateBook,deleteBook,priceRange, ratingRange} = require('../controllers/books-controller');


module.exports=()=>{

    const router=express.Router();
    
    router
        .route("/")
        .get(getAllBooks)
        .post(addBook);

    
    router
        .route("/:isbn")
        .get(getBookByIsbn)
        .put(updateBook)
        .delete(deleteBook)
        

    router
        .route("/priceRange/:min/:max")
        .get(priceRange)
        

    router  
        .route("/ratingRange/:min/:max")
        .get(ratingRange);

        
    return router;

};

