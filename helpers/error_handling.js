const response = require('./response');

const ok = (res, message, data = []) => {
  const type = 'success';
  return res.send(response(message, data, type, false));
};

const created = (res, message, data = []) => {
  const type = 'success';
  return res.status(201).send(response(message, data, type, false)); 
};

const badRequest = (res, message) => {
  const type = 'invalid_request_error';
  return res.status(400).send(response(message, [], type));
};

const notFound = (res, message) => {
  const type = 'invalid_request_error';
  return res.status(404).send(response(message, [], type));
};

const internalError = (res, message) => {
  const type = 'api_error';
  return res.status(500).send(response(message, [], type));
};

const authenticationFailed = (res, message) => {
  const type = 'authentication_error';
  return res.status(401).send(response(message, [], type));
};

const duplicate = (res, message) => {
  const type = 'duplicate_data_error';
  return res.status(409).send(response(message, [], type));
};


module.exports = {
  ok,
  created,
  badRequest,
  notFound,
  internalError,
  authenticationFailed,
  duplicate,
};