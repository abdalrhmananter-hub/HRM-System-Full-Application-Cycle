const express = require('express');
const router  = express.Router();
const {getConversationsByUserId,getOrCreateConversations} = require('../controllers/conversation.controller');
const {verifyToken} = require("../middleware/verifyToken.middleware");

router.use(verifyToken);
router.get('/',getConversationsByUserId);
router.post('/getorcreateconversation',getOrCreateConversations);


module.exports = router;