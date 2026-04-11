const Service = require('../models/Service');

const listServices = async (_req, res, next) => {
  try {
    const services = await Service.find()
      .populate('createdBy', 'name email')
      .sort({ createdAt: -1 });

    res.json({ services });
  } catch (error) {
    next(error);
  }
};

const createService = async (req, res, next) => {
  try {
    const {
      title,
      category,
      summary,
      description,
      price = '',
      deliveryTime = '',
    } = req.body;

    if (!title || !category || !summary || !description) {
      res.status(400);
      throw new Error('Title, category, summary, and description are required');
    }

    const service = await Service.create({
      title,
      category,
      summary,
      description,
      price,
      deliveryTime,
      createdBy: req.user._id,
    });

    const populatedService = await service.populate('createdBy', 'name email');
    res.status(201).json({ service: populatedService });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listServices,
  createService,
};
