const User = require('../models/userModel')
const asyncHandler  = require('express-async-handler')

const resgisterUser = asyncHandler(async (req, res) => {
    const { firstname, lastname, email, phone, password } = req.body; //from request recived from the frontend extract data.
    
    const userExists = await User.findOne({ email }); //check if user exists

    if (userExists) {
        res.status(400);
        throw new Error("User Already Exists");
    }
    const user = await User.create({  //create a user if does not exists
      firstname,
      lastname,
      email,
      phone,
      password,
    });

    if (user) {  //check if user is created correctly without any error
        res.status(201).json({ //sanding json file in response
            _id :user._id,
            firstname:user.firstname,
            lastname:user.lastname,
            email :user.email,
            phone: user.phone,
            

        });
    }
    else {
        res.status(400)
        throw new Error("Error Occured!")
    }

   
});

module.exports = resgisterUser;