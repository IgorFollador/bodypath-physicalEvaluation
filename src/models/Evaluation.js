const mongoose = require('mongoose');

const evaluationSchema = mongoose.Schema(
    {
        id: {type: String},
        // Fundamental Data
        sex: {type: String},
        biotype: {type: String},
        age: { type: Number, min: 1, max: 100 },
        // Measurements (mm)
        height: { type: Number },
        weight: { type: Number },
        neck: { type: Number },
        waist: { type: Number },
        chest: { type: Number },
        abdomen: { type: Number },
        right_arm: { type: Number },
        left_arm: { type: Number },
        right_forearm: { type: Number },
        left_forearm: { type: Number },
        right_upperThigh: { type: Number },
        left_upperThigh: { type: Number },
        right_middleThigh: { type: Number },
        left_middleThigh: { type: Number },
        hip: { type: Number },
        // Body folds (mm)
        subscapularis: { type: Number },
        triceps: { type: Number },
        breastplate: { type: Number },
        middle_axillary: { type: Number },
        supra_iliac: { type: Number },
        abdominal: { type: Number },
        mid_femoral: { type: Number },
        //Results
        body_density: { type: Number },
        body_mass: { type: Number },
        body_fat: { type: Number },
        fat_percentage: { type: Number },
        bmr: {type: Number},
        // Relationship
        user_id: { type: Number }
    }, { timestamps: true }
);

const evaluations = mongoose.model('evaluations', evaluationSchema);

module.exports = evaluations;