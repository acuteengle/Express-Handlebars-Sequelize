const router = require('express').Router();
const apiRoutes = require('./api');
const uiRoutes = require('./ui-routes.js');

router.use('/api', apiRoutes);
router.use('/', uiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;