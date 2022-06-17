require('dotenv-safe').config();
const database = require('../models');
class EvaluationController {
    static async readAllEvaluations(req, res) {
        try {
            const allEvaluations = await database.Evaluations.findAll({
                include: {
                    model: database.Clients,
                    include: {
                        model: database.Users,
                        attributes: ['firstName', 'lastName']
                    },
                    attributes: {exclude: ['createdAt', 'updatedAt']}
                  }
            });
            return res.status(200).json(allEvaluations);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    }

    static async readAllEvaluationsByProfessionalUserId(req, res) {

    }

    static async readAllEvaluationsNamesByProfessionalUserId(req, res) {

    }

    static createEvaluation(req, res) {

    }

    static updateEvaluation(req, res) {
        
    }
}

module.exports = EvaluationController;