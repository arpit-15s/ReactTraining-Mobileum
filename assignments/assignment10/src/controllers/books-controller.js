const service=require('../services/books-service');

const getAllBooks=async (request,response)=>{
    try{
        const books=await service.getAllBooks();
        response.json(books);
    }catch(error){
        response.status(400).json(error.message);
    }
};

const getBookByIsbn=async(request,response)=>{
    try{
        const book=await service.getBookByIsbn(request.params.isbn);
        response.json(book);
    }catch(error){
        response.status(404).json({message:error.message, isbn:request.params.isbn});
    }
}

const addBook=async (request, response, next) => {
    try{
        const book=await service.addBook(request.body);
        response.status(201).send(book);
    } catch(error){
        response.status(400).json({message: error.message});
    }
}

const updateBook=async (request, response) => {
    try{
        const book=await service.updateBook(request.body);
        response.status(201).send(book);
    } catch(error){
        response.status(400).json({message: error.message});
    }
}

const deleteBook=async (request, response) => {
    try{
        await service.deleteBook(request.params.isbn);
        response.send("Deleted SuccessFully");
    } catch(error){
        response.status(400).json({message: error.message});
    }
}

const priceRange=async (request, response) => {
    try{
        const book = await service.priceRange(request.params.min, request.params.max);
        response.send(book);
    } catch(error) {
        response.send({message:error.message});
    }
}

const ratingRange=async (request, response) => {
    try{
        const book = await service.ratingRange(request.params.min, request.params.max);
        response.send(book);
    } catch(error) {
        response.send({message: error.message});
    }
}

module.exports={
    getAllBooks, getBookByIsbn, addBook, updateBook, deleteBook, priceRange, ratingRange,
}