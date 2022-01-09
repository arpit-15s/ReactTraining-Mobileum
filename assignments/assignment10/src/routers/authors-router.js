const express= require('express');
const {addAuthors, getAllAuthors, getAuthorById, updateAuthor, deleteAuthor, getBooksByAuthor} = require('../controllers/authors-controller');


module.exports=()=>{

    const router=express.Router();
    
    router
        .route("/")
        .get(getAllAuthors)
        .post(addAuthors)

    
    router
        .route("/:id")
        .get(getAuthorById)
        .put(updateAuthor)
        .delete(deleteAuthor)
        

    router
        .route("/:id/books")
        .get(getBooksByAuthor)
        
  
    return router;
};

