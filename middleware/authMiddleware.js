// authMiddleware.js
// import jwt from 'jsonwebtoken';

// const authMiddleware = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader?.startsWith('Bearer ')) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   const token = authHeader.split(' ')[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = {
//       id: decoded.id,
//       role: decoded.role,
//     };
//     next();
//   } catch (error) {
//     res.status(403).json({ message: 'Invalid or expired token' });
//   }
// };

// export default authMiddleware;


import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select('+password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Auth error:', error);
    res.status(403).json({ message: 'Invalid or expired token' });
  }
};

export default authMiddleware;

// import jwt from 'jsonwebtoken';
// import Member from '../models/Member.model.js'; // ✅ import Member model

// export const verifyToken = async (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   const token = authHeader.split(' ')[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const member = await Member.findById(decoded.id).select('-password');

//     if (!member) {
//       return res.status(401).json({ message: 'Member not found' });
//     }

//     req.user = member;
//     next();
//   } catch (error) {
//     console.error('❌ Token verify error:', error);
//     return res.status(401).json({ message: 'Invalid or expired token' });
//   }
// };
