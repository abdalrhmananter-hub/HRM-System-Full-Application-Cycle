const Notification = require('../models/Notification');

exports.sendNotification = async(app,recipientId,type,message)=>{
    try {
        const newNotification  = new Notification ({
            recipient: recipientId,
            type,
            message
        });
        await newNotification.save();

        const io = app.get('io');
        if(io){
            io.to(`room_${recipientId}`).emit('newNotification', {
                _id: newNotification._id,
                type: newNotification.type,
                message: newNotification.message,
                isRead: newNotification.isRead,
                createdAt: newNotification.createdAt
            });
            console.log(`Notification was sent to room_${recipientId} `);
        }
        return newNotification;
    } catch (error) {
        console.error('Error in sending Notifications',error);
    }
};