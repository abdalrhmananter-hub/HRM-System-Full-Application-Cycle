const joi = require('joi');

exports.payrollValidation = joi.object({
    employee:joi.string().required(),
    month:joi.number().required().min(1).max(12),
    year:joi.number().required().min(2020),
    basicSalary:joi.number().min(0),
    absenceDays:joi.number().min(0),
    deductions:joi.number().min(0),
    bonuses:joi.number().min(0),
    netSalary:joi.number().required(),

})