const { planQueries } = require('../queries');
const { planDecorator } = require('../decorators');
const responseHandler = require('../../helpers/error_handling');
const message = require('../../helpers/message').MESSAGE;

const plans = async (req, res) => {
  try{
    // get all plans
    const plans = await planQueries.getPlans();

    // return response
    const data = await planDecorator(plans);
    return responseHandler.ok(res, message('get plans').success, data);
  }catch(err){
    // send error res
    return responseHandler.internalError(h, message().serverError);
  }
};

module.exports = {
  plans
};