exports.constants = {
  VALIDATION_ERROR: 'Validation Error',
  NOT_FOUND: 'Not Found',
  INTERNAL_SERVER_ERROR: 'Internal Server Error',
  FORBIDDEN: 'Forbidden',
  UNAUTHORIZED: 'Unauthorized', 
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/contactapp'
};