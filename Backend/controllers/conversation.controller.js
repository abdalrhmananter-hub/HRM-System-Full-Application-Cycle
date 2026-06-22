const Conversations = require('../models/conversation');

exports.getConversationsByUserId = async(req,res,next)=>{
    try {
        const userId = req.userInfo.id;
        const conversations = await Conversations.find({participants:userId})
        .populate('participants', 'fullName role profileImage')
        .sort({ updatedAt: -1 });

        if(conversations.length === 0){
            const err = new Error('No conversations were found!');
            err.statusCode = 404;
            return next(err);
        }

        return res.status(200).json({Message:"All conversation" , conversations});
    } catch (error) {
        return next(error);
    }
}
exports.getOrCreateConversations = async(req,res,next)=>{
    try {
        const senderId = req.userInfo.id;
        const{recipientId} = req.body;

        if(!recipientId){
            const err = new Error("Recipient Id is required");
            err.statusCode = 400;
            return next(err);
        }

        let conversation  = await Conversations.findOne({
            participants:{$all:[senderId,recipientId]}
        }).populate('participants','fullName role profileImage');

        if(!conversation){
            conversation = new Conversations({
                participants: [senderId, recipientId]
            });
            await conversation.save();
            //to add the name role and profile image
            conversation = await conversation.populate('participants', 'fullName role profileImage');
        }

        return res.status(200).json({ Message: "Conversation ready", conversation });
    } catch (error) {
        next(error);
    }
}