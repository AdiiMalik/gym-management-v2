// import express from 'express';
// import  authMiddleware  from '../middleware/authMiddleware.js';
// import User from '../models/User.model.js';
// const router = express.Router();
// import { isSuperAdmin } from '../middleware/isSuperAdmin.js'; // named import

// // Get all pending admins
// router.get('/pending', authenticate, authorizeSuperAdmin, getPendingAdmins);

// router.get('/admins/pending', authMiddleware, async (req, res) => {
//   try {
//     if (req.user.role !== 'superadmin') {
//       return res.status(403).json({ success: false, message: 'Access denied. Superadmin only.' });
//     }

//     const pendingAdmins = await User.find({ role: 'admin', status: 'pending' }).select('-password');
//     res.status(200).json({ success: true, admins: pendingAdmins });
//   } catch (err) {
//     console.error('Get pending admins error:', err);
//     res.status(500).json({ success: false, message: 'Server error while fetching pending admins' });
//   }
// });

// // Approve or reject admin
// router.patch('/admins/:id/approve', authMiddleware, async (req, res) => {
//   try {
//     if (req.user.role !== 'superadmin') {
//       return res.status(403).json({ success: false, message: 'Access denied. Superadmin only.' });
//     }

//     const adminId = req.params.id;
//     const { action } = req.body;

//     const admin = await User.findById(adminId);
//     if (!admin || admin.role !== 'admin') {
//       return res.status(404).json({ success: false, message: 'Admin not found or invalid role' });
//     }

//     if (action === 'approve') {
//       admin.status = 'active';
//       await admin.save();
//       return res.status(200).json({ success: true, message: 'Admin approved successfully' });
//     }

//     if (action === 'reject') {
//       await admin.remove();
//       return res.status(200).json({ success: true, message: 'Admin rejected and removed' });
//     }

//     return res.status(400).json({ success: false, message: 'Invalid action. Use "approve" or "reject".' });
//   } catch (err) {
//     console.error('Approve/Reject admin error:', err);
//     res.status(500).json({ success: false, message: 'Server error during approval process' });
//   }
// });



// router.get('/pending-admins', authMiddleware, isSuperAdmin, async (req, res) => {
//   const pendingAdmins = await User.find({ role: 'admin', status: 'pending' });
//   res.json(pendingAdmins);
// });
// router.put('/approve/:id', authenticate, authorizeSuperAdmin, approveAdmin);

// router.put('/approve-admin/:id', authMiddleware, isSuperAdmin, async (req, res) => {
//   await User.findByIdAndUpdate(req.params.id, { status: 'active' });
//   res.json({ message: "Admin approved" });
// });
// export default router;
// import express from 'express';
// const router = express.Router();

// import authMiddleware from '../middleware/authMiddleware.js';
// import { isSuperAdmin } from '../middleware/isSuperAdmin.js';
// import { getPendingAdmins, approveAdmin } from '../controllers/adminController.js'; // adjust the path if needed


// import User from '../models/User.model.js';

// // ✅ Get all pending admins
// router.get('/admins/pending', authMiddleware,getPendingAdmins, isSuperAdmin, async (req, res) => {
//   try {
//     const pendingAdmins = await User.find({ role: 'admin', status: 'pending' }).select('-password');
//     res.status(200).json({ success: true, admins: pendingAdmins });
//   } catch (err) {
//     console.error('❌ Get pending admins error:', err);
//     res.status(500).json({ success: false, message: 'Server error while fetching pending admins' });
//   }
// });

// // ✅ Approve or reject pending admin
// router.patch('/admins/:id/approve', authMiddleware, approveAdmin,isSuperAdmin, async (req, res) => {
//   try {
//     const { action } = req.body;
//     const admin = await User.findById(req.params.id);

//     if (!admin || admin.role !== 'admin') {
//       return res.status(404).json({ success: false, message: 'Admin not found or invalid role' });
//     }

//     if (action === 'approve') {
//       admin.status = 'active';
//       await admin.save();
//       return res.status(200).json({ success: true, message: 'Admin approved' });
//     }

//     if (action === 'reject') {
//       await admin.remove();
//       return res.status(200).json({ success: true, message: 'Admin rejected and deleted' });
//     }

//     return res.status(400).json({ success: false, message: 'Invalid action' });
//   } catch (err) {
//     console.error('❌ Approve/Reject admin error:', err);
//     res.status(500).json({ success: false, message: 'Server error during approval process' });
//   }
// });

// export default router;



//routes/adminRoutes.js
// import express from 'express';
// import  authMiddleware  from '../middleware/authMiddleware.js';
// import { isSuperAdmin } from '../middleware/isSuperAdmin.js';
// import { getPendingAdmins } from '../controllers/adminController.js';
// import { verifyToken } from '../middleware/authMiddleware.js'
// import { getPendingAdmins, approveAdmin } from '../controllers/adminController.js';
// const router = express.Router();
// // ✅ GET: Get all pending admins
// router.get(
//   '/admins/pending',
//   authMiddleware,
//   isSuperAdmin,
//   getPendingAdmins
// );

// // ✅ PATCH: Approve or reject a pending admin
// router.patch(
//   '/admins/:id/approve',
//   authMiddleware,
//   isSuperAdmin,
//    // Controller handles response
// );

// export default router;


import express from 'express';
// import authMiddleware from '../middleware/authMiddleware.js';
import authMiddleware from '../middleware/authMiddleware.js';
import { isSuperAdmin } from '../middleware/isSuperAdmin.js';
import { getPendingAdmins, approveAdmin } from '../controllers/adminController.js';

const router = express.Router();

router.get('/admins/pending', authMiddleware, isSuperAdmin, getPendingAdmins);
router.patch('/admins/:id/approve', authMiddleware, isSuperAdmin, approveAdmin);

export default router;
