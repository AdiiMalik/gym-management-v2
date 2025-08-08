// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';
// import User from '../models/User.model.js'; // Make sure path is correct

// export const registerMember = async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already registered' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const userCount = await User.countDocuments();
//       let assignedRole = 'member';
//     let status = 'active';

//     if (userCount === 0) {
//       assignedRole = 'superadmin';
//     } else if (role === 'admin') {
//       assignedRole = 'pending-admin';
//       status = 'pending';
//     }
//     const newUser = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//       role: userCount === 0 ? 'superadmin' : (role || 'member'), // ✅ secure
//     });

//     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
//       expiresIn: '1h',
//     });

//     res.status(201).json({
//       success: true,
//       message: 'User registered successfully',
//       token,
//       user: {
//         id: newUser._id,
//         name: newUser.name,
//         email: newUser.email,
//         role: newUser.role, // ✅ include role in response
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Registration failed', error: error.message });
//   }
// };


// // ✅ Member Login (admin role check here seems incorrect — should be "member")
// export const loginMember = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user || user.role !== 'member') {
//       return res.status(401).json({ message: 'Invalid credentials or not a member' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: 'Incorrect password' });

//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' }
//     );

//     res.status(200).json({
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Internal error' });
//   }
// };

// // ✅ General User Login (any role)
// export const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ message: 'User not found' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' }
//     );

//     res.status(200).json({
//       token,
//       user: {
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       }
//     });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };



import User from '../models/User.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Member from '../models/Member.model.js';
// ✅ Member Registration
// export const registerMember = async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already registered' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const userCount = await User.countDocuments();

//     let assignedRole = 'member';
//     let status = 'active';

//     if (userCount === 0) {
//       assignedRole = 'superadmin';
//     } else if (role === 'admin') {
//       assignedRole = 'pending-admin';
//       status = 'pending';
//     }

//     const newUser = await User.create({
  
//       name,
//       email,
//       password: hashedPassword,
//       role: assignedRole,
//       status,
//     });

// await newMember.save();
//     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
//       expiresIn: '1h',
//     });

//     res.status(201).json({
//       success: true,
//       message: 'User registered successfully',
//       token,
//       user: {
//         id: newUser._id,
//         name: newUser.name,
//         email: newUser.email,
//         role: newUser.role,
//         status: newUser.status,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Registration failed', error: error.message });
//   }
// };


// export const registerMember = async (req, res) => {
//   const { name, email, role } = req.body;

//   try {
//     // Check if user already exists
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // ✅ Set a temporary password (you can randomize this later)
//     const tempPassword = 'member123';
//     const hashedPassword = await bcrypt.hash(tempPassword, 10);

//     // ✅ Create user with mustChangePassword flag for members
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword,
//       role,
//       mustChangePassword: role === 'member', // true for member
//       status: role === 'member' ? 'active' : 'pending',
//     });

//     await newUser.save();

//     // ✅ Auto-create member profile if role is 'member'
//     if (role === 'member') {
//       const newMember = new Member({
//         name,
//         email,
//         age: 25, // default or replace
//         phone: '0000000000',
//         membershipType: 'Gold',
//         userId: newUser._id,
//       });

//       await newMember.save();
//     }

//     // ✅ Return temp password to show or send
//     res.status(201).json({ 
//       message: "Member registered successfully", 
//       tempPassword: tempPassword // optional: show in toast or admin copy
//     });

//   } catch (error) {
//     console.error("Error registering member:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
export const registerMember = async (req, res) => {
  const { name, email, role } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Set a temporary password
    const tempPassword = 'member123'; // or randomize
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    // Create user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      mustChangePassword: role === 'member',
      status: role === 'member' ? 'active' : 'pending', // ✅ Important
    });

    await newUser.save();

    // Auto-create member profile
    if (role === 'member') {
      const newMember = new Member({
        name,
        email,
        age: 25,
        phone: '0000000000',
        membershipType: 'Gold',
        userId: newUser._id,
      });

      await newMember.save();
    }

    res.status(201).json({ 
      message: "Member registered successfully", 
      tempPassword 
    });

  } catch (error) {
    console.error("Error registering member:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// export const registerMember = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // 1. Check if email already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already exists' });
//     }

//     // 2. Create user with role: 'member'
//     const newUser = await User.create({
//       name,
//       email,
//       password,
//       role: 'member',
//       mustChangePassword: true, // optional
//     });

//     // 3. Create member profile linked to this user
//     await Member.create({
//       userId: newUser._id,
//       name,
//       email,
//       phone: '',
//       age: '',
//       membershipType: '',
//     });

//     res.status(201).json({ message: 'Member registered successfully' });
//   } catch (err) {
//     console.error('Register member error:', err);
//     res.status(500).json({ message: 'Server error during registration' });
//   }
// };
// ✅ Member Login
// export const loginMember = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user || user.role !== 'member') {
//       return res.status(401).json({ message: 'Invalid credentials or not a member' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: 'Incorrect password' });

//     const token = jwt.sign(
//       { id: user._id, role: user.role }, // include role in token
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' }
//     );

//     res.status(200).json({
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//         status: user.status || 'active', // ✅ include status if your app uses it
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Internal error', error: error.message });
//   }
// };
export const loginMember = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || user.role !== 'member') {
      return res.status(401).json({ message: 'Invalid credentials or not a member' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Incorrect password' });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status || 'active',
        mustChangePassword: user.mustChangePassword || false, // ✅ ADD THIS LINE
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal error', error: error.message });
  }
};

// export const loginMember = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const member = await Member.findOne({ email });

//     if (!member) {
//       return res.status(404).json({ message: "Member not found" });
//     }

//     const isMatch = await bcrypt.compare(password, member.password);
//     if (!isMatch) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     const token = jwt.sign(
//       { id: member._id, role: member.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     res.json({ token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// ✅ General Login (Admin or Superadmin)
// controllers/userController.js


export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // 🔥 FIXED: Only block login if status is 'pending'
    if ((user.role === 'admin' || user.role === 'superadmin') && user.status === 'pending') {
      return res.status(403).json({ message: 'Your admin request is still pending approval.' });
    }

    // ✅ Login allowed
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    return res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server error during login' });
  }
};
