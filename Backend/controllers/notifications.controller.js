const Notification = require('../models/Notification');





exports.getAllNotificationByEmpId = async(req,res,next)=>{
    try {
        const empId = req.userInfo.id;
        const notifications = await Notification.find({recipient:empId})
        .sort({createdAt:-1})
        .limit(50);

        res.status(200).json({Message:"All the notifications",
            Count: notifications.length,
             notifications
            });
    } catch (error) {
        next(error);
    }
}

exports.markAsRead = async (req,res,next)=>{
    try {
        const notificationId = req.params.id;
        await Notification.findByIdAndUpdate(notificationId,{isRead:true});
        res.status(200).json({Message:"The Notification is marked as read."});
    } catch (error) {
        next(error);
    }
} 
