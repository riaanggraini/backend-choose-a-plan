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
      plan_features.hasOne(models.features, {
        foreignKey: 'id',
        sourceKey: 'feature_id'
      });
    }
  }
  plan_features.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    plan_id: DataTypes.INTEGER,
    feature_id: DataTypes.INTEGER,
    createdAt: {
      field: 'created_at',
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: 'updated_at',
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'plan_features',
  });

  return plan_features;
};