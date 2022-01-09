const {sequelize} = require('../data/connection');

const {Users} = sequelize.models;

const addUser = async (user_data) => {
    const user = await Users.create(user_data);
    return user;
}

const getAllUser = async () => {
    const user = await Users.findAll();
    return user;
}

const loginUser = async ({email, password}) => {
    const user = await Users.findOne({where: {email: email, password: password}})
    if(user){
        return user;
    }
    else throw new Error(`Email or Password Doesn't match`);
}

const getUserByEmail = async(email) => {
    const user = await Users.findOne({where:{ email: email }});
    if(user) 
        return user;
    else
        throw new Error(`No user exist with Email: ${email}`);
}

const updateUserInfo = async(user) => {
    await Users.destroy({where: {email: user.email}});
    return await addUser(user);
}

module.exports = {
    addUser, getUserByEmail, updateUserInfo, loginUser, getAllUser
}
