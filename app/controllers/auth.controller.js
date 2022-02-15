const bcrypt = require('bcryptjs');
const responseHandler = require('../../helpers/error_handling');
const message = require('../../helpers/message').MESSAGE;
const utils = require('../../helpers/utils');
const { userQueries } = require('../queries');
const { generateToken } = require('../../lib/jwt');

const auth = async (req, res) => {
  try{
    const { email, password } = req.body;

    // check email and pass
    if(!email) return responseHandler.badRequest(res, message('email').incompleteKeyOrValue);
    if(!password) return responseHandler.badRequest(res, message('password').incompleteKeyOrValue);

    // check email format 
    if(!utils.validateEmail(email)) return responseHandler.badRequest(res, message('email').invalidFormat);

    // find user
    const user = await userQueries.getUser(email);

    // validate if user not found
    if(!user) return responseHandler.badRequest(res, message('user').notFoundResource);

    // compare password
    const passwordMatch = await bcrypt.compare(password, user.password);

    // if password not match
    if(!passwordMatch) return responseHandler.authenticationFailed(res, message().invalidEmailOrPassword);
    
    // generate token
    const token = await generateToken(user);
    
    // return token as response
    const data = { token };
    return responseHandler.ok(res, message('login').success, data);
    
  }catch(err){
    // send error res
    return responseHandler.internalError(res, message().serverError);
  };
};

module.exports = {
  auth,
};