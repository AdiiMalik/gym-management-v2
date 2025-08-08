import bcrypt from 'bcryptjs';
import User from '../../models/User.model.js';

// export const changePassword = async (req, res) => {
//   const { currentPassword, newPassword } = req.body;
//   const userId = req.user._id;

//   try {
//     const user = await User.findById(userId).select('+password');

//     const isMatch = await bcrypt.compare(currentPassword, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Current password is incorrect' });
//     }

//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(newPassword, salt);

//     // ✅ Reset mustChangePassword flag here
//     user.mustChangePassword = false;

//     await user.save();

//     res.json({ message: 'Password updated successfully' });
//   } catch (error) {
//     console.error('Password change error:', error);
//     res.status(500).json({ message: 'Something went wrong' });
//   }
// };
export const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const userId = req.user._id;

  try {
    console.log("Incoming password change request for user:", userId);

    const user = await User.findById(userId).select('+password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    user.mustChangePassword = false;

    await user.save();

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('❌ Password change error:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
