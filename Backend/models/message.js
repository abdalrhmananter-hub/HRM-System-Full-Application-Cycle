const mongoose = require('mongoose');
const Conversation = require('./conversation'); 

const messageSchema = new mongoose.Schema({
    conversationId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Conversation', 
        required: true,
    },
    sender: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    text: { 
        type: String, 
        required: true 
    },
    isRead: { 
        type: Boolean, 
        default: false 
    }
}, { timestamps: true });


messageSchema.index({conversationId:1})
module.exports = mongoose.model('Message', messageSchema);