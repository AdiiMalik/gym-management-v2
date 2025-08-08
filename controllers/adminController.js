// adminController.js
import User from '../models/User.model.js';

// Get all pending admins
export const getPendingAdmins = async (req, res) => {
  try {
    const pendingAdmins = await User.find({ role: 'admin', status: 'pending' }).select('-password');
    res.status(200).json({ success: true, admins: pendingAdmins });
  } catch (err) {
    console.error('❌ Get pending admins error:', err);
    res.status(500).json({ success: false, message: 'Server error while fetching pending admins' });
  }
};

export const approveAdmin = async (req, res) => {
  try {
    const { action } = req.body;
    const admin = await User.findById(req.params.id);

    if (!admin || admin.role !== 'admin') {
      return res.status(404).json({ message: 'Admin not found or invalid role' });
    }

    if (action === 'approve') {
      admin.status = 'active'; // ✅ match schema enum
      await admin.save();
      return res.status(200).json({ message: 'Admin approved successfully' });
    }

    if (action === 'reject') {
      admin.status = 'rejected';
      await admin.save();
      return res.status(200).json({ message: 'Admin rejected successfully' });
    }

    res.status(400).json({ message: 'Invalid action' });
  } catch (error) {
    console.error('Approve/Reject Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Approve or reject admin
// export const approveAdmin = async (req, res) => {
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
// };
// export const approveAdmin = async (req, res) => {
//   const { id } = req.params;
//   const { action } = req.body;

//   if (!['approve', 'reject'].includes(action)) {
//     return res.status(400).json({ message: "Invalid action" });
//   }

//   try {
//     const user = await User.findById(id);

//     if (!user || user.role !== 'admin' || user.status !== 'pending') {
//       return res.status(404).json({ message: "Pending admin not found" });
//     }

//     if (action === 'approve') {
//       user.status = 'approved';
//     } else if (action === 'reject') {
//       user.status = 'rejected';
//     }

//     await user.save();

//     res.status(200).json({ message: `Admin ${action}ed successfully` });
//   } catch (err) {
//     res.status(500).json({ message: "Server error", error: err.message });
//   }
// };



