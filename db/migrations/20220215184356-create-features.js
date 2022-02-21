'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('features', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      desc: {
        allowNull: false,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('features');
  }
};