import User from '../models/User.model.js';

export const isSuperAdmin = async (req, res, next) => {
  const user = await User.findById(req.user.id); // Corrected from userId

  if (!user || user.role !== 'superadmin') {
    return res.status(403).json({ message: "Only super admin can perform this action" });
  }

  next();
};
