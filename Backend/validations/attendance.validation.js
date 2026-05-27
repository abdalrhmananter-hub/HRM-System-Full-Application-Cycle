const joi = require('joi');

exports.attendaceValidation = joi.object({
    employee:joi.string().required(),
    date:joi.date().required(),
    checkIn:joi.string(),
    checkOut:joi.string(),
    lateMinutes:joi.number().min(0),
    status:joi.string().valid("present","absent","on_leave","holiday"),
    notes:joi.string(),
})