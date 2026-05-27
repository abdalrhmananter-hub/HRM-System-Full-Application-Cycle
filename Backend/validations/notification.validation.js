const joi = require('joi');

exports.notificationValidation = joi.object({
    recipient:joi.string().required(),
    type:joi.string().required(),
    message:joi.string().required(),
    isRead:joi.boolean(),
})