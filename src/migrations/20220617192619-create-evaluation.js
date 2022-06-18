'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Evaluations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // Fundamental Data
      sex: {
        type: Sequelize.STRING
      },
      biotype: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      height: {
        type: Sequelize.DOUBLE
      },
      weight: {
        type: Sequelize.DOUBLE
      },
      // Measurements (mm)
      neck: {
        type: Sequelize.DOUBLE
      },
      waist: {
        type: Sequelize.DOUBLE
      },
      chest: {
        type: Sequelize.DOUBLE
      },
      abdomen: {
        type: Sequelize.DOUBLE
      },
      right_arm: {
        type: Sequelize.DOUBLE
      },
      left_arm: {
        type: Sequelize.DOUBLE
      },
      right_forearm: {
        type: Sequelize.DOUBLE
      },
      left_forearm: {
        type: Sequelize.DOUBLE
      },
      right_upperThigh: {
        type: Sequelize.DOUBLE
      },
      left_upperThigh: {
        type: Sequelize.DOUBLE
      },
      right_middleThigh: {
        type: Sequelize.DOUBLE
      },
      left_middleThigh: {
        type: Sequelize.DOUBLE
      },
      hip: {
        type: Sequelize.DOUBLE
      },
      // Body folds (mm)
      subscapularis: {
        type: Sequelize.DOUBLE
      },
      triceps: {
        type: Sequelize.DOUBLE
      },
      breastplate: {
        type: Sequelize.DOUBLE
      },
      middle_axillary: {
        type: Sequelize.DOUBLE
      },
      supra_iliac: {
        type: Sequelize.DOUBLE
      },
      abdominal: {
        type: Sequelize.DOUBLE
      },
      mid_femoral: {
        type: Sequelize.DOUBLE
      },
      //Results
      body_density: {
        type: Sequelize.DOUBLE
      },
      body_mass: {
        type: Sequelize.DOUBLE
      },
      body_fat: {
        type: Sequelize.DOUBLE
      },
      fat_percentage: {
        type: Sequelize.DOUBLE
      },
      bmr: {
        type: Sequelize.DOUBLE
      },
      client_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Clients', key: 'id' }
      },
      professional_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Professionals', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Evaluations');
  }
};