const CustomAPIError = require("../errors/custom-error");
const jwt = require('jsonwebtoken')
const authenticationMiddleware = async (res, req, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new CustomAPIError('no token found', 401)
    }
    const token = authHeader.split(' ')[1];
    console.log(req.headers.authentication);
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const { id, username } = decode
        req.user = { id, username };
        next();
    }
    catch {
        throw new CustomAPIError('Not authorized to access this route ', 401)
    }

}
module.exports = authenticationMiddleware;