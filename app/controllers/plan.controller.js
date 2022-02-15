const { planQueries } = require('../queries');
const { planDecorator, featureDecorator } = require('../decorators');
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

const features = async (req, res) => {
  try{
    // get all features
    const features = await planQueries.getFeatures();

    // return response
    const data = await featureDecorator(features)
    return responseHandler.ok(res, message('get features').success, data);
  }catch(err){
    // send error res
    return responseHandler.internalError(res, message().serverError);
  }
};

module.exports = {
  plans,
  features
};