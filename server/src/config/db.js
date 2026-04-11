const mongoose = require('mongoose');

const connectDatabase = async () => {
  const mongoUri = process.env.MONGODB_URI || 'mongodb+srv://IRINGIRE:hubert2007@cluster0.0xdxxax.mongodb.net/nurox_auth?majority=true&w=majority';

  if (!mongoUri) {
    throw new Error('MONGODB_URI is missing from the environment');
  }

  const connection = await mongoose.connect(mongoUri);
  console.log(`MongoDB connected: ${connection.connection.host}`);
};

module.exports = connectDatabase;
