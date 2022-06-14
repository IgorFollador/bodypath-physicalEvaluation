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

    static readAllEvaluationsNames = (req, res) => {
        axios
            .get(`${process.env.API_CUSTOMER}/users/names/3`)
            .then(res => {
                console.log(`statusCode: ${res.status}`);
                console.log(res.body);
            })
            .catch(error => {
                console.error("erro");
            });
        res.status(200).json({message: "22"});
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