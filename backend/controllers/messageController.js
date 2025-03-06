import asyncHandler from '../middleware/asyncHandler.js';
import Message from '../models/messageModel.js';


// @desc    Submit a new message
// @route   POST /api/messages
// @access  Public
const submitMessage = asyncHandler(async (req, res) => {
  const { name, email, subject, description } = req.body;

  const message = await Message.create({
    name, email, subject, description
  });

  if (message) {
    res.status(200).json({ message: 'Message sent successfully' });
  } else {
    res.status(400);
    throw new Error('Unable to send message');
  }
});


// @desc    Get all messages
// @route   GET /api/messages
// @access  Private/Admin
const getMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find({});
  res.json(messages);
});

// @desc    Delete message
// @route   DELETE /api/messages/:id
// @access  Private/Admin
const deleteMessage = asyncHandler(async (req, res) => {
  const message = await Message.findById(req.params.id);

  if (message) {
    await Message.deleteOne({ _id: message._id });
    res.json({ message: 'Message deleted' });
  } else {
    res.status(404);
    throw new Error('Message not found');
  }
});

// @desc    Get message by ID
// @route   GET /api/messages/:id
// @access  Private/Admin
const getMessageById = asyncHandler(async (req, res) => {
  const message = await Message.findById(req.params.id);

  if (message) {
    res.json(message);
  } else {
    res.status(404);
    throw new Error('Message not found');
  }
});


export {
  submitMessage,
  getMessages,
  deleteMessage,
  getMessageById
};
