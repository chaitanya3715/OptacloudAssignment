import express from 'express';
import { protect } from '../middleware/auth.middleware.js';
import {
  createAddress,
  getAddresses,
  updateAddress,
  deleteAddress
} from '../controllers/address.controller.js';

const router = express.Router();

router.use(protect);

router.route('/')
  .get(getAddresses)
  .post(createAddress);

router.route('/:id')
  .put(updateAddress)
  .delete(deleteAddress);

export default router;