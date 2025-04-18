const router = require('express').Router();
const {feedbackValidator} = require('../validator/feedbackValidator');
const { getFeedback, writeFeedback } = require('../controllers/feedbackController');
const {runValidation} = require('../validator/runValidation');


router.get('/', getFeedback);
router.post('/', feedbackValidator, runValidation, writeFeedback);


module.exports = router;