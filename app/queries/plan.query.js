const { plans, plan_features, features, user_plan } = require('../../db/models');

const getPlans = async()=>{
  const data = await plans.findAll({
    include:[
      { model:plan_features,
        required:true,
        attributes:['id'],
        include: [{
          model: features, 
          required: false,
          attributes:['name'],
        }]
      }
    ],
  });
  return data;
};

const getFeatures = async()=>{
  const data = await features.findAll();
  return data;
};

const getPlanById = async(id)=>{
  const data = await plans.findByPk(id);
  return data;
};

const getUserPlan = async(plan, user)=>{
  const data = await user_plan.findOne({
    where: {
      user_id: user.id,
      plan_id: plan.id
    }
  });
  return data;
};

module.exports = {
  getPlans,
  getFeatures,
  getPlanById,
  getUserPlan
};