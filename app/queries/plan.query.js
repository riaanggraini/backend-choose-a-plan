const { plans, plan_features, features } = require('../../db/models');

const getPlans = async()=>{
  const allPlans = await plans.findAll({
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
  return allPlans;
};

module.exports = {
  getPlans,
};