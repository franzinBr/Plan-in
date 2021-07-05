const { Router } = require('express');

const router = Router();

router.use(require('./Module.route'));
router.use(require('./Class.route'));
router.use(require('./User.route'));
router.use('/v1', router);

module.exports = router;
