require('dotenv-safe').config();
const { mapReduce } = require('../models/Evaluation.js');
const Evaluations = require('../models/Evaluation.js');
const axios = require('axios');
class EvaluationController {
    static readAllEvaluations = (req, res) => {
        Evaluations.find((err, evaluations) => {
            res.status(200).json(evaluations);
       })
    }

    static readAllEvaluationsByProfessionalUserId = (req, res) => {
        const { id } = req.params;

        Evaluations.find({ professionalId: id }, (err, evaluations) => {
            res.status(200).json(evaluations);
       })

    }

    static readAllEvaluationsNames = async (req, res) => {

        await axios.get(`http://localhost:3001/users/names`)
            .then(async response => {
                const allNames  = response.data;
                const allEvaluations = await Evaluations.find({});
                allEvaluations.forEach(evaluation => {
                    evaluation.username = "NÃO ENCONTRADO"
                    allNames.forEach(user => {
                        if(evaluation.user_id == user.id) {
                            evaluation.username = user.firstName;
                            console.log(evaluation);
                        } else {
                            evaluation.username = "NÃO ENCONTRADO"
                        }
                    });
                });
                res.status(200).json(allEvaluations);
            })
            .catch(error => {
                console.error(error);
                res.status(500).json({message: 'Error in read names'});
            });    
    }

    static createEvaluation = (req, res) => {
        let evaluation = new Evaluations(req.body);

        evaluation.save((err) => {
            if(err) {
                res.status(500).send({
                    message: `${err.message} - Error to create evaluation.`
                })
            } else {
                res.status(201).send(evaluation.toJSON())
            }
        })
    }

    static updateEvaluation = (req, res) => {
        let id = req.params.id;
        let evaluation = req.body;
        Evaluations.updateById(req.body, (err) => {
            if (err) {
                res.status(500).send({
                    message: `${err.message} - Error to update evaluation.`
                })
            } else {
                res.status(200).send({ message: "Updated" })
            }
        })
    }
}

module.exports = EvaluationController;