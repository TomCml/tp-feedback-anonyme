const router = require('express').Router();
const { getFeedback, writeFeedback } = require('.../controllers/peopleController');

router.get('/', getFeedback);
router.post('/', writeFeedback);

module.exports = router;