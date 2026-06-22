const jwt = require("jsonwebtoken");
const Conversation = require("../models/conversation");
const Message = require('../models/message')
const socketAuthMiddleware = (socket,next)=>{
    try {
        const token  = socket.handshake.headers.token;
        if(!token) return next(new Error("Invalide Token")) // you need to handle this error through the help function!!!
        const payload = jwt.verify(token,process.env.JWT_SECRET);
        socket.userId = payload.id; 
        socket.role = payload.role;

        next();
    } catch (error) {
        return next(error)
    }
}

const chatSocketController = (io)=>{
    io.use(socketAuthMiddleware);

    io.on("connection", (socket)=>{
        console.log(`Employee ${socket.userId} & Role ${socket.role}`);

        
        socket.join(`room_${socket.userId}`)

        socket.on('SendMsg', async (data)=>{
            try {
                const {recipientId, text} = data;
                
                const senderId = socket.userId;

                if(!recipientId || !text) return console.log("Invalid Message Formate"); 
                
                let conversation = await Conversation.findOne({
                    participants:{$all:[senderId,recipientId]}
                });
                if(!conversation){
                    conversation = new Conversation({
                        participants:[senderId,recipientId]
                    });
                    await conversation.save();
                }

                const newMessage = new Message({
                    conversationId: conversation._id,
                    sender: senderId,
                    text: text 
                });
                await newMessage.save();

                
                io.to(`room_${recipientId}`).emit("receiveMessage",{
                    conversationId: conversation._id,
                    sender: senderId,
                    text: text,
                    createdAt: newMessage.createdAt
                });

                io.to(`room_${senderId}`).emit("receiveMessage", {
                    conversationId: conversation._id,
                    sender: senderId,
                    text: text,
                    createdAt: newMessage.createdAt
                });

            } catch (error) {
                console.log(error);
            }
        })
       socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.userId}`);
        });
    });
};

module.exports = chatSocketController;