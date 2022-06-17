const { Router } = require('express');
const EvaluationController = require('../controllers/EvaluationController.js');

const router = Router();

router.get('/evaluations', EvaluationController.readAllEvaluations);
router.get('/evaluations/names', EvaluationController.readAllEvaluationsNames); //rever
router.post('/evaluations', EvaluationController.createEvaluation);
router.put('/evaluations/:id', EvaluationController.updateEvaluation); //rever
//método delete

module.exports = router;