// import React from "react";
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../api/axiosInstance';
// import { useAuth } from '../context/AuthContext';
// import toast from 'react-hot-toast';

// const MemberDashboard = () => {
//   const user = JSON.parse(localStorage.getItem("user"));

//   return (
//     <div className="max-w-2xl mx-auto mt-20 p-6 border rounded-xl shadow">
//       <h2 className="text-3xl font-bold mb-4 text-center">Member Dashboard</h2>

//       {user ? (
//         <div className="space-y-2 text-center">
//           <p>
//             <strong>Name:</strong> {user.name}
//           </p>
//           <p>
//             <strong>Email:</strong> {user.email}
//           </p>
//           <p>
//             <strong>Role:</strong> {user.role}
//           </p>
//         </div>
//       ) : (
//         <p className="text-red-600">User not found</p>
//       )}
//     </div>
//   );
// };
// <button
//   onClick={() => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     window.location.href = "/member-login";
//   }}
//   className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
// >
//   Logout
// </button>
// export default MemberDashboard;



// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const MemberDashboard = () => {
//   const [member, setMember] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMemberData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('/api/members/profile', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setMember(response.data.member);
//       } catch (error) {
//         console.error('❌ Error fetching member profile:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMemberData();
//   }, []);

//   if (loading) return <p>Loading member dashboard...</p>;

//   return (
//     <div>
//       <h1>Welcome, {member?.name}</h1>
//       <p>Join Date: {member?.joinDate}</p>
//       <p>Membership Fee: {member?.fee}</p>
//     </div>
//   );
// };

// export default MemberDashboard;


// import { useEffect, useState } from 'react';
// import axiosInstance from '../api/axiosInstance';


// const MemberDashboard = () => {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const [memberDetails, setMemberDetails] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMemberData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axiosInstance.get("members/profile");
//         console.log("✅ Member data received:", response.data);
//         setMemberDetails(response.data.member);
//       } catch (error) {
//         console.error("Error fetching member profile:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMemberData();
//   }, []);

//   return (
//     <div className="max-w-2xl mx-auto mt-20 p-6 border rounded-xl shadow text-center">
//       <h2 className="text-3xl font-bold mb-4">Member Dashboard</h2>

//       {user ? (
//         <div className="space-y-2">
//           <p><strong>Name:</strong> {user.name}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Role:</strong> {user.role}</p>
//         </div>
//       ) : (
//         <p className="text-red-600">User not found</p>
//       )}

//       {loading ? (
//         <p>Loading more details...</p>
//       ) : memberDetails ? (
//         <div className="mt-4 space-y-2">
//           <p><strong>Join Date:</strong> {memberDetails.joinDate}</p>
//           <p><strong>Membership Fee:</strong> {memberDetails.fee}</p>
//         </div>
//       ) : (
//         <p className="text-red-600 mt-4">Could not load additional details.</p>
//       )}

//       <button
//         onClick={() => {
//           localStorage.removeItem("token");
//           localStorage.removeItem("user");
//           window.location.href = "/member-login";
//         }}
//         className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default MemberDashboard;

// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../api/axiosInstance';
// import { useAuth } from '../context/AuthContext';
// import toast from 'react-hot-toast';

// const MemberDashboard = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const [member, setMember] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // const fetchMemberProfile = async () => {
//   //   console.log('🧠 Logged in user from context:', user);
//   //   try {
//   //     console.log('🧠 Logged in user from context:', user);
//   //     const res = await axiosInstance.get('/members/profile');
//   //     console.log('🧠 Logged in user from context:', user); // 👈 This hits /api/members/profile
//   //     setMember(res.data.member);
//   //   } catch (error) {
//   //     console.error('Error fetching member profile:', error);
//   //     toast.error('Failed to load member profile.');
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
//   const fetchMemberProfile = async () => {
//     try {
//       const res = await axiosInstance.get('/members/profile');
//       setMember(res.data); // ✅ direct data
//     } catch (error) {
//       console.error('Error fetching member profile:', error);
//       toast.error('Failed to load member profile.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     console.log('📡 Fetching member profile on mount');
//     // 👀 Redirect if password change is required
//     if (user?.mustChangePassword) {
//       toast.error('Please change your password to continue.');
//       navigate('/change-password');
//       return; // ❌ Stop here — don’t fetch profile
//     }

//     console.log('📡 Fetching member profile on mount');
//     fetchMemberProfile();
//   }, [user, navigate]);





//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   if (loading) {
//   return (
//     <div className="p-6 text-center">
//       <span className="animate-pulse text-gray-500">Loading profile...</span>
//     </div>
//   );
// }

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">👋 Welcome, {member?.name || 'Member'}</h1>

//       <div className="bg-white shadow-md rounded-xl p-4 space-y-3 border">
//         <p><strong>Email:</strong> {member?.email}</p>
//         <p><strong>Phone:</strong> {member?.phone}</p>
//         <p><strong>Age:</strong> {member?.age}</p>
//         <p><strong>Membership Type:</strong> {member?.membershipType}</p>
//         <p><strong>Role:</strong> {member?.role}</p>
//       </div>

//       <button
//         onClick={handleLogout}
//         className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default MemberDashboard;

// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../api/axiosInstance';
// import { useAuth } from '../context/AuthContext';
// import toast from 'react-hot-toast';

// const MemberDashboard = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchMemberProfile = async () => {
//     try {
//       const res = await axiosInstance.get('/members/profile');
//       setProfile(res.data); // 👈 res.data contains full profile
//     } catch (error) {
//       console.error('❌ Error fetching member profile:', error);
//       toast.error('Failed to load member profile.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user?.mustChangePassword) {
//       toast.error('Please change your password to continue.');
//       navigate('/change-password');
//       return;
//     }

//     fetchMemberProfile();
//   }, [user, navigate]);

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   if (loading) {
//     return (
//       <div className="p-6 text-center">
//         <span className="animate-pulse text-gray-500">Loading profile...</span>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">👋 Welcome, {profile?.name || 'Member'}</h1>

//       {profile ? (
//         <div className="mt-6 bg-white shadow-md rounded-xl p-4 space-y-3 text-center">
//           <p><strong>Name:</strong> {profile.name}</p>
//           <p><strong>Email:</strong> {profile.email}</p>
//           <p><strong>Role:</strong> {profile.role}</p>
//           <p><strong>Phone:</strong> {profile.phone}</p>
//           <p><strong>Age:</strong> {profile.age}</p>
//           <p><strong>Membership Type:</strong> {profile.membershipType}</p>
//         </div>
//       ) : (
//         <p className="mt-4 text-gray-600 text-center">No profile data found.</p>
//       )}

//       {/* <button
//         onClick={handleLogout}
//         className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//       >
//         Logout
//       </button> */}
//     </div>
//   );
// };

// export default MemberDashboard;
/////////////////////////////////////////////////////////////////////fromgithub/////////////////////////////////////////////////

// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../api/axiosInstance';
// import { useAuth } from '../context/AuthContext';
// import toast from 'react-hot-toast';
// import { LogOut, User } from 'lucide-react';

// const MemberDashboard = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchMemberProfile = async () => {
//     try {
//       const res = await axiosInstance.get('/members/profile');
//       setProfile(res.data);
//     } catch (error) {
//       console.error('❌ Error fetching member profile:', error);
//       toast.error('Failed to load member profile.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user?.mustChangePassword) {
//       toast.error('Please change your password to continue.');
//       navigate('/change-password');
//       return;
//     }
//     fetchMemberProfile();
//   }, [user, navigate]);

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-50">
//         <div className="text-lg text-gray-500 animate-pulse">Loading profile...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-10 px-4">
//       <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-8 relative">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6">
//           <div className="flex items-center space-x-3">
//             <User className="text-blue-600" size={28} />
//             <h1 className="text-2xl font-bold text-gray-800">
//               Welcome, {profile?.name || 'Member'}
//             </h1>
//           </div>
//           {/* <button
//             onClick={handleLogout}
//             className="flex items-center bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm transition"
//           >
//             <LogOut size={16} className="mr-2" />
//             Logout
//           </button> */}
//         </div>

//         {/* Profile Info */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
//           <div className="bg-gray-100 rounded-xl p-4 shadow-sm">
//             <p className="text-sm text-gray-500 mb-1">Name</p>
//             <p className="font-semibold">{profile.name}</p>
//           </div>
//           <div className="bg-gray-100 rounded-xl p-4 shadow-sm">
//             <p className="text-sm text-gray-500 mb-1">Email</p>
//             <p className="font-semibold">{profile.email}</p>
//           </div>
//           <div className="bg-gray-100 rounded-xl p-4 shadow-sm">
//             <p className="text-sm text-gray-500 mb-1">Role</p>
//             <p className="font-semibold capitalize">{profile.role}</p>
//           </div>
//           <div className="bg-gray-100 rounded-xl p-4 shadow-sm">
//             <p className="text-sm text-gray-500 mb-1">Phone</p>
//             <p className="font-semibold">{profile.phone || '-'}</p>
//           </div>
//           <div className="bg-gray-100 rounded-xl p-4 shadow-sm">
//             <p className="text-sm text-gray-500 mb-1">Age</p>
//             <p className="font-semibold">{profile.age || '-'}</p>
//           </div>
//           <div className="bg-gray-100 rounded-xl p-4 shadow-sm">
//             <p className="text-sm text-gray-500 mb-1">Membership Type</p>
//             <p className="font-semibold capitalize">{profile.membershipType || '-'}</p>
//           </div>
//         </div>

//         {/* Footer or More Sections Later */}
//         <div className="mt-8 text-center text-sm text-gray-400">
//           Gym Management System &copy; {new Date().getFullYear()}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MemberDashboard;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { User } from 'lucide-react';

const MemberDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false); // ✅ Added missing state
  const [message, setMessage] = useState('');

  // const fetchMemberProfile = async () => {
  //   try {
  //     const res = await axiosInstance.get('/members/profile');
  //     setProfile(res.data.profile);
  //     console.log('✅ Member profile data:', res.data.profile);
  //   } catch (error) {
  //     console.error('❌ Error fetching member profile:', error);

  //     if (error.response?.status === 404) {
  //       setNotFound(true);
  //       setMessage(error.response.data.message || 'Profile not found.');
  //     } else {
  //       toast.error('Failed to load member profile.');
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };
const fetchMemberProfile = async () => {
  try {
    const res = await axiosInstance.get('/members/profile');
    if (res.data.notFound) {
  setNotFound(true);
  setMessage(res.data.message);
  return;
}
    setProfile(res.data.profile);
    setNotFound(false); // ✅ Ensure normal profile view if found
  } catch (error) {
    if (error.response?.status === 404) {
      setNotFound(true); // ✅ Switch to "Profile Not Found" view
      setMessage(error.response.data.message || 'Profile not found. Please contact the admin.');
      setProfile(null); // ✅ Clear profile so UI doesn't show blanks
      console.warn('ℹ️ Member profile not created yet.');
    } else {
      toast.error('Failed to load member profile.');
      console.error('❌ Unexpected error fetching member profile:', error);
    }
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    if (user?.mustChangePassword) {
      toast.error('Please change your password to continue.');
      navigate('/change-password');
      return;
    }
    fetchMemberProfile();
  }, [user, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-lg text-gray-500 animate-pulse">Loading profile...</div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-4">
        <User className="text-gray-400 mb-4" size={40} />
        <p className="text-xl font-semibold text-gray-700 mb-2">Profile Not Found</p>
        <p className="text-gray-500">{message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-8 relative">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <User className="text-blue-600" size={28} />
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome, {profile?.name || 'Member'}
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <div className="bg-gray-100 rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Name</p>
            <p className="font-semibold">{profile?.name}</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Email</p>
            <p className="font-semibold">{profile?.email}</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Role</p>
            <p className="font-semibold capitalize">{profile?.role}</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Phone</p>
            <p className="font-semibold">{profile?.phone || '-'}</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Age</p>
            <p className="font-semibold">{profile?.age || '-'}</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-4 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Membership Type</p>
            <p className="font-semibold capitalize">{profile?.membershipType || '-'}</p>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          Gym Management System &copy; {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;

