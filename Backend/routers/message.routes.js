const express = require('express');
const router = express.Router();
const {getAllMessageByConversationId} = require('../controllers/message.controller');
const {verifyToken} = require('../middleware/verifyToken.middleware');

router.get('/:conversationId',verifyToken,getAllMessageByConversationId);

module.exports = router;