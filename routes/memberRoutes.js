
// import express from 'express';
// import {
//   addMember,
//   getMembers,
//   getMemberById,
//   updateMember,
//   deleteMember
// } from '../controllers/memberController.js';
// import authMiddleware from '../middleware/authMiddleware.js';
// import { getMemberProfile } from '../controllers/memberController.js';
// import { verifyToken } from '../middleware/authMiddleware.js';

// const router = express.Router();

// router.get('/profile', verifyToken, getMemberProfile);
// // ✅ Protect all member routes
// router.use(authMiddleware);

// // ✅ Add & Get Members
// router.post('/', addMember);
// router.get('/', getMembers);

// // ✅ Get, Update, Delete by ID
// router.get('/:id', getMemberById);
// router.put('/:id', updateMember);
// router.delete('/:id', deleteMember);

// //✅ Get current logged-in member's profile
// router.get('/profile', verifyToken, async (req, res) => {
//   try {
//     const member = await User.findById(req.user.id).select('-password');
//     if (member.role !== 'member') {
//       return res.status(403).json({ message: 'Access denied' });
//     }
//     res.json(member);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// export default router;


import express from 'express';
import {
  addMember,
  getMembers,
  getMemberById,
  updateMember,
  deleteMember,
  getMemberProfile
} from '../controllers/memberController.js';
import authMiddleware from '../middleware/authMiddleware.js';


const router = express.Router();

// ✅ Get current logged-in member's profile
  router.get('/profile', authMiddleware, getMemberProfile);


// ✅ Protect all member routes
router.use(authMiddleware); // assuming verifyToken is the correct middleware

// ✅ Add & Get Members
router.post('/', addMember);
router.get('/', getMembers);

// ✅ Get, Update, Delete by ID
router.get('/:id', getMemberById);
router.put('/:id', updateMember);
router.delete('/:id', deleteMember);

export default router;
