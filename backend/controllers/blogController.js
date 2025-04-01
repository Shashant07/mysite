import asyncHandler from '../middleware/asyncHandler.js';
import Blog from '../models/blogModel.js';

// @desc    Fetch all blogs
// @route   GET /api/blogs
// @access  Public
const getBlogs = asyncHandler(async (req, res) => {
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

  const count = await Blog.countDocuments({ ...keyword });
  const blogs = await Blog.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ blogs, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch single blog
// @route   GET /api/blogs/:id
// @access  Public
const getBlogById = asyncHandler(async (req, res) => {
  // NOTE: checking for valid ObjectId to prevent CastError moved to separate
  // middleware. See README for more info.

  const blog = await Blog.findById(req.params.id);
  if (blog) {
    return res.json(blog);
  } else {
    // NOTE: this will run if a valid ObjectId but no blog was found
    // i.e. blog may be null
    res.status(404);
    throw new Error('Blog not found');
  }
});

// @desc    Create a blog
// @route   POST /api/blogs
// @access  Private/Admin
const createBlog = asyncHandler(async (req, res) => {
  const blog = new Blog({
    user: req.user._id,
    title: 'Sample title',
    image: '/images/sample.jpg',
    video: '',
    content: 'Sample content',
    tags: '#planet1',
    category: 'Sample category',
    youtube: 'https://youtube.com/planet1_official',
    numReviews: 0,
  });

  const createdBlog = await blog.save();
  res.status(201).json(createdBlog);
});

// @desc    Update a blog
// @route   PUT /api/blogs/:id
// @access  Private/Admin
const updateBlog = asyncHandler(async (req, res) => {
  const { title, image, video, content, tags, category, youtube } =
    req.body;

  const blog = await Blog.findById(req.params.id);

  if (blog) {
    blog.title = title;
    blog.image = image;
    blog.video = video;
    blog.content = content;
    blog.tags = tags;
    blog.category = category;
    blog.youtube = youtube;

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } else {
    res.status(404);
    throw new Error('Blog not found');
  }
});

// @desc    Delete a blog
// @route   DELETE /api/blogs/:id
// @access  Private/Admin
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    await Blog.deleteOne({ _id: blog._id });
    res.json({ message: 'Blog removed' });
  } else {
    res.status(404);
    throw new Error('Blog not found');
  }
});

// @desc    Create new review
// @route   POST /api/blogs/:id/reviews
// @access  Private
const createBlogReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const blog = await Blog.findById(req.params.id);

  if (blog) {
    const alreadyReviewed = blog.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Blog already reviewed');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    blog.reviews.push(review);

    blog.numReviews = blog.reviews.length;

    blog.rating =
      blog.reviews.reduce((acc, item) => item.rating + acc, 0) /
      blog.reviews.length;

    await blog.save();
    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404);
    throw new Error('Blog not found');
  }
});

// @desc    Get top rated blogs
// @route   GET /api/blogs/top
// @access  Public
const getTopBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({}).sort({ rating: -1 }).limit(3);

  res.json(blogs);
});

export {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  createBlogReview,
  getTopBlogs,
};
