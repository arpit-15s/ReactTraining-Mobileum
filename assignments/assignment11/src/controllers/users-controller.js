const service = require('../services/users-service');

const addUser = async (request, response) => {
    try{
        const user = await service.addUser(request.body);
        response.status(200).send(user);
    }
    catch(error){
        response.send({message: error.message});
    }
}

const getAllUser = async (request, response) => {
    try{
        const user = await service.getAllUser();
        response.status(200).send(user);
    }
    catch(error){
        response.send({message: error.message});
    }
}

const getUserByEmail = async (request, response) => {
    try{
        const user = await service.getUserByEmail(request.params.email);
        response.status(200).send(user);
    }
    catch(error){
        response.send({message: error.message});
    }
}

const updateUserInfo = async (request, response) => {
    try{
        const user = await service.updateUserInfo(request.body);
        response.status(200).send(user);
    }
    catch(error){
        response.send({message: error.message});
    }
}

const updatePassword = async (request, response) => {
    try{
        const user = await service.updateUserInfo(request.body);
        response.status(200).send(user);
    }
    catch(error){
        response.send({message: error.message});
    }
}

const loginUser = async (request, response)=> {
    try{
        const user = await service.loginUser(request.body);
        response.send("Logged In Successfully");
    } catch(error) {
        response.send({message: error.message});
    }
}

module.exports = {
    addUser, getAllUser, getUserByEmail, updateUserInfo, updatePassword, loginUser
}
