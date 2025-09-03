import jwt from "jsonwebtoken" ;

export const verifyToken = (req, res, next)=>{
    const token = req.cookies.jwt ;
    // console.log(token);
    if(!token) return res.status(403).json({error:"No token found"}) ;

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY) ;
        // console.log("decoded user id:", decoded.userId) ;
        req.userId = decoded.userId ;
        next() ;
    } catch(e){
        res.status(401).json({ error: "Invalid token" });
    }
}
