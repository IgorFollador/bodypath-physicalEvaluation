require('dotenv-safe').config();
const database = require('../models');
const bd = require('../services/BodyData'); 

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
                    attributes: {exclude: ['id', 'professional_id', 'createdAt', 'updatedAt']}
                }
            });
            return res.status(200).json(allEvaluations);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async readEvaluation(req, res) {
        const { id } = req.params;

        try {
            const evaluation = await database.Evaluations.findOne({
                include: {
                    model: database.Clients,
                    include: {
                        model: database.Users,
                        attributes: ['firstName', 'lastName']
                    },
                    attributes: {exclude: ['id', 'professional_id', 'createdAt', 'updatedAt']}
                },
                where: {
                    id: id
                }
            });
            return res.status(200).json(evaluation);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async readAllEvaluationsByProfessionalId(req, res) {
        const { id } = req.params;
        
        try {
            const allEvaluations = await database.Evaluations.findAll({
                include: {
                    model: database.Clients,
                    include: {
                        model: database.Users,
                        attributes: ['firstName', 'lastName']
                    },
                    attributes: {exclude: ['id', 'professional_id', 'createdAt', 'updatedAt']}
                },
                where: {
                    professional_id: id
                }
            });
            return res.status(200).json(allEvaluations);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    }

    static async readAllEvaluationsNamesByProfessionalId(req, res) {
        const { id } = req.params;
        try {
            const allEvaluations = await database.Evaluations.findAll({
                include: {
                    model: database.Clients,
                    include: {
                        model: database.Users,
                        attributes: ['firstName', 'lastName']
                    },
                    attributes: {exclude: ['id', 'professional_id', 'createdAt', 'updatedAt']}
                },
                attributes: ['id', 'createdAt', 'updatedAt'],
                where: {
                    professional_id: id
                }
            });
            return res.status(200).json(allEvaluations);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    }

    static async createEvaluation(req, res) {
        const formEvaluation = req.body;
        const client = await database.Clients.findByPk(formEvaluation.client_id);
        if(client === null) return res.status(404).json({ message: 'Client not found'})
        const professional = await database.Professionals.findByPk(formEvaluation.professional_id);
        if(professional === null) return res.status(404).json({ message: 'Professional not found'})

        try {

            const bodyData = await this.calculateBodyData(formEvaluation);
            console.log(bodyData);
            formEvaluation.body_density = bodyData.bodyDensity;
            formEvaluation.fat_percentage = bodyData.fatPercentage;
            formEvaluation.body_fat = bodyData.bodyFat;
            formEvaluation.body_mass = bodyData.bodyMass;
            formEvaluation.bmr = bodyData.bmr;
            
            const evaluation = await database.Evaluations.create(formEvaluation);
            return res.status(201).json(evaluation);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    }

    static async updateEvaluation(req, res) {
        const { id } = req.params;
        const formEvaluation = req.body;
        try {
            const evaluation = await database.Evaluations.findByPk(id);
            if(evaluation === null) return res.status(404).json({ message: 'Evaluation not found' });
            await database.Evaluations.update(formEvaluation, {
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({ message: `ID ${id} updated` });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async deleteEvaluation(req, res) {
        const { id } = req.params;
        
        try {
            const evaluation = await database.Evaluations.findByPk(id);
            if(evaluation === null) return res.status(404).json({ message: 'Evaluation not found'})

            await database.Evaluations.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({ message: `Evaluation with ID ${id} deleted` });

        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async calculateBodyData(evaluation) {
        const bodyDensity = await bd.calculateBodyDensity(evaluation);
        const fatPercentage = await bd.calculateFatPercentage(evaluation);
        const bodyFat = await bd.calculateBodyFat(evaluation);
        const bodyMass = await bd.calculateBodyMass(evaluation);
        const bmr = await bd.calculateBasalMetabolicRate(evaluation);

        const bodyData = {
            bodyDensity: bodyDensity,
            fatPercentage: fatPercentage,
            bodyFat: bodyFat,
            bodyMass: bodyMass,
            bmr: bmr
        };

        return bodyData;
    }
}

module.exports = EvaluationController;