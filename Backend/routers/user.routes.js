const express = require('express');
const router = express.Router();
const {getAllemployees,register,login,handleRefreshToken,logout,
    getEmpById,deleteEmployeeById,PartiallyUpdateEmpById,updateEmpById} = require('../controllers/user.controller');
const {validate} = require('../middleware/validate');
const {regitserValidation,loginValidation,updateValidation} = require('../validations/user.validation');
const {upload} = require('../middleware/multer.middlware');
const {verifyToken} = require('../middleware/verifyToken.middleware');
const {checkRole} = require('../middleware/roleMiddleware')

router.post('/login',validate(loginValidation),login) ;
router.post('/logout',logout);
router.post('/refreshToken',handleRefreshToken);

router.use(verifyToken,checkRole)

router.get('/',getAllemployees); //just for testing will delete it or add protection after testing
router.post('/register',upload.single('profilePicture'),validate(regitserValidation),register); 
router.get('/:id',getEmpById);
router.delete('/:id',deleteEmployeeById);
router.put('/:id',upload.single('profilePicture'),updateValidation,updateEmpById);
router.patch('/:id',upload.single('profilePicture'),updateValidation,PartiallyUpdateEmpById);

module.exports = router;