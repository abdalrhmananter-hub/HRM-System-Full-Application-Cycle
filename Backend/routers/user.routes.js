const express = require('express');
const router = express.Router();
const {getAllusers,register,login,handleRefreshToken} = require('../controllers/user.controller');
const {verifyToken} = require('../middleware/verifyToken.middleware');
const {checkRole} = require('../middleware/roleMiddleware');

router.get('/',getAllusers) //just for testing
router.post('/register',register) // we need to add verify,rollcheck after testing
router.post('/login',login) //we need to add verify,rollcheck after testing
router.post('/refreshToken',handleRefreshToken)//check if it needs any type of middlewares

module.exports = router;