const response = require('./response');

const ok = (res, message, data = []) => {
  const type = 'success';
  return res.json(response(message, data, type, false)).status(200); 
};

const created = (res, message, data = []) => {
  const type = 'success';
  return res.json(response(message, data, type, false)).status(201); 
};

const badRequest = (res, message) => {
  const type = 'invalid_request_error';
  return res.json(response(message, [], type)).status(400);
};

const notFound = (res, message) => {
  const type = 'invalid_request_error';
  return res.json(response(message, [], type)).status(404);
};

const internalError = (res, message) => {
  const type = 'api_error';
  return res.json(response(message, [], type)).status(500);
};

const authenticationFailed = (res, message) => {
  const type = 'authentication_error';
  return res.json(response(message, [], type)).status(401);
};

module.exports = {
  ok,
  created,
  badRequest,
  notFound,
  internalError,
  authenticationFailed,
};