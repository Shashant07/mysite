import express from 'express';
import {
  submitMessage,
  getMessages,
  deleteMessage,
  getMessageById
} from '../controllers/messageController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(submitMessage).get(protect, admin, getMessages);

router
  .route('/:id')
  .delete(protect, admin, deleteMessage)
  .get(protect, admin, getMessageById)

export default router;
