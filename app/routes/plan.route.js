const { planController } = require('../controllers');

module.exports = (routes) => {
  routes.get('/plans', planController.plans);
};
