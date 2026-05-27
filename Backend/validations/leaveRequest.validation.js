const joi = require('joi');

exports.leaveRequestValidation= joi.object({
    employee:joi.string().required(),
    leaveType:joi.string().valid("Annual","Sick","Emergency","Unpaid"),
    startDate:joi.date().greater('now').required(),
    endDate:joi.date().greater(joi.ref('startDate')).required(),
    totalDays:joi.number().required(),
    reason:joi.string(),
    status:joi.string().valid("pending","approved","rejected"),
    reviewedBy:joi.string(),
    reviewedAt:joi.date(),
});