const mongoose = require('mongoose');


const notificationSchema = new mongoose.Schema({
    recipient:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    type:{
        type:String,
        required:true,
        index:true
    },
    message:{
        type:String,
        required:true,
    },
    isRead:{
        type:Boolean,
        default:false,
    }

},{timestamps:true});

notificationSchema.index({recipient:1})
notificationSchema.index({isRead:1})

const Notification = mongoose.model("Notification",notificationSchema);

module.exports = Notification;