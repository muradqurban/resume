import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type      : String,
        required  : [true, "Adınızı daxil edin"],
    },
    surname: {
        type      : String,
        required  : [true, "Soyadınızı daxil edin"],
    },
    email: {
        type      : String,
        required  : [true, "E-mail adresinizi daxil edin"],
        unique    : true,
    },
    password: {
        type      : String,
        required  : [true, "Güclü şifrə yaradın"],
    },
    image: {
        type      : String,
        default   : "",
    },
    isVerfied: {
        type      : Boolean,
        default   : false,
    },
    role: {
        type      : Number,
        default   : 3,
    },
    forgotPasswordToken       : String,
    forgotPasswordTokenExpiry : Date,
    verifyToken               : String,
    verifyTokenExpiry         : Date,
})

const User = mongoose.models.users || mongoose.model("users",userSchema);

export default User;