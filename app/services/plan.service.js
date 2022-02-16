const { plans, user_plan } = require('../../db/models');

const createPlan = async(payload, user)=>{
  user_plan.create(
    {
      user_id: user.id,
      plan_id: payload.id
    }
  );
};

const createPlans = async(payload)=>{
  user_plan.bulkCreate(
    payload,
    {
      updateOnDuplicate: ['user_id', 'plan_id']
    }, 
  );
};
module.exports = {
  createPlan,
  createPlans
};