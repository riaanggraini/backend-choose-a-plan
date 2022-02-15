'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_plan.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user_id: DataTypes.STRING,
    plan_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_plan',
  });
  return user_plan;
};