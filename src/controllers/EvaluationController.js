const Evaluations = require('../models/Evaluation.js');

class EvaluationController {
    static readAllEvaluations = (req, res) => {
        Evaluations.find((err, Evaluations) => {
            res.status(200).json(Evaluations);
       })
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

    static readEvaluationsNamesByUser = (req, res) => {
        
    }

    static updateEvaluation = (req, res) => {
        let id = req.params.id;
        let evaluation = req.body;
        evaluation.updateById(req.body, (err) => {
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