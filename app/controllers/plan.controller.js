const responseHandler = require('../../helpers/error_handling');
const message = require('../../helpers/message').MESSAGE;
const { planQueries } = require('../queries');
const { planService } = require('../services');
const { planDecorator, featureDecorator } = require('../decorators');

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
    const data = await featureDecorator(features);
    return responseHandler.ok(res, message('get features').success, data);
  }catch(err){
    // send error res
    return responseHandler.internalError(res, message().serverError);
  }
};

const subscribe = async (req, res) => {
  try{
    const { plan_id } = req.body;
    const { user } = res;

    // check body plan_id
    if(!plan_id) return responseHandler.badRequest(res, message('plan_id').incompleteKeyOrValue);

    // check if plan exist
    const plan = await planQueries.getPlanById(plan_id);

    // if plans not found
    if(!plan) return responseHandler.badRequest(res, message('plan you choosed').notFoundResource);

    // check if user already have this plan
    const userPlan = await planQueries.getUserPlan(plan, user);

    // if user already sub this plan
    if(userPlan) return responseHandler.duplicate(res, message('plan you choosed').duplicateData);
    
    // create plan
    await planService.createPlan(plan, user);

    return responseHandler.created(res, message('plan you choosed').created);
  }catch(err){
    // send error res
    return responseHandler.internalError(res, message().serverError);
  }
};

const subscribeAllPlan = async(req, res)=>{
  try{
    const { user } = res;

    const plans = await planQueries.getPlans();
    const data = await Promise.all(plans.map((plan)=>{
      return {
        user_id: user.id,
        plan_id: plan.id
      };
    }));
    // create all plans
    await planService.createPlans(data);

  }catch(err) {
    // send error res
    return responseHandler.internalError(res, message().serverError);
  }
};

module.exports = {
  plans,
  features,
  subscribe,
  subscribeAllPlan
};