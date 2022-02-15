'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class plan_features extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  plan_features.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    plan_id: DataTypes.INTEGER,
    feature_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'plan_features',
  });
  return plan_features;
};