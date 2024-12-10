import Address from '../models/address.model.js';
import { catchAsync } from '../utils/catchAsync.js';

export const createAddress = catchAsync(async (req, res) => {
  const address = await Address.create({
    ...req.body,
    userId: req.user.id
  });
  res.status(201).json(address);
});

export const getAddresses = catchAsync(async (req, res) => {
  const addresses = await Address.find({ userId: req.user.id });
  res.json(addresses);
});

export const updateAddress = catchAsync(async (req, res) => {
  const address = await Address.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    req.body,
    { new: true }
  );
  if (!address) {
    return res.status(404).json({ message: 'Address not found' });
  }
  res.json(address);
});

export const deleteAddress = catchAsync(async (req, res) => {
  const address = await Address.findOneAndDelete({
    _id: req.params.id,
    userId: req.user.id
  });
  if (!address) {
    return res.status(404).json({ message: 'Address not found' });
  }
  res.status(204).send();
});