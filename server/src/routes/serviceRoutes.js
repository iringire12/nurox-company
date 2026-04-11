const express = require('express');

const { listServices, createService } = require('../controllers/serviceController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(listServices).post(protect, createService);

module.exports = router;
