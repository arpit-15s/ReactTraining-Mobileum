const express= require('express');
const {getAllBooks, getBookByIsbn, addBook, updateBook, deleteBook, priceRange, ratingRange, getReviews, addReviews, getSingleReview, updateSingleReview, deleteReview} = require('../controllers/books-controller');


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
        .get(ratingRange)

    
    router
        .route("/:isbn/reviews")
        .get(getReviews)
        .post(addReviews)

    
    router
        .route("/:isbn/reviews/:id")
        .get(getSingleReview)
        .put(updateSingleReview)
        .delete(deleteReview)

        
    return router;

};

