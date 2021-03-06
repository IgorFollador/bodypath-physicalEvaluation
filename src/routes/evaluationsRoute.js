const { Router } = require('express');
const EvaluationController = require('../controllers/EvaluationController.js');

const router = Router();

router.get('/evaluations', EvaluationController.readAllEvaluations);
router.get('/evaluations/:id', EvaluationController.readEvaluation);
router.get('/evaluations/professional/:id', EvaluationController.readAllEvaluationsByProfessionalId); 
router.get('/evaluations/professional/:id/names', EvaluationController.readAllEvaluationsNamesByProfessionalId);

router.post('/evaluations', EvaluationController.createEvaluation);
router.put('/evaluations/:id', EvaluationController.updateEvaluation);
router.delete('/evaluations/:id', EvaluationController.deleteEvaluation);

module.exports = router;