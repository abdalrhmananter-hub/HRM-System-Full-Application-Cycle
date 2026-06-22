const mongoose = require("mongoose");
const User = require('../models/User')

const conversationSchema = new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
        }]
},{timestamps:true});

conversationSchema.index({participants:1});

const Conversation = mongoose.model("Conversation",conversationSchema);

module.exports = Conversation