'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_plans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        references: {         
          model: 'users',
          key: 'id'
        },
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
    await queryInterface.dropTable('user_plans');
  }
};