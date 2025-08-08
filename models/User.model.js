import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Required field
  },
  email: {
    type: String,
    required: true,
    unique: true, // No duplicate emails allowed
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Password must be at least 6 characters long'],
    select: false // Password will be excluded from query results unless explicitly selected
  },
  role: {
    type: String,
    enum: ['admin', 'superadmin', 'member'], // Only allow valid roles
    default: 'member', // Default role when not specified
  },
  status: {
    type: String,
    enum: ['active', 'pending', 'rejected'], // Approval status for admin accounts
    default: 'pending',
  },
  mustChangePassword: {
    type: Boolean,
    default: function () {
      return this.role === 'member';
    },
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const User = mongoose.model('User', userSchema);
export default User;
