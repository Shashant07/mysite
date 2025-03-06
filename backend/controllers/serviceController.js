import asyncHandler from '../middleware/asyncHandler.js';
import Service from '../models/serviceModel.js';

// @desc    Fetch all services
// @route   GET /api/services
// @access  Public
const getServices = asyncHandler(async (req, res) => {
  const pageSize = process.env.PAGINATION_LIMIT;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const count = await Service.countDocuments({ ...keyword });
  const services = await Service.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ services, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch single service
// @route   GET /api/services/:id
// @access  Public
const getServiceById = asyncHandler(async (req, res) => {
  // NOTE: checking for valid ObjectId to prevent CastError moved to separate
  // middleware. See README for more info.

  const service = await Service.findById(req.params.id);
  if (service) {
    return res.json(service);
  } else {
    // NOTE: this will run if a valid ObjectId but no service was found
    // i.e. service may be null
    res.status(404);
    throw new Error('Service not found');
  }
});

// @desc    Create a service
// @route   POST /api/services
// @access  Private/Admin
const createService = asyncHandler(async (req, res) => {
  const service = new Service({
    name: 'Sample name',
    user: req.user._id,
    image: '/images/sample.jpg',
    oneLine: 'Sample brand',
    s_Offering: 'Sample offering1, Sample offering 2',
    s_Process: 'Sample process1, Sample process2',
    category: 'Sample category',
    description: 'Sample description',
    status: false,
    numReviews: 0,
  });

  const createdService = await service.save();
  res.status(201).json(createdService);
});

// @desc    Update a service
// @route   PUT /api/services/:id
// @access  Private/Admin
const updateService = asyncHandler(async (req, res) => {
  const { name, image, oneLine, s_Offering, s_Process, category, description, status,  } =
    req.body;

  const service = await Service.findById(req.params.id);

  if (service) {
    service.name = name;
    service.image = image;
    service.oneLine = oneLine;
    service.s_Offering = s_Offering;
    service.s_Process = s_Process;
    service.category = category;
    service.description = description;
    service.status = status;

    const updatedService = await service.save();
    res.json(updatedService);
  } else {
    res.status(404);
    throw new Error('Service not found');
  }
});

// @desc    Delete a service
// @route   DELETE /api/services/:id
// @access  Private/Admin
const deleteService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);

  if (service) {
    await Service.deleteOne({ _id: service._id });
    res.json({ message: 'Service removed' });
  } else {
    res.status(404);
    throw new Error('Service not found');
  }
});

// @desc    Create new review
// @route   POST /api/services/:id/reviews
// @access  Private
const createServiceReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const service = await Service.findById(req.params.id);

  if (service) {
    const alreadyReviewed = service.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Service already reviewed');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    service.reviews.push(review);

    service.numReviews = service.reviews.length;

    service.rating =
      service.reviews.reduce((acc, item) => item.rating + acc, 0) /
      service.reviews.length;

    await service.save();
    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404);
    throw new Error('Service not found');
  }
});

// @desc    Get top rated services
// @route   GET /api/services/top
// @access  Public
const getTopServices = asyncHandler(async (req, res) => {
  const services = await Service.find({}).sort({ rating: -1 }).limit(3);

  res.json(services);
});

export {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
  createServiceReview,
  getTopServices,
};
