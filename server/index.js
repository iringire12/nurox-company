const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const connectDatabase = require('./src/config/db');
const authRoutes = require('./src/routes/authRoutes');
const serviceRoutes = require('./src/routes/serviceRoutes');
const { notFound, errorHandler } = require('./src/middleware/errorMiddleware');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const allowedOrigins = (
  process.env.CLIENT_URLS ||
  process.env.CLIENT_URL ||
  'https://nurox-company-xqn6.vercel.app'
)
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const validateEnvironment = () => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is missing from the environment');
  }

  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI is missing from the environment');
  }
};

const ensureServerReady = async (_req, _res, next) => {
  try {
    validateEnvironment();
    await connectDatabase();
    next();
  } catch (error) {
    next(error);
  }
};

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error('Origin not allowed by CORS'));
    },
  })
);
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', ensureServerReady, authRoutes);
app.use('/api/services', ensureServerReady, serviceRoutes);

app.use(notFound);
app.use(errorHandler);

const startServer = async () => {
  try {
    validateEnvironment();
    await connectDatabase();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server', error.message);
    process.exit(1);
  }
};

if (require.main === module) {
  startServer();
}

module.exports = app;
