const jwt = require('jsonwebtoken');


exports.generateToken = (userId,userRole,userName)=>{

    const token = jwt.sign(
        {id:userId , role:userRole,userName:userName},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXP}
    )
    return token;
}

exports.generateRefreshToken = (userId)=>{
    const refreshToken = jwt.sign(
        {id:userId},
        process.env.JWT_REFRESH_SECRET,
        {expiresIn: process.env.JWT_REFRESH_EXP}
    )
    return refreshToken
}

//still need to apply the http only and the cookies thing 