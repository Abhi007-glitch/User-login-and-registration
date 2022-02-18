const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
       

    },
    {
        timestamps: true,
    }
);

userSchema.pre('save', async function (next) {
    // this async function is a Middleware
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10); //value inside shows the power of encryption
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;