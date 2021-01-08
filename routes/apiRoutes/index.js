const router = require('express').Router();

router.use(require('./animalRoutes'));
router.use(require('./zookeeperRouts'))

module.exports = router;