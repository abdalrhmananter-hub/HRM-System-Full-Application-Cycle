//(controller- router express - validateShema-jwt)
const {getAllPenddingLeaveRequests,
    getLeaveRequestsById,submiteLeaveRequest,
    apporveLeaveRequest,rejectLeaveRequest} = require('../controllers/leaveRequest.controller');

const express = require('express');
const router = express.Router();
const {validate} = require('../middleware/validate');
const leaveRequestSchema = require('../validations/leaveRequest.validation');
const {verifyToken} = require('../middleware/verifyToken.middleware');
const {checkRole} = require('../middleware/roleMiddleware');

router.use(verifyToken);

router.get('/pendingLeaveReqs',checkRole,getAllPenddingLeaveRequests);
router.get('/leaveReqs/:id',checkRole,getLeaveRequestsById);
router.get('/empLeaveReqs',getLeaveRequestsById);
router.post('/submitLeaveReq',validate(leaveRequestSchema),submiteLeaveRequest);
router.patch('/approveLeaveReq/:id',checkRole,apporveLeaveRequest);
router.patch('/rejectLeaveReq/:id',checkRole,rejectLeaveRequest);

module.exports = router;