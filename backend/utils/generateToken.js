import jwt from 'jsonwebtoken' ;

const generateTokenAndSetCookie = (userId , res) => {
    const token = jwt.sign({userId} , process.env.JWT_KEY , {
        expiresIn: '15d'
    } )

    res.cookie ("jwt" , token , {
        maxAge: 15*24*60*60*1000  , // milliseconds 
        httpOnly: true ,     // cross-Site scripting Attacks
        sameSite: "strict" ,  //  cross-site request Attacks
        secure: process.env.MODE_ENV !== "development" 
    })
} 

export default generateTokenAndSetCookie ;