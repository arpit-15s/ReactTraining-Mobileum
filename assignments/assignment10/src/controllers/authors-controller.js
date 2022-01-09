const service = require('../services/authors-service');

const getAllAuthors = async (request, response) => {
    try{
        const author = await service.getAllAuthors();
        response.json(author);
    } catch(error) {
        response.status(404).json(error.message);
    }
}

const getAuthorById = async (request, response) => {
    try{
        const author = await service.getAuthorById(request.params.id);
        response.json(author);
    } catch(error) {
        response.status(404).json(error.message);
    }
}

const addAuthors = async (request, response) => {
    try{
        const author = await service.addAuthors(request.body);
        response.status(201).send(author);
    } catch(error) {
        response.status(400).json({message:error.message});
    }
}

const updateAuthor = async (request, response) => {
    try {
        const author = await service.updateAuthor(request.body);
        response.status(201).send(author);
    } catch(error) {
        response.status(400).json({message: error.message});
    }
}

const deleteAuthor = async (request, response) => {
    try{
        const author = await service.deleteAuthor(request.params.id);
        response.status(204).send(author);
    } catch(error) {
        response.status(400).json({message: error.message});
    }
}

const getBooksByAuthor = async (request, response) => {
    try{
        const book_list = await service.getBooksByAuthor(request.params.id);
        response.status(200).send(book_list);
    } catch(error) {
        response.status(400).json({message: error.message});
    }
}

module.exports={getBooksByAuthor, getAllAuthors, getAuthorById, updateAuthor, deleteAuthor, addAuthors};