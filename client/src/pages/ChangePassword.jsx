import { useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();
const { setUser } = useAuth();
 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await axiosInstance.put('/auth/change-password', {
      currentPassword,
      newPassword
    });

    // ✅ Re-fetch updated user
    const res = await axiosInstance.get('/auth/me');
    setUser(res.data); // 👈 update user context

    toast.success('Password updated successfully! Redirecting...');
    setTimeout(() => navigate('/member-dashboard'), 1000);
  } catch (err) {
    console.error(err);
    toast.error(err.response?.data?.message || 'Password update failed');
  }
};
  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Change Your Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};
export default ChangePassword;
