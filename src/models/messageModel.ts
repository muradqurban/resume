import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }},
    {
    timestamps: true
    })

const Message = mongoose.models.messages || mongoose.model("messages", messageSchema)

export default Message