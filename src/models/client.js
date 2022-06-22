'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Client.belongsTo(models.Users, {
        foreignKey: 'user_id'
      });
      Client.belongsTo(models.Professionals, {
        foreignKey: 'professional_id'
      });
      Client.hasMany(models.Evaluations, {
        foreignKey: 'client_id',
        onDelete: 'CASCADE'
      })
    }
  }
  Client.init({
    // atributes 
  }, {
    sequelize,
    modelName: 'Clients',
  });
  return Client;
};