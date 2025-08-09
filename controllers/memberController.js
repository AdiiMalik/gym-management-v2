
import Member from '../models/Member.model.js';
import User from '../models/User.model.js';


// ✅ Add Member
// export const addMember = async (req, res) => {
//   try {
//     const newMember = new Member(req.body);
//     await newMember.save();
//     res.status(201).json(newMember);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
export const addMember = async (req, res) => {
  try {
    const { name, email, age, phone, membershipType } = req.body;

    // 🔍 Step 1: Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found with that email' });
    }

    // 🔁 Step 2: Create member linked to user._id
    const newMember = new Member({
      name,
      email,
      age,
      phone,
      membershipType,
      userId: user._id, // ✅ Automatically linked
    });

    // 💾 Save to DB
    await newMember.save();

    res.status(201).json({ message: 'Member created successfully', member: newMember });
  } catch (error) {
    console.error('❌ Error creating member:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
// export const addMember = async (req, res) => {
//   try {
//     const { name, email, age, phone, membershipType, userId } = req.body;

//     // ✅ Use userId directly instead of searching by email
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found with that ID' });
//     }

//     const newMember = new Member({
//       name,
//       email,
//       age,
//       phone,
//       membershipType,
//       userId: user._id,
//     });

//     await newMember.save();

//     res.status(201).json({ message: 'Member created successfully', member: newMember });
//   } catch (error) {
//     console.error('❌ Error creating member:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };
// ✅ Get All Members
export const getMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get One Member
export const getMemberById = async (req, res) => {
  try {
    // const member = await Member.findById(req.params.id);
    const member = await Member.findOne({ userId: req.user._id });
    if (!member) return res.status(404).json({ message: 'Member not found' });
    res.json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Update Member
export const updateMember = async (req, res) => {
  try {
    const updated = await Member.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ message: 'Member not found' });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update member', error });
  }
};

// ✅ Delete Member
export const deleteMember = async (req, res) => {
  try {
    const deleted = await Member.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Member not found' });
    res.json({ message: 'Member deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// export const getMemberProfile = async (req, res) => {
//   try {
//     const member = await Member.findOne({ userId: req.user.id });

//     if (!member) {
//       return res.status(404).json({ message: 'Member not found' });
//     }

//     // ✅ Updated response:
//         res.json({
//       id: member._id,
//       name: member.name,
//       email: member.email,
//       role: member.role,
//     });
//   } catch (error) {
//     console.error('Error fetching member profile:::', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };


// export const getMemberProfile = async (req, res) => {
//   try {
//     const member = await Member.findOne({ userId: req.user.id }).populate('userId');

//     if (!member) {
//       return res.status(404).json({ message: 'Member not found' });
//     }

//     res.json({
//       id: member._id,
//       name: member.name,
//       email: member.email,
//       role: member.userId.role, // from User model
//       phone: member.phone,
//       age: member.age,
//       membershipType: member.membershipType,
//     });
//   } catch (error) {
//     console.error('Error fetching member profile:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

export const getMemberProfile = async (req, res) => {
  console.log("👉 req.user.id:", req.user?.id);

  try {
    const member = await Member.findOne({ userId: req.user.id }).populate('userId');

  if (!member) {
  return res.status(200).json({
    success: false,
    notFound: true,
    message: 'Your profile has not been created yet. Please contact the gym admin.',
  });
}


    res.status(200).json({
      success: true,
      message: 'Profile fetched successfully',
      profile: {
        id: member._id,
        name: member.name,
        email: member.email,
        role: member.userId.role,
        phone: member.phone,
        age: member.age,
        membershipType: member.membershipType,
      },
    });
  } catch (error) {
    console.error('❌ Error fetching member profile:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong while fetching your profile. Please try again later.',
    });
  }
};
