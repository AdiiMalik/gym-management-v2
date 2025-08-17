
// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext.jsx';

// const PrivateRoute = ({ children, allowedRoles }) => {
//   const { user } = useAuth();
//   const location = useLocation();

//   console.log("🔐 PrivateRoute Check - User:", user);
//   console.log("Allowed Roles:", allowedRoles);

//   if (!user) {
//     console.warn("⛔ No user, redirecting to /login");
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   if (user.role === 'admin' && user.status !== 'active') {
//     console.warn("⛔ Admin not active, redirecting to /login");
//     return <Navigate to="/login" replace />;
//   }

//   if (allowedRoles && !allowedRoles.includes(user.role)) {
//     console.warn(`⛔ Role '${user.role}' not allowed, redirecting to /login-member`);
//     return <Navigate to="/login-member" replace />;
//   }

//   console.log("✅ Access granted to", location.pathname);
//   return children;
// };

// export default PrivateRoute;


// import { Navigate, useLocation } from 'react-router-dom'
// import { useAuth } from '../context/AuthContext.jsx'

// const PrivateRoute = ({ children, allowedRoles }) => {
//   const { user } = useAuth()
//   const location = useLocation()

//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} replace />
//   }

//   console.log("🔐 PrivateRoute Check - User:", user)
//   console.log("Allowed Roles:", allowedRoles)

//   // Disallow non-active admins
//   if (user.role === 'admin' && user.status !== 'active') {
//     console.log("⛔ Admin not active, redirecting to /login")
//     return <Navigate to="/login" replace />
//   }

//   // if (allowedRoles && !allowedRoles.includes(user.role)) {
//   //   return <Navigate to="/login-member" replace />
//   // }
// if (allowedRoles && !allowedRoles.includes(user?.role)) {
//   return <Navigate to="/unauthorized" />;
// }
//   return children
// }

// export default PrivateRoute
// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext.jsx';

// const PrivateRoute = ({ children, allowedRoles }) => {
//   const { user } = useAuth();
//   const location = useLocation();

//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   console.log("🔐 PrivateRoute Check - User:", user);
//   console.log("Allowed Roles:", allowedRoles);

//   // ⛔ Block non-active admins
//   if (user.role === 'admin' && user.status !== 'active') {
//     console.log("⛔ Admin not active, redirecting to /login");
//     return <Navigate to="/login" replace />;
//   }

//   // 🚫 If user role is not in allowedRoles, redirect to unauthorized
//   if (allowedRoles && !allowedRoles.includes(user?.role)) {
//     return <Navigate to="/unauthorized" />;
//   }

//   return children;
// };

// export default PrivateRoute;



// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext.jsx';
// import { toast } from 'react-toastify';
// import { useEffect, useRef } from 'react';

// const PrivateRoute = ({ children, allowedRoles }) => {
//   const { user } = useAuth();
//   const location = useLocation();
//   const hasShownToast = useRef(false); // prevents infinite loop

//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   console.log("🔐 PrivateRoute Check - User:", user);
//   console.log("Allowed Roles:", allowedRoles);

//   // ⛔ Show toast once if admin is not active
//   if (user.role === 'admin' && user.status !== 'active') {
//     if (!hasShownToast.current) {
//       toast.error("Your admin request is still pending approval");
//       hasShownToast.current = true;
//     }
//     return <Navigate to="/login" replace />;
//   }

//   // 🚫 Block access if role not allowed
//   if (allowedRoles && !allowedRoles.includes(user?.role)) {
//     return <Navigate to="/unauthorized" />;
//   }

//   return children;
// };

// export default PrivateRoute;


// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext.jsx';
// import toast from 'react-hot-toast';

// const PrivateRoute = ({ children, allowedRoles }) => {
//   const { user, loading } = useAuth();
//   const location = useLocation();

//   // ⏳ Wait until auth loading finishes
//   if (loading) {
//     return <div className="text-center mt-10">Loading...</div>;
//   }

//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   console.log("🔐 PrivateRoute Check - User:", user);
//   console.log("Allowed Roles:", allowedRoles);

//   // ⛔ Block rejected admins
//   if (user.role === 'admin' && user.status === 'rejected') {
//     toast.error("❌ Your admin request has been rejected by the superadmin.");
//     localStorage.removeItem("token");
//     return <Navigate to="/login" replace />;
//   }

//   // ⛔ Block pending admins
//   if (user.role === 'admin' && user.status !== 'active') {
//     toast.error("⏳ Your admin request is still pending approval.");
//     localStorage.removeItem("token");
//     return <Navigate to="/login" replace />;
//   }

//   // 🚫 Block access if role is not allowed
//   if (allowedRoles && !allowedRoles.includes(user?.role)) {
//     return <Navigate to="/unauthorized" />;
//   }

//   return children;
// };

// export default PrivateRoute;
///////////////////////////////////////////////////////////////////////////landing page/////////////////////////////
// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext.jsx';
// import toast from 'react-hot-toast';

// const PrivateRoute = ({ element, allowedRoles }) => {
//   const { user, loading } = useAuth();
//   const location = useLocation();

//   // ⏳ Wait until auth loading finishes
//   if (loading) {
//     return <div className="text-center mt-10">Loading...</div>;
//   }

//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   console.log("🔐 PrivateRoute Check - User:", user);
//   console.log("Allowed Roles:", allowedRoles);

//   // ⛔ Block rejected admins
//   if (user.role === 'admin' && user.status === 'rejected') {
//     toast.error("❌ Your admin request has been rejected by the superadmin.");
//     localStorage.removeItem("token");
//     return <Navigate to="/login" replace />;
//   }

//   // ⛔ Block pending admins
//   if (user.role === 'admin' && user.status !== 'active') {
//     toast.error("⏳ Your admin request is still pending approval.");
//     localStorage.removeItem("token");
//     return <Navigate to="/login" replace />;
//   }

//   // 🚫 Block access if role is not allowed
//   if (allowedRoles && !allowedRoles.includes(user?.role)) {
//     return <Navigate to="/unauthorized" />;
//   }

//   return element;
// };

// export default PrivateRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, allowedRoles = [] }) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user')); // assuming user object with role is saved

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles.length && (!user || !allowedRoles.includes(user.role))) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default PrivateRoute;