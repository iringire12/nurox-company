const mongoose = require('mongoose');

let cachedConnection = global.mongooseConnection;

if (!cachedConnection) {
  cachedConnection = global.mongooseConnection = {
    connection: null,
    promise: null,
  };
}

const connectDatabase = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error('MONGODB_URI is missing from the environment');
  }

  if (cachedConnection.connection) {
    return cachedConnection.connection;
  }

  if (!cachedConnection.promise) {
    cachedConnection.promise = mongoose.connect(mongoUri).then((mongooseInstance) => {
      console.log(`MongoDB connected: ${mongooseInstance.connection.host}`);
      return mongooseInstance.connection;
    });
  }

  cachedConnection.connection = await cachedConnection.promise;
  return cachedConnection.connection;
};

module.exports = connectDatabase;
