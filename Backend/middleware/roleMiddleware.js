
//req.userInfo--> userID and userRole check the User Role
//if the user is hr_admin let him pass else error

exports.checkRole = (req,res,next)=>{
    try {
        const role = req.userInfo.role;
        if(role !=="hr_admin")
        {
            const err = new Error("You have no permission");
            err.status ='fail';
            err.statusCode = 403;
            return next(err);
        }
        next();
    } catch (error) {
        next(error)
    }
}