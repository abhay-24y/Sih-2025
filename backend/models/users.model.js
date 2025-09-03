import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/ // 10 digit Indian number validation
    },
    password: {
        type: String,
        required: true,
        select: false
    }
});

const User = mongoose.model("User", userSchema);

export default User;