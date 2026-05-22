const jwt = require('jsonwebtoken');


exports.verifyToken = async(req,res,next)=>{
    try {
        //get token and check if the token is valid 
        let token = req.headers.authorization;
        if(!token){
            const err = new Error("Token is not provided");
            err.status = 'fail';
            err.statusCode = 400;
            return next(err);
        }

        if(token.startsWith("Bearer ")){
            token = token.split(" ")[1];
        }
        const decode = jwt.verify(token,process.env.JWT_SECRET);

        req.userInfo = decode;
        next();
    } catch (error) {
        next(error)
    }
}