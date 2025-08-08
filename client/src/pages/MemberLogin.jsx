

// import React, { useState } from "react";
// import axiosInstance from "../api/axiosInstance";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from '../context/AuthContext';


// const MemberLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { setUser } = useAuth();
  
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await axiosInstance.post("/auth/member-dashboard", {
//         email,
//         password,
//       });

//       const user = res.data.user;

//       // Save auth info
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(user));
//       localStorage.setItem("role", user.role);

//       // ✅ Conditional redirect based on mustChangePassword
//       // if (user.role === "member" && user.mustChangePassword) {
//       //   navigate("/change-password");
//       // } else {
//       //   navigate("/member-dashboard");
//       // }
//       setUser(user);
//       if (res.data.user.role === 'member') {
//         navigate('/auth/member-dashboard');
//       } else {
//         toast.error('Not a member account');
//       }
//     } catch (err) {
//       setError(err?.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl shadow">
//       <h2 className="text-2xl font-bold mb-4 text-center">Member Login</h2>
//       <form onSubmit={handleLogin} className="space-y-4">
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full border px-4 py-2 rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full border px-4 py-2 rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         {error && <p className="text-red-600 text-sm">{error}</p>}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default MemberLogin;


import { useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { login as loginApi } from '../api/authApi.js';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';

const MemberLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  useEffect(() => {
    if (user?.role === 'member') {
      navigate('/member-dashboard');
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await loginApi({ email, password });
      const loggedInUser = response?.user;

      if (!loggedInUser) throw new Error("User object is missing from response");

      // ✅ Only allow member login from here
      if (loggedInUser.role !== 'member') {
        toast.error('❌ You are not authorized to login here.');
        setIsLoading(false);
        return;
      }

      // ✅ Save token and user
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
      setUser(loggedInUser);

      toast.success('✅ Login successful');

      // ⛔ Force password change
      if (loggedInUser.mustChangePassword) {
        toast('Please change your password to continue', { icon: '⚠️' });
        navigate('/change-password');
        return;
      }

      // ✅ Redirect to member dashboard
      navigate('/member-dashboard');

    } catch (error) {
      const errMsg = error?.response?.data?.message || error.message || 'Login failed. Please try again.';
      toast.error(errMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Member Login</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="member@email.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            } transition-colors`}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>

        <div className="text-center text-sm text-gray-600 pt-2">
          Admin or Superadmin?{' '}
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
          >
            Go to Admin Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default MemberLogin;
