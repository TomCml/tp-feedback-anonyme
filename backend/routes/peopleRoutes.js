const router = require('express').Router();
const { getPeople } = require('.../controllers/peopleController');

router.get('/', getPeople);

module.exports = router;