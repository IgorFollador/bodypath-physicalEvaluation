const { Router } = require('express');
const EvaluationController = require('../controllers/EvaluationController.js');

const router = Router();

router.get('/evaluations', EvaluationController.readAllEvaluations);
router.post('/evaluations', EvaluationController.createEvaluation);

module.exports = router;