const jwt = require('jsonwebtoken');
const responseHandler = require('../../helpers/error_handling');
const message = require('../../helpers/message').MESSAGE;
const { userQueries } = require('../queries');

module.exports =  async (req, res, next) => {
  try{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) return responseHandler.authenticationFailed(res, message().unathorization);

    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    
    // find user
    const user = await userQueries.getUser(decoded.data.email);

    // validate if user not found
    if(!user) return responseHandler.authenticationFailed(res, message().unathorization);

    res.user = user;

    next();
  }catch(err){
    return responseHandler.authenticationFailed(res, message().unathorization);
  }
};
