const { users } = require('../../db/models');

const getUser = async(email)=>{
  return users.findOne({
    where: { email },
    raw : true,
  });
};

module.exports = {
  getUser,
};