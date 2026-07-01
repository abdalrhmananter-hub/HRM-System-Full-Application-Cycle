
//req.userInfo--> userID and userRole check the User Role
//if the user is hr_admin let him pass else error
const {createError} = require("../utils/createError")
exports.checkRole = (req,res,next)=>{
    try {
        const role = req.userInfo.role;
        if(role !=="hr_admin") return next(createError("You have no Permission"),403);
        next();
    } catch (error) {
        next(error)
    }
}