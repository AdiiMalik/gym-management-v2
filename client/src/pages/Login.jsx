


// import React, { useState, useEffect } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { useAuth } from '../context/AuthContext';
// import { login } from '../api/authApi';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const { login: authLogin, user } = useAuth();

//   useEffect(() => {
//     if (user) {
//       if (user.role === 'superadmin') navigate('/superadmin');
//       else if (user.role === 'admin') navigate('/members');
//       else if (user.role === 'member') navigate('/member-dashboard');
//     }
//   }, [user, navigate]);

//  const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (isLoading) return;

//   setIsLoading(true);
// console.log("Logged in user:", user);
//   try {
//     // const { token, user } = await login(email, password);
//     const {token,user}= await login(email, password);
// console.log("Returned:", token, user);
//     if (user.role === 'admin' && user.status !== 'active') {
//       toast.error("Your admin request is still pending approval.");
//       setIsLoading(false);
//       return;
//     }

//     authLogin({ token, user });
//     toast.success('Logged in successfully!');

//     // ✅ Navigate based on role immediately after login
//     if (user.role === 'superadmin') navigate('/superadmin');
//     else if (user.role === 'admin') navigate('/members');
//     else if (user.role === 'member') navigate('/member-dashboard');
//     else navigate('/'); // fallback if role is missing
// console.log("Logged in user:", user);
//   } catch (error) {
//     const errMsg =
//       error?.response?.data?.message ||
//       error?.message ||
//       'Login failed. Please try again.';
//     toast.error(errMsg);
//   } finally {
//     setIsLoading(false);
//   }
//   console.log("Logged in user:", user);
// };


//   return (
//     <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             placeholder="your@email.com"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             autoFocus
//           />
//         </div>

//         <div>
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//             Password
//           </label>
//           <input
//             id="password"
//             type="password"
//             placeholder="••••••••"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             minLength={6}
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={isLoading}
//           className={`w-full py-2 px-4 rounded-md text-white font-medium ${
//             isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
//           } transition-colors`}
//         >
//           {isLoading ? 'Logging in...' : 'Login'}
//         </button>

//         <div className="text-center text-sm text-gray-600 pt-2">
//           Don't have an account?{' '}
//           <Link
//             to="/register"
//             className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
//           >
//             Sign up
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

// import { useNavigate, Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import { login } from '../api/authApi.js';
// import { toast } from 'react-toastify';
// import { useAuth } from '../context/AuthContext';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const { user, setUser } = useAuth();

//   useEffect(() => {
//     if (user) {
//       if (user.role === 'superadmin') navigate('/superadmin');
//       else if (user.role === 'admin') navigate('/members');
//       else if (user.role === 'member') navigate('/member-dashboard');
//     }
//   }, [user, navigate]);

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (isLoading) return;
//   setIsLoading(true);

//   try {
//      console.log('🚀 Attempting login with:', { email, password });
//     const response = await login({ email, password });
//     console.log('✅ Login response:', response);
//     const loggedInUser = response.user;

//     // ✅ Save token and user
//     localStorage.setItem('token', response.token);
//     setUser(loggedInUser);
//     toast.success('Login successful');

//     // ✅ Must change password?
//     if (loggedInUser.mustChangePassword) {
//       toast('Please change your password to continue', { icon: '⚠️' });
//       navigate('/change-password');
//       return;
//     }
// console.log('✅ Logged in user:', loggedInUser);
//     // 🔁 Otherwise, redirect based on role
//     const role = loggedInUser.role;
//     if (role === 'superadmin') navigate('/superadmin');
//     else if (role === 'admin') navigate('/members');
//     else if (role === 'member') navigate('/member-dashboard');

//   } catch (error) {
//     console.error('❌ Error in handleSubmit:', error);
//     const errMsg = error?.response?.data?.message || 'Login failed. Please try again.';
//     toast.error(errMsg);
//   } finally {
//     setIsLoading(false);
//   }
// };





//   return (
//     <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             placeholder="your@email.com"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             autoFocus
//           />
//         </div>

//         <div>
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//             Password
//           </label>
//           <input
//             id="password"
//             type="password"
//             placeholder="••••••••"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             minLength={6}
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={isLoading}
//           className={`w-full py-2 px-4 rounded-md text-white font-medium ${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
//             } transition-colors`}
//         >
//           {isLoading ? 'Logging in...' : 'Login'}
//         </button>

//         <div className="text-center text-sm text-gray-600 pt-2">
//           Don't have an account?{' '}
//           <Link
//             to="/register"
//             className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
//           >
//             Sign up
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;

////////////////////////////////////////////////////this code is working///////////////////////////////////////////////////////////
// import { useNavigate, Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import { login } from '../api/authApi.js';
// import { toast } from 'react-toastify';
// import { useAuth } from '../context/AuthContext';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const auth = useAuth(); // safer access
//   const { user, setUser } = auth || {};

//   useEffect(() => {
//     if (user) {
//       if (user.role === 'superadmin') navigate('/superadmin');
//       else if (user.role === 'admin') navigate('/members');
//       else if (user.role === 'member') navigate('/member-dashboard');
//     }
//   }, [user, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isLoading) return;
//     setIsLoading(true);

//     try {
//       console.log('🚀 Attempting login with:', { email, password });

//       const response = await login({ email, password });
//       console.log('✅ Login response:', response);

//       const loggedInUser = response.user;

//       // ✅ Save token and user
//       localStorage.setItem('token', response.token);
//       if (setUser) setUser(loggedInUser); // check if context is ready
//       localStorage.setItem('user', JSON.stringify(loggedInUser));

//       toast.success('Login successful');

//       // ✅ Must change password?
//       if (loggedInUser.mustChangePassword) {
//         toast('Please change your password to continue', { icon: '⚠️' });
//         navigate('/change-password');
//         return;
//       }

//       // 🔁 Otherwise, redirect based on role
//       const role = loggedInUser.role;
//       if (role === 'superadmin') navigate('/superadmin');
//       else if (role === 'admin') navigate('/members');
//       else if (role === 'member') navigate('/member-dashboard');

//     } catch (error) {
//       console.error('❌ Error in handleSubmit:', error);
//       const errMsg = error?.response?.data?.message || 'Login failed. Please try again.';
//       toast.error(errMsg);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             placeholder="your@email.com"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             autoFocus
//           />
//         </div>

//         <div>
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//             Password
//           </label>
//           <input
//             id="password"
//             type="password"
//             placeholder="••••••••"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             minLength={6}
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={isLoading}
//           className={`w-full py-2 px-4 rounded-md text-white font-medium ${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
//             } transition-colors`}
//         >
//           {isLoading ? 'Logging in...' : 'Login'}
//         </button>

//         <div className="text-center text-sm text-gray-600 pt-2">
//           Don't have an account?{' '}
//           <Link
//             to="/register"
//             className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
//           >
//             Sign up
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { useNavigate, Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import { login as loginApi } from '../api/authApi.js';
// import { toast } from 'react-toastify';
// import { useAuth } from '../context/AuthContext';


// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const { user, setUser } = useAuth(); // ✅ Get context properly

//   useEffect(() => {
//     if (user) {
//       if (user.role === 'superadmin') navigate('/superadmin');
//       else if (user.role === 'admin') navigate('/members');
//       else if (user.role === 'member') navigate('/member-dashboard');
//     }
//   }, [user, navigate]);


// const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (isLoading) return;
//   setIsLoading(true);

//   try {
//     console.log('🚀 Attempting login with:', { email, password });

//     const response = await loginApi({ email, password });
//     console.log('✅ Login response:', response);

//     const loggedInUser = response?.user;

//     if (!loggedInUser) {
//       throw new Error("User object is missing from response");
//     }

//     // ⛔ Check for pending admin
//     if (loggedInUser.role === 'admin' && loggedInUser.status === 'pending') {
//       // Show only once per session
//       if (!localStorage.getItem("rejectedNotified")) {
//         toast.error('❌ Superadmin has not approved your account yet.');
//         localStorage.setItem("rejectedNotified", "true");
//       }
//       setIsLoading(false);
//       return;
//     }

//     // ✅ Save token and user
//     localStorage.setItem('token', response.token);
//     localStorage.setItem('user', JSON.stringify(loggedInUser));
//     setUser(loggedInUser);
//     localStorage.removeItem("rejectedNotified"); // clear in case it was previously set

//     toast.success('✅ Login successful');

//     // ⛔ Force password change
//     if (loggedInUser.mustChangePassword) {
//       toast('Please change your password to continue', { icon: '⚠️' });
//       navigate('/change-password');
//       return;
//     }

//     // ✅ Role-based redirection
//     if (loggedInUser.role === 'superadmin') {
//       navigate('/superadmin');
//     } else if (loggedInUser.role === 'admin') {
//       navigate('/members');
//     } else if (loggedInUser.role === 'member') {
//       navigate('/member-dashboard');
//     }

//   } catch (error) {
//     console.error('❌ Error in handleSubmit:', error);
//     const errMsg = error?.response?.data?.message || error.message || 'Login failed. Please try again.';
//     toast.error(errMsg);
//   } finally {
//     setIsLoading(false);
//   }
// };


//   return (
//     <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             placeholder="your@email.com"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             autoFocus
//           />
//         </div>

//         <div>
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//             Password
//           </label>
//           <input
//             id="password"
//             type="password"
//             placeholder="••••••••"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             minLength={6}
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={isLoading}
//           className={`w-full py-2 px-4 rounded-md text-white font-medium ${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
//             } transition-colors`}
//         >
//           {isLoading ? 'Logging in...' : 'Login'}
//         </button>

//         <div className="text-center text-sm text-gray-600 pt-2">
//           Don't have an account?{' '}
//           <Link
//             to="/register"
//             className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
//           >
//             Sign up
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;


////////////////////////////////////////////////////////////////////////////////////////////////////
// import { useNavigate, Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import { login as loginApi } from '../api/authApi.js';
// import { toast } from 'react-toastify';
// import { useAuth } from '../context/AuthContext';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
//   const { user, setUser } = useAuth();

//   useEffect(() => {
//     if (user) {
//       if (user.role === 'superadmin') navigate('/superadmin');
//       else if (user.role === 'admin') navigate('/members');
//     }
//   }, [user, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isLoading) return;
//     setIsLoading(true);

//     try {
//       const response = await loginApi({ email, password });
//       const loggedInUser = response?.user;

//       if (!loggedInUser) throw new Error("User object is missing from response");

//       // ✅ Only allow admin/superadmin login from here
//       if (loggedInUser.role === 'member') {
//         toast.error('❌ Please use the Member Login Page.');
//         setIsLoading(false);
//         return;
//       }

//       // ⛔ Check for pending admin
//       if (loggedInUser.role === 'admin' && loggedInUser.status === 'pending') {
//         if (!localStorage.getItem("rejectedNotified")) {
//           toast.error('❌ Superadmin has not approved your account yet.');
//           localStorage.setItem("rejectedNotified", "true");
//         }
//         setIsLoading(false);
//         return;
//       }

//       // ✅ Save token and user
//       localStorage.setItem('token', response.token);
//       localStorage.setItem('user', JSON.stringify(loggedInUser));
//       setUser(loggedInUser);
//       localStorage.removeItem("rejectedNotified");

//       toast.success('✅ Login successful');

//       // ⛔ Force password change
//       if (loggedInUser.mustChangePassword) {
//         toast('Please change your password to continue', { icon: '⚠️' });
//         navigate('/change-password');
//         return;
//       }

//       // ✅ Role-based redirection
//       if (loggedInUser.role === 'superadmin') navigate('/superadmin');
//       else if (loggedInUser.role === 'admin') navigate('/members');

//     } catch (error) {
//       const errMsg = error?.response?.data?.message || error.message || 'Login failed. Please try again.';
//       toast.error(errMsg);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h1>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//             Email
//           </label>
//           <input
//             id="email"
//             type="email"
//             placeholder="admin@email.com"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             autoFocus
//           />
//         </div>

//         <div>
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//             Password
//           </label>
//           <input
//             id="password"
//             type="password"
//             placeholder="••••••••"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             minLength={6}
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={isLoading}
//           className={`w-full py-2 px-4 rounded-md text-white font-medium ${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
//             } transition-colors`}
//         >
//           {isLoading ? 'Logging in...' : 'Login'}
//         </button>

//         <div className="text-center text-sm text-gray-600 pt-2">
//           Member?{' '}
//           <Link
//             to="/login-member"
//             className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
//           >
//             Go to Member Login
//           </Link>
//         </div>
//         <div className="text-center text-sm text-gray-600 pt-2">
//           Don't have an account?{' '}
//           <Link
//             to="/register"
//             className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
//           >
//             Sign up
//           </Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;



import { useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { login as loginApi } from '../api/authApi.js';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import { AnimatePresence, motion } from 'framer-motion';

const Login = ({ showLogin, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  useEffect(() => {
    if (user) {
      if (user.role === 'superadmin') navigate('/superadmin');
      else if (user.role === 'admin') navigate('/members');
    }
  }, [user, navigate]);


const handleSubmit = async (e) => {
  e.preventDefault();
  if (isLoading) return;
  setIsLoading(true);

  try {
    // If loginApi returns Axios response -> get .data
    const res = await loginApi({ email, password });
    const { token, user: loggedInUser } = res.data || res; // ✅ handles both cases

    if (!loggedInUser) throw new Error("User object is missing from response");

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(loggedInUser));
    setUser(loggedInUser);
    localStorage.removeItem("rejectedNotified");

    toast.success('✅ Login successful');

    if (loggedInUser.mustChangePassword) {
      toast('Please change your password to continue', { icon: '⚠️' });
      navigate('/change-password');
      return;
    }

    if (loggedInUser.role === 'superadmin') {
      navigate('/superadmin');
    } else if (loggedInUser.role === 'admin') {
      if (loggedInUser.status === 'pending') {
        toast.error('❌ Superadmin has not approved your account yet.');
        return;
      }
      navigate('/members');
    } else if (loggedInUser.role === 'member') {
      navigate('/member-dashboard');
    } else {
      toast.error('❌ Unauthorized role');
    }

  } catch (error) {
    const errMsg = error?.response?.data?.message || error.message || 'Login failed. Please try again.';
    toast.error(errMsg);
  } finally {
    setIsLoading(false);
  }
};


  return (
    <AnimatePresence>
      {showLogin && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 bg-black/70 backdrop-blur-lg z-40"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/30 hover:bg-white/50 text-gray-900 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold"
              >
                ✕
              </button>

              <h1 className="text-2xl font-bold mb-6 text-center text-white">Admin Login</h1>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoFocus
                  />
                </div>

                <div>
                  <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 rounded-lg text-white font-semibold transition transform hover:scale-105 ${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </button>

                {/* <div className="text-center text-sm text-white/80 pt-2">
                  Member?{' '}
                  <Link to="/login-member" className="font-medium text-blue-300 hover:text-blue-200 hover:underline">
                    Go to Member Login
                  </Link>
                </div> */}
                <div className="text-center text-sm text-white/80 pt-2">
                  Don't have an account?{' '}
                  <Link to="/register" className="font-medium text-blue-300 hover:text-blue-200 hover:underline">
                    Sign up
                  </Link>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Login;
