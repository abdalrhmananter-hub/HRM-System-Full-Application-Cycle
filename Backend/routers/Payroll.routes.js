const {getAllPayrollByMonthAndYear,
    getAllPayrollByEmpIDAndMonthAndYear,
    createMonthlyPayrollByIdUntillSpceificTime} = require("../controllers/payroll.controller");
const express = require('express');
const router = express.Router();
const {verifyToken} = require('../middleware/verifyToken.middleware');
const {checkRole} = require('../middleware/roleMiddleware');


router.use(verifyToken,checkRole);


router.get('/allpayroll/:month/:year', getAllPayrollByMonthAndYear);
router.get('/getPayroll/:empId/:month/:year',getAllPayrollByEmpIDAndMonthAndYear); //how to send the year and month ??
router.post('/createPayrollPreview',createMonthlyPayrollByIdUntillSpceificTime);

module.exports = router;