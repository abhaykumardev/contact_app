const errorhandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.INTERNAL_SERVER_ERROR:
      res.json({ message: 'Internal Server Error', error: err.message });
      break;
    case constants.NOT_FOUND:
      res.json({ message: 'Not Found', error: err.message });
      break;
    case constants.VALIDATION_ERROR:
      res.json({ message: 'Validation Error', error: err.message });
      break;
    case constants.FORBIDDEN:
      res.json({ message: 'Forbidden', error: err.message });
      break;
    case constants.UNAUTHORIZED:
      res.json({ message: 'Unauthorized', error: err.message });
      break;
  }
};

module.exports = errorhandler;