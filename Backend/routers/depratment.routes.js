const expresss = require('express');
const router  = expresss.Router();
const {verifyToken} = require('../middleware/verifyToken.middleware');
const {checkRole} = require('../middleware/roleMiddleware');
const{createDepartment,getAllDepartments,updateDepartment,
    getDepartmentById,deleteDepartment} = require('../controllers/depratment.controller');


router.use(verifyToken,checkRole);

router.post('/createdepartment',createDepartment);
router.get('/alldepratment',getAllDepartments);
router.patch('/updatedepratment/:id',updateDepartment);
router.get('/:id',getDepartmentById);
router.get('/deletedepartment/:id',deleteDepartment);

module.exports = router;
