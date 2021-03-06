const { planController } = require('../controllers');
const authenticateToken = require('../middleware/authentication');

module.exports = (routes) => {
  routes.get('/plans', planController.plans);
  routes.get('/plan/features', planController.features);
  routes.post('/plan/subscribe', authenticateToken, planController.subscribe);
  routes.post('/plan/subscribe/all', authenticateToken, planController.subscribeAllPlan);
};
