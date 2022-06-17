'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evaluation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Evaluation.belongsTo(models.Clients, {
        foreignKey: 'client_id'
      });
      Evaluation.belongsTo(models.Professionals, {
        foreignKey: 'professional_id'
      })
    }
  }
  Evaluation.init({
    // Fundamental Data
    sex: DataTypes.STRING,
    biotype: DataTypes.STRING,
    age: DataTypes.INTEGER,
    height: DataTypes.DOUBLE,
    weight: DataTypes.DOUBLE,
    // Measurements (mm)
    neck: DataTypes.DOUBLE,
    waist: DataTypes.DOUBLE,
    chest: DataTypes.DOUBLE,
    abdomen: DataTypes.DOUBLE,
    right_arm: DataTypes.DOUBLE,
    left_arm: DataTypes.DOUBLE,
    right_forearm: DataTypes.DOUBLE,
    left_forearm: DataTypes.DOUBLE,
    right_upperThigh: DataTypes.DOUBLE,
    left_upperThigh: DataTypes.DOUBLE,
    right_middleThigh: DataTypes.DOUBLE,
    left_middleThigh: DataTypes.DOUBLE,
    hip: DataTypes.DOUBLE,
    // Body folds (mm)
    subscapularis: DataTypes.DOUBLE,
    triceps: DataTypes.DOUBLE,
    breastplate: DataTypes.DOUBLE,
    middle_axillary: DataTypes.DOUBLE,
    supra_iliac: DataTypes.DOUBLE,
    abdominal: DataTypes.DOUBLE,
    mid_femoral: DataTypes.DOUBLE,
    //Results
    body_density: DataTypes.DOUBLE,
    body_mass: DataTypes.DOUBLE,
    body_fat: DataTypes.DOUBLE,
    fat_percentage: DataTypes.DOUBLE,
    bmr: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Evaluations',
  });
  return Evaluation;
};