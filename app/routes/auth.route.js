const { authController } = require('../controllers');

module.exports = (routes) => {
  routes.get('/test', authController.auth);
};
