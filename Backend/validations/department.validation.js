const joi = require("joi");

exports.departmentValidation = joi.object({
    name:joi.string().required(),
    manager:joi.string(),
})