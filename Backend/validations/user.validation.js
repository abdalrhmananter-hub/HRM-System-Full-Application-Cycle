const joi = require('joi');

exports.regitserValidation = joi.object({
    fullName: joi.string().min(3).max(50).required(),
    nationalId: joi.string().required(),
    email: joi.string().email().required(),
    password:joi.string().min(6).required(),
    confirmPassword:joi.string().min(6).required().valid(joi.ref('password')),
    phone:joi.string(),
    role:joi.string().valid("employee" , "hr_admin"),
    department:joi.string(), 
    jobRole:joi.string().required(),
    basicSalary:joi.number().required().min(0),
    annualLeaveBal:joi.number(),
    hireDate:joi.date().required(),
    isActive:joi.boolean(),
    profilePicture:joi.string(),
});

exports.loginValidation = joi.object({
    email:joi.string().email().required(),
    password:joi.string().min(6).required(),
})

exports.updateValidation = joi.object({
    fullName: joi.string().min(3).max(50),
    nationalId: joi.string(),
    email: joi.string().email(),
    password:joi.string().min(6),
    phone:joi.string(),
    role:joi.string().valid("employee" , "hr_admin"),
    department:joi.string(), 
    jobRole:joi.string(),
    basicSalary:joi.number().min(0),
    annualLeaveBal:joi.number(),
    hireDate:joi.date(),
    isActive:joi.boolean(),
    profilePicture:joi.string(),
})