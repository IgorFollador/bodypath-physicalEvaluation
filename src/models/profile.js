'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profile.hasMany(models.Users, {
        foreignKey: 'profile_id'
      }) 
    }
  }
  Profile.init({
    descr_profile: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profiles',
  });
  return Profile;
};