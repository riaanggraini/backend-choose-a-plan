const { plans, plan_features, features } = require('../../db/models');

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

module.exports = {
  getPlans,
  getFeatures
};