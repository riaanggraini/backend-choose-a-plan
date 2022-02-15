'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('plans', [
      {
        name: 'Standard',
        sku: 'SKU001211',
        price: 99,
      },
      {
        name: 'Premium',
        sku: 'SKU002211',
        price: 199,
      },
      {
        name: 'Advance',
        sku: 'SKU003211',
        price: 299,
      },
    ], {});

    let plans = await queryInterface.sequelize.query(
      `SELECT id from plans;`, { raw: true }
    );
    plans = plans[0];

    let features = await queryInterface.sequelize.query(
      `SELECT id from features;`, { raw: true }
    );
    features = features[0];

    return await queryInterface.bulkInsert('plan_features', [
      {plan_id: plans[0].id, feature_id: features[0].id},
      {plan_id: plans[0].id, feature_id: features[1].id},
      {plan_id: plans[1].id, feature_id: features[0].id},
      {plan_id: plans[1].id, feature_id: features[1].id},
      {plan_id: plans[1].id, feature_id: features[2].id},
      {plan_id: plans[2].id, feature_id: features[0].id},
      {plan_id: plans[2].id, feature_id: features[1].id},
      {plan_id: plans[2].id, feature_id: features[2].id},
      {plan_id: plans[2].id, feature_id: features[3].id},
    ], {});
  },

  async down (queryInterface, Sequelize) {
  }
};