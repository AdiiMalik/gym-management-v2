import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { changePassword } from '../controllers/auth/changePassword.js';
// import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();
// Helper function for error responses
const errorResponse = (res, status, message, error = null) => {
  const response = { 
    success: false,
    message 
  };
  
  if (error && process.env.NODE_ENV === 'development') {
    response.error = error.message;
  }
  
  return res.status(status).json(response);
};

router.put('/change-password', authMiddleware, changePassword);
// ✅ Registration endpoint
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Validation
    if (!name || !email || !password) {
      return errorResponse(res, 400, 'All fields are required');
    }

    if (password.length < 6) {
      return errorResponse(res, 400, 'Password must be at least 6 characters');
    }

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return errorResponse(res, 400, 'User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userCount = await User.countDocuments();

    let finalRole = 'member';
    let status = 'active';

    if (userCount === 0) {
      // First user → superadmin
      finalRole = 'superadmin';
    } else if (role === 'admin') {
      // New admin → pending approval
      finalRole = 'admin';
      status = 'pending';
    }

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: finalRole,
      status: status,
    });

    await newUser.save();

    // JWT Token only for active users
    if (status !== 'active') {
      return res.status(201).json({
        success: true,
        message: `Admin registration request sent. Waiting for superadmin approval.`,
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
          status: newUser.status
        }
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: newUser._id, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Return success response
    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        status: newUser.status
      }
    });

  } catch (err) {
    console.error('Registration error:', err);
    return errorResponse(res, 500, 'Server error during registration', err);
  }
});

// ✅ Login endpoint
router.post('/login', async (req, res) => {
  console.log('📥 Incoming login request body:', req.body);
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      return errorResponse(res, 400, 'Email and password are required');
    }

    // Find user with password
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return errorResponse(res, 401, 'Invalid credentials');
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return errorResponse(res, 401, 'Invalid credentials');
    }

    // Generate token
    const token = jwt.sign(
      { id: user._id ,role: user.role},
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Return user data (without password)
    const userData = user.toObject();
    delete userData.password;

    return res.json({
      success: true,
      message: 'Login successful',
      token,
      user: userData
    });

  } catch (error) {
    console.error('Login error:', error);
    return errorResponse(res, 500, 'Server error during login', error);
  }
});

// ✅ Account update endpoint
router.put('/update', authMiddleware, async (req, res) => {
  try {
    const { currentPassword, newEmail, newPassword } = req.body;
    const user = await User.findById(req.user.id).select('+password');

    if (!user) {
      return errorResponse(res, 404, 'User not found');
    }

    // Verify current password
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return errorResponse(res, 401, 'Current password is incorrect');
    }

    // Update email if provided
    if (newEmail && newEmail !== user.email) {
      const emailExists = await User.findOne({ email: newEmail });
      if (emailExists) {
        return errorResponse(res, 400, 'Email already in use');
      }
      user.email = newEmail;
    }

    // Update password if provided
    if (newPassword) {
      if (newPassword.length < 6) {
        return errorResponse(res, 400, 'Password must be at least 6 characters');
      }
      user.password = await bcrypt.hash(newPassword, 10);
    }

    await user.save();

    // Return updated user data
    const userData = user.toObject();
    delete userData.password;

    return res.json({
      success: true,
      message: 'Account updated successfully',
      user: userData
    });

  } catch (err) {
    console.error('Update error:', err);
    return errorResponse(res, 500, 'Server error during update', err);
  }
});

router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error in /me route:', error);
    res.status(500).json({ message: 'Server error' });
  }
});




export default router;