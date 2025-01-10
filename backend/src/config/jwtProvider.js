const jwt = require("jsonwebtoken");


const generateToken = (userId)=>{
        let token = jwt.sign({userId},process.env.SECRET_KEY,{expiresIn:'48h'});
                return token;
};

const getUserIdFromToken = (token)=>{
        const decodedToken = jwt.verify(token,process.env.SECRET_KEY);
        // console.log(decodedToken);
        return decodedToken.userId;
};

module.exports = {generateToken,getUserIdFromToken};