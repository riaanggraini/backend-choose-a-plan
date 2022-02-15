'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('plan_features', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plan_id: {
        allowNull: false,
        references: {         
          model: 'plans',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      feature_id: {
        allowNull: false,
        references: {         
          model: 'features',
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: true,
        field: "updated_at",
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('plan_features');
  }
};