import express from 'express';
import {
  registerMember,
  // loginMember,
  // loginUser
  login
} from '../controllers/userController.js';
import adminMiddleware from '../middleware/adminMiddleware.js';
import authMiddleware from '../middleware/authMiddleware.js';


const router = express.Router();
// router.post('/login', loginUser);
// ✅ Member login route (public)
// router.post('/login-member', loginMember);
router.post('/login', login);

// ✅ Register member route (protected: only admin can do this)

router.post('/register-member', authMiddleware, adminMiddleware, registerMember);
export default router;
