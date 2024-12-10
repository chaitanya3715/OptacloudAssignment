import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { catchAsync } from '../utils/catchAsync.js';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

export const register = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = await User.create({ email, password });
  res.status(201).json({
    token: generateToken(user._id),
    user: {
      id: user._id,
      email: user.email
    }
  });
});

export const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({
    token: generateToken(user._id),
    user: {
      id: user._id,
      email: user.email
    }
  });
});