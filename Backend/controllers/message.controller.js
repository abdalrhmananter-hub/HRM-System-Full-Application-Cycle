const Message = require('../models/message');


exports.getAllMessageByConversationId = async(req,res,next)=>{
    try {
        const conversationId = req.params.conversationId;
        const messages = await Message.find({conversationId:conversationId}).sort({ createdAt: 1 });;
        if(messages.length === 0){
            const err = new Error('No messages were found!');
            err.statusCode = 404;
            return next(err);
        }

        return res.status(200).json({Message:"all messages",messages});
    } catch (error) {
        next(error);
    }
} 