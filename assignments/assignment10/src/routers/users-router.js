const express= require('express');
const {getAllUser, addUser, updateUserInfo, updatePassword, getUserByEmail, loginUser} = require('../controllers/users-controller');


module.exports=()=>{

    const router=express.Router();
    
    router
        .route("/")
        .get(getAllUser)
        .post(addUser);

    
    router
        .route("/:email")
        .get(getUserByEmail)
        .put(updateUserInfo)
        .put(updatePassword)
        

    router
        .route("/login")
        .patch(loginUser)

        
    return router;

};

