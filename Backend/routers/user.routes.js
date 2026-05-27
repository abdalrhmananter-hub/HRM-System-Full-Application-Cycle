const express = require('express');
const router = express.Router();
const {getAllusers,register,login,handleRefreshToken,logout} = require('../controllers/user.controller');
const {validate} = require('../middleware/validate');
const {regitserValidation,loginValidation} = require('../validations/user.validation');


router.get('/',getAllusers); //just for testing will delete it or add protection after testing
router.post('/register',validate(regitserValidation),register); 
router.post('/login',validate(loginValidation),login) ;
router.post('/refreshToken',handleRefreshToken);
router.post('/logout',logout);

module.exports = router;