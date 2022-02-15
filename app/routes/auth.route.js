const { authController } = require('../controllers');

module.exports = (routes) => {
  routes.post('/auth', authController.auth);
};
