const express = require('express');
const router = express.Router();
const {getAllNotificationByEmpId,markAsRead} = require('../controllers/notifications.controller');
const {verifyToken} = require('../middleware/verifyToken.middleware');



router.use(verifyToken);
router.get('/',getAllNotificationByEmpId);
router.patch('/markasread/:id',markAsRead);



module.exports = router