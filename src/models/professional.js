'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professional extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Professional.belongsTo(models.Users, {
        foreignKey: 'user_id'
      });
      Professional.hasMany(models.Clients, {
        foreignKey: 'professional_id',
        onDelete: 'CASCADE'
      });
      Professional.hasMany(models.Evaluations, {
        foreignKey: 'professional_id',
        onDelete: 'CASCADE'
      });
    }
  }
  Professional.init({
    graduatedKey: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Professionals',
  });
  return Professional;
};