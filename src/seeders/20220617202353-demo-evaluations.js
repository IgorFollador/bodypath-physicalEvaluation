'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Evaluations', [
      {
        // Fundamental Data
        "sex": "M",
        "biotype": "MESOMORFO",
        "age": 24,
        "height": 170,
        "weight": 80,
        // Measurements (mm)
        "neck": 31,
        "waist": null,
        "chest": 99,
        "abdomen": 78,
        "right_arm": 36,
        "left_arm": 35.5,
        "right_forearm": 30.5,
        "left_forearm": 30,
        "right_upperThigh": 60.5,
        "left_upperThigh": 60.5,
        "right_middleThigh": 58,
        "left_middleThigh": 58,
        "hip": 97.5,
        // Body folds (mm)
        "subscapularis": 15,
        "triceps": 15,
        "breastplate": 15,
        "middle_axillary": 22,
        "supra_iliac": 24,
        "abdominal": 15,
        "mid_femoral": 15,
        "client_id": 1,
        "professional_id": 2,
        // Result Body Data
        "body_density": 1.0526,
        "fat_percentage": 16.2113,
        "body_fat": 16.2113,
        "body_mass": 63.7887,
        "bmr": 1840,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Fundamental Data
        "sex": "M",
        "biotype": "MESOMORFO",
        "age": 32,
        "height": 174,
        "weight": 96,
        // Measurements (mm)
        "neck": 35,
        "waist": null,
        "chest": 102,
        "abdomen": 78,
        "right_arm": 36,
        "left_arm": 35.5,
        "right_forearm": 30.5,
        "left_forearm": 30,
        "right_upperThigh": 60.5,
        "left_upperThigh": 60.5,
        "right_middleThigh": 58,
        "left_middleThigh": 58,
        "hip": 97.5,
        // Body folds (mm)
        "subscapularis": 15,
        "triceps": 15,
        "breastplate": 14,
        "middle_axillary": 22,
        "supra_iliac": 24,
        "abdominal": 16,
        "mid_femoral": 15,
        "client_id": 2,
        "professional_id": 2,
        // Result Body Data
        "body_density": 1.0503,
        "fat_percentage": 20.4421,
        "body_fat": 20.4421,
        "body_mass": 75.5579,
        "bmr": 2028,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        // Fundamental Data
        "sex": "F",
        "biotype": "ECTOMORFO",
        "age": 21,
        "height": 168,
        "weight": 55.6,
        // Measurements (mm)
        "neck": 28,
        "waist": 56,
        "chest": 99,
        "abdomen": 78,
        "right_arm": 36,
        "left_arm": 35.5,
        "right_forearm": 30.5,
        "left_forearm": 30,
        "right_upperThigh": 60.5,
        "left_upperThigh": 60.5,
        "right_middleThigh": 58,
        "left_middleThigh": 58,
        "hip": 97.5,
        // Body folds (mm)
        "subscapularis": 8.4,
        "triceps": 6.3,
        "breastplate": 6.6,
        "middle_axillary": 7.5,
        "supra_iliac": 5.1,
        "abdominal": 6.7,
        "mid_femoral": 8.3,
        "client_id": 3,
        "professional_id": 2,
        // Result Body Data
        "body_density": 1.0847,
        "fat_percentage": 3.5292,
        "body_fat": 3.5292,
        "body_mass": 52.0708,
        "bmr": 1391,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Evaluations', null, {});
  }
};
