const { checkIn , checkOut , getAllAttendanceForEmp} = require('../controllers/attendance.controller');

const attendaceSchema = require("../validations/attendance.validation");

const express = require("express");
const router = express.Router();
const {verifyToken} = require("../middleware/verifyToken.middleware")


//we don't need to validate the schema of attenace as the employee or hr doesn't send any kind of data as per the logic
router.use(verifyToken);
router.post("/checkin",checkIn);
router.post("/checkout",checkOut);
router.get("/getAllAttendance",getAllAttendanceForEmp);

module.exports = router;