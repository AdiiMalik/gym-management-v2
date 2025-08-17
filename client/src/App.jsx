// import React from 'react'
// import { Routes, Route, useLocation } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import { useAuth } from './context/AuthContext.jsx'
// import Sidebar from './components/Sidebar.jsx'
// import Login from './pages/Login.jsx'
// import Register from './pages/Register.jsx'
// import Dashboard from './pages/Dashboard.jsx'
// import Members from './pages/Members.jsx'
// import PrivateRoute from './components/PrivateRoute.jsx'
// import LogoutButton from './components/LogoutButton.jsx'
// import Settings from './pages/Settings.jsx'

// const App = () => {
//   const location = useLocation()
//   const { user } = useAuth()
//   const hideSidebar = ['/login', '/register'].includes(location.pathname)

//   return (
//     <div className="flex h-screen">
//       {!hideSidebar && <Sidebar />}

//       <div className="flex-1 bg-gray-100 overflow-y-auto flex flex-col">
//         <header className="flex justify-between items-center bg-white px-6 py-4 border-b shadow">
//           <div className="flex items-center space-x-2">
//             <span className="text-2xl font-extrabold text-blue-600">Gym</span>
//             <span className="text-2xl font-extrabold text-gray-700">Manager</span>
//           </div>

//           {user.name&& (
//             <div className="flex items-center gap-4">
//               <span className="text-sm text-gray-600">
//                 Logged in as: <strong>{user.name}</strong>
//               </span>
//               <LogoutButton />
//             </div>
//           )}
//         </header>

//         <main className="flex-1 p-6">
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
//             <Route path="/members" element={<PrivateRoute><Members /></PrivateRoute>} />
//             <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
//           </Routes>
//         </main>
//       </div>

//       {/* Toasts are globally available */}
//       <ToastContainer position="top-right" autoClose={3000} pauseOnHover />
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import { Routes, Route,Navigate, useLocation } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import { useAuth } from './context/AuthContext.jsx'
// import Sidebar from './components/Sidebar.jsx'
// import Login from './pages/Login.jsx'
// import Register from './pages/Register.jsx'
// import Dashboard from './pages/Dashboard.jsx'
// import Members from './pages/Members.jsx'
// import PrivateRoute from './components/PrivateRoute.jsx'
// import LogoutButton from './components/LogoutButton.jsx'
// import Settings from './pages/Settings.jsx'
// import MemberLogin from "./pages/MemberLogin";
// import MemberPrivateRoute from './components/MemberPrivateRoute';
// import MemberDashboard from './pages/MemberDashboard';
// import ChooseRole from './pages/ChooseRole'
// import SuperAdminPanel from './pages/SuperAdminPanel.jsx';


// const App = () => {
//   const location = useLocation()
//   const { user } = useAuth()
//   const hideSidebar = ['/login', '/register'].includes(location.pathname)

// const getRedirectPath = () => {
//   const role = localStorage.getItem("role");
//   if (role === "superadmin") return "/superadmin";
//   if (role === "admin") return "/members";
//   if (role === "member") return "/member-dashboard";
//   return "/login-member"; // fallback
// };
//   return (
//     <div className="flex h-screen">
//       {!hideSidebar && <Sidebar />}

//       <div className="flex-1 bg-gray-100 overflow-y-auto flex flex-col">
//         <header className="flex justify-between items-center bg-white px-6 py-4 border-b shadow">
//           <div className="flex items-center space-x-2">
//             <span className="text-2xl font-extrabold text-blue-600">Gym</span>
//             <span className="text-2xl font-extrabold text-gray-700">Manager</span>
//           </div>

//           {user?.name && (
//             <div className="flex items-center gap-4">
//               <span className="text-sm text-gray-600">
//                 Logged in as: <strong>{user.name}</strong>
//               </span>
//               <LogoutButton />
//             </div>

//           )}
//         </header>

//         <main className="flex-1 p-6">
//           <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//              <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> 

//             <Route path="/choose-role" element={<ChooseRole />} />
//             <Route path="/members" element={<PrivateRoute><Members /></PrivateRoute>} />
//             <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
//             <Route path="/login-member" element={<MemberLogin />} />
//             <Route
//               path="/member-dashboard"
//               element={<MemberPrivateRoute><MemberDashboard /></MemberPrivateRoute>}
//             />
//              <Route path="/superadmin" element={<PrivateRoute><SuperAdminPanel /></PrivateRoute>} />
//            {/* <Route path="/superadmin" element={<PendingAdmins />} /> */}

//           </Routes>
//         </main>
//       </div>

//       {/* Toasts are globally available */}
//       <ToastContainer position="top-right" autoClose={3000} pauseOnHover />
//     </div>
//   )
// }

// export default App


//////////////////////////////////////////////////Final///////////////////////////////////////////////////////
// import React from 'react'
// import { Routes, Route, useLocation } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import { useAuth } from './context/AuthContext.jsx'

// import Sidebar from './components/Sidebar.jsx'
// import Login from './pages/Login.jsx'
// import Register from './pages/Register.jsx'
// import Dashboard from './pages/Dashboard.jsx'
// import Members from './pages/Members.jsx'
// import PrivateRoute from './components/PrivateRoute.jsx'
// import LogoutButton from './components/LogoutButton.jsx'
// import Settings from './pages/Settings.jsx'
// import MemberLogin from "./pages/MemberLogin.jsx"
// import ChangePassword from './pages/ChangePassword';
// import MemberDashboard from './pages/MemberDashboard.jsx'
// import ChooseRole from './pages/ChooseRole.jsx'
// import SuperAdminPanel from './pages/SuperAdminPanel.jsx'
// import MemberPrivateRoute from './components/MemberPrivateRoute.jsx';

// const App = () => {
//   const location = useLocation()
//   const { user } = useAuth()

//   const hideSidebar = ['/login', '/register', '/login-member', '/member-dashboard','/choose-role','/','/change-password'].includes(location.pathname)

//   return (
//     <div className="flex h-screen">
//       {!hideSidebar && <Sidebar />}

//       <div className="flex-1 bg-gray-100 overflow-y-auto flex flex-col">
//         <header className="flex justify-between items-center bg-white px-6 py-4 border-b shadow">
//           <div className="flex items-center space-x-2">
//             <span className="text-2xl font-extrabold text-blue-600">Gym</span>
//             <span className="text-2xl font-extrabold text-gray-700">Manager</span>
//           </div>

//           {user?.name && (
//             <div className="flex items-center gap-4">
//               <span className="text-sm text-gray-600">
//                 Logged in as: <strong>{user.name}</strong>
//               </span>
//               <LogoutButton />
//             </div>
//           )}
//         </header>

//         <main className="flex-1 p-6">
//           <Routes>
//             {/* Public Routes */}
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/login-member" element={<MemberLogin />} />
//             <Route path="/" element={<ChooseRole />} />

//             {/* Member Route */}
//             <Route
//               path="/member-dashboard"
//               element={
//                 <MemberPrivateRoute>
//                   <MemberDashboard />
//                 </MemberPrivateRoute>
//               }
//             />

//             {/* Admin Routes */}
//             <Route
//               path="/Dashboard"
//               element={
//                 <PrivateRoute allowedRoles={['admin', 'superadmin']}>
//                   <Dashboard />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/members"
//               element={
//                 <PrivateRoute allowedRoles={['admin', 'superadmin']}>
//                   <Members />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/settings"
//               element={
//                 <PrivateRoute allowedRoles={['admin', 'superadmin']}>
//                   <Settings />
//                 </PrivateRoute>
//               }
//             />

//             {/* Super Admin Only Route */}
//             <Route
//               path="/superadmin"
//               element={
//                 <PrivateRoute allowedRoles={['superadmin']}>
//                   <SuperAdminPanel />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/change-password"
//               element={
//                 <PrivateRoute allowedRoles={['member', 'admin', 'superadmin']}>
//                   <ChangePassword />
//                 </PrivateRoute>
//               }
//             />
//           </Routes>
//         </main>
//       </div>

//       {/* Global Toast Notification */}
//       <ToastContainer position="top-right" autoClose={3000} pauseOnHover />
//     </div>
//   )
// }

// export default App
// /////////////////////////////////////////////////////////////////////////product starts from here///////////////////////////////////////
// import React, { useState } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useAuth } from './context/AuthContext.jsx';

// import Sidebar from './components/Sidebar.jsx';
// import Login from './pages/Login.jsx';
// import Register from './pages/Register.jsx';
// import Dashboard from './pages/Dashboard.jsx';
// import Members from './pages/Members.jsx';
// import PrivateRoute from './components/PrivateRoute.jsx';
// import LogoutButton from './components/LogoutButton.jsx';
// import Settings from './pages/Settings.jsx';
// import MemberLogin from "./pages/MemberLogin.jsx";
// import ChangePassword from './pages/ChangePassword';
// import MemberDashboard from './pages/MemberDashboard.jsx';
// import ChooseRole from './pages/ChooseRole.jsx';
// import SuperAdminPanel from './pages/SuperAdminPanel.jsx';
// import MemberPrivateRoute from './components/MemberPrivateRoute.jsx';
// import AdminProducts from './pages/AdminProducts.jsx';
// import LandingPage from './pages/LandingPage';


// // ✅ POS Pages
// import ProductsPage from './pages/ProductsPage.jsx';
// import CartPage from './pages/CartPage.jsx';

// const App = () => {
//   const location = useLocation();
//   const { user } = useAuth();

//   // ✅ Cart state for POS
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     const exists = cart.find(item => item._id === product._id);
//     if (exists) {
//       setCart(cart.map(item =>
//         item._id === product._id
//           ? { ...item, qty: item.qty + 1 }
//           : item
//       ));
//     } else {
//       setCart([...cart, { ...product, qty: 1 }]);
//     }
//   };

//   const hideSidebar = [
//     '/login',
//     '/register',
//     '/login-member',
//     '/member-dashboard',
//     '/choose-role',
//     '/',
//     '/change-password'
//   ].includes(location.pathname);

//   return (
//     <div className="flex h-screen">
//       {!hideSidebar && <Sidebar />}

//       <div className="flex-1 bg-gray-100 overflow-y-auto flex flex-col">
//         {/* Header */}
//         <header className="flex justify-between items-center bg-white px-6 py-4 border-b shadow">
//           <div className="flex items-center space-x-2">
//             <span className="text-2xl font-extrabold text-blue-600">Gym</span>
//             <span className="text-2xl font-extrabold text-gray-700">Manager</span>
//           </div>

//           {user?.name && (
//             <div className="flex items-center gap-4">
//               <span className="text-sm text-gray-600">
//                 Logged in as: <strong>{user.name}</strong>
//               </span>
//               <LogoutButton />
//             </div>
//           )}
//         </header>

//         {/* Main Routes */}
//         <main className="flex-1 p-6">
//           <Routes>
//             {/* Public */}
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/login-member" element={<MemberLogin />} />
//             {/* <Route path="/" element={<ChooseRole />} /> */}
//              <Route path="/" element={<LandingPage />} />
//         <Route path="/choose-role" element={<ChooseRole />} />

//             {/* Member */}
//             <Route
//               path="/member-dashboard"
//               element={
//                 <MemberPrivateRoute>
//                   <MemberDashboard />
//                 </MemberPrivateRoute>
//               }
//             />

//             {/* Admin + Superadmin */}
//             <Route
//               path="/dashboard"
//               element={
//                 <PrivateRoute allowedRoles={['admin', 'superadmin']}>
//                   <Dashboard />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/members"
//               element={
//                 <PrivateRoute allowedRoles={['admin', 'superadmin']}>
//                   <Members />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/settings"
//               element={
//                 <PrivateRoute allowedRoles={['admin', 'superadmin']}>
//                   <Settings />
//                 </PrivateRoute>
//               }
//             />

//             {/* ✅ POS */}
//             <Route
//               path="/products"
//               element={
//                 <PrivateRoute allowedRoles={['admin', 'superadmin']}>
//                   <ProductsPage addToCart={addToCart} />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/cart"
//               element={
//                 <PrivateRoute allowedRoles={['admin', 'superadmin']}>
//                   <CartPage cart={cart} setCart={setCart} />
//                 </PrivateRoute>
//               }
//             />

//             {/* Superadmin only */}
//             <Route
//               path="/superadmin"
//               element={
//                 <PrivateRoute allowedRoles={['superadmin']}>
//                   <SuperAdminPanel />
//                 </PrivateRoute>
//               }
//             />

//             <Route
//               path="/change-password"
//               element={
//                 <PrivateRoute allowedRoles={['member', 'admin', 'superadmin']}>
//                   <ChangePassword />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/admin/products"
//               element={
//                 <PrivateRoute allowedRoles={['admin', 'superadmin']}>
//                   <AdminProducts />
//                 </PrivateRoute>
//               }
//             />
//           </Routes>
//         </main>
//       </div>

//       {/* Toast Notifications */}
//       <ToastContainer position="top-right" autoClose={3000} pauseOnHover />
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useAuth } from './context/AuthContext.jsx';

// import Sidebar from './components/Sidebar.jsx';
// import Login from './pages/Login.jsx';
// import Register from './pages/Register.jsx';
// import Dashboard from './pages/Dashboard.jsx';
// import Members from './pages/Members.jsx';
// import PrivateRoute from './components/PrivateRoute.jsx';
// import LogoutButton from './components/LogoutButton.jsx';
// import Settings from './pages/Settings.jsx';
// import MemberLogin from "./pages/MemberLogin.jsx";
// import ChangePassword from './pages/ChangePassword';
// import MemberDashboard from './pages/MemberDashboard.jsx';
// import ChooseRole from './pages/ChooseRole.jsx';
// import SuperAdminPanel from './pages/SuperAdminPanel.jsx';
// import MemberPrivateRoute from './components/MemberPrivateRoute.jsx';
// import AdminProducts from './pages/AdminProducts.jsx';
// import LandingPage from './pages/LandingPage';

// // ✅ POS Pages
// import ProductsPage from './pages/ProductsPage.jsx';
// import CartPage from './pages/CartPage.jsx';

// const App = () => {
//   const location = useLocation();
//   const { user } = useAuth();

//   // ✅ Cart state for POS
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     const exists = cart.find(item => item._id === product._id);
//     if (exists) {
//       setCart(cart.map(item =>
//         item._id === product._id
//           ? { ...item, qty: item.qty + 1 }
//           : item
//       ));
//     } else {
//       setCart([...cart, { ...product, qty: 1 }]);
//     }
//   };

//   const hideSidebarAndHeader = [
//     '/login',
//     '/register',
//     '/login-member',
//     '/member-dashboard',
//     '/choose-role',
//     '/',
//     '/change-password'
//   ].includes(location.pathname);

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar only if not hidden */}
//       {!hideSidebarAndHeader && <Sidebar />}

//       <div className="flex-1 bg-gray-100 overflow-y-auto flex flex-col">
        
//         {/* Header only if not hidden */}
//         {!hideSidebarAndHeader && (
//           <header className="flex justify-between items-center bg-white px-6 py-4 border-b shadow">
//             <div className="flex items-center space-x-2">
//               <span className="text-2xl font-extrabold text-blue-600">Gym</span>
//               <span className="text-2xl font-extrabold text-gray-700">Manager</span>
//             </div>

//             {user?.name && (
//               <div className="flex items-center gap-4">
//                 <span className="text-sm text-gray-600">
//                   Logged in as: <strong>{user.name}</strong>
//                 </span>
//                 <LogoutButton />
//               </div>
//             )}
//           </header>
//         )}

//         {/* Main Routes */}
//         <main className={`flex-1 ${hideSidebarAndHeader ? 'p-0' : 'p-6'}`}>
//           <Routes>
//             {/* Public */}
//             {/* <Route path="/login" element={<Login />} /> */}
//             {/* <Route path="/login" element={<Login showLogin={true} onClose={() => navigate('/')} />} /> */}
//             <Route
//   path="/login"
//   element={
//     <Login
//       showLogin={true}
//       onClose={() => navigate('/members')}
//     />
//   }
// />
//             <Route path="/register" element={<Register />} />
//             <Route path="/login-member" element={<MemberLogin />} />
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/choose-role" element={<ChooseRole />} />

//             {/* Member */}
//             <Route
//               path="/member-dashboard"
//               element={
//                 <MemberPrivateRoute>
//                   <MemberDashboard />
//                 </MemberPrivateRoute>
//               }
//             />

//             {/* Admin + Superadmin */}
//             <Route
//               path="/dashboard"
//               element={
//                 <PrivateRoute allowedRoles={['admin', 'superadmin']}>
//                   <Dashboard />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/members"
//               element={
//                 <PrivateRoute allowedRoles={['admin', 'superadmin']}>
//                   <Members />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/settings"
//               element={
//                 <PrivateRoute allowedRoles={['admin', 'superadmin']}>
//                   <Settings />
//                 </PrivateRoute>
//               }
//             />

//             {/* ✅ POS */}
// <Route
//   path="/shop"
//   element={<ProductsPage addToCart={addToCart} cart={cart} />}
// />
  
// {

//             <Route
//               path="/cart"
//               element={
                
//                   <CartPage cart={cart} setCart={setCart} />
               
//               }
//             /> }
//             {/* Superadmin only */}
//             <Route
//               path="/superadmin"
//               element={
//                 <PrivateRoute allowedRoles={['superadmin']}>
//                   <SuperAdminPanel />
//                 </PrivateRoute>
//               }
//             />

//             <Route
//               path="/change-password"
//               element={
//                 <PrivateRoute allowedRoles={['member', 'admin', 'superadmin']}>
//                   <ChangePassword />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/admin/products"
//               element={
//                 <PrivateRoute allowedRoles={['admin', 'superadmin']}>
//                   <AdminProducts />
//                 </PrivateRoute>
//               }
//             />
//           </Routes>
//         </main>
//       </div>

//       {/* Toast Notifications */}
//       <ToastContainer position="top-right" autoClose={3000} pauseOnHover />
//     </div>
//   );
// };

// export default App;
///////////////////////////////////////////////////////////////working/////////////////////////////////////////
// import React, { useEffect, useState } from "react";
// import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useAuth } from "./context/AuthContext.jsx";

// import Sidebar from "./components/Sidebar.jsx";
// import Login from "./pages/Login.jsx";
// import Register from "./pages/Register.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import Members from "./pages/Members.jsx";
// import PrivateRoute from "./components/PrivateRoute.jsx";
// import LogoutButton from "./components/LogoutButton.jsx";
// import Settings from "./pages/Settings.jsx";
// import MemberLogin from "./pages/MemberLogin.jsx";
// import ChangePassword from "./pages/ChangePassword";
// import MemberDashboard from "./pages/MemberDashboard.jsx";
// import ChooseRole from "./pages/ChooseRole.jsx";
// import SuperAdminPanel from "./pages/SuperAdminPanel.jsx";
// import MemberPrivateRoute from "./components/MemberPrivateRoute.jsx";
// import AdminProducts from "./pages/AdminProducts.jsx";
// import LandingPage from "./pages/LandingPage";
// import { CartProvider } from "./context/CartContext";

// // ✅ POS Pages
// import ProductsPage from "./pages/ProductsPage.jsx";
// import CartPage from "./pages/CartPage.jsx";

// const App = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { user } = useAuth();

//   // ✅ Local cart state
//   const [cart, setCart] = useState(() => {
//     const savedCart = localStorage.getItem("cart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   // ✅ Persist cart in localStorage
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//     console.log("Cart saved:", cart);
//   }, [cart]);

//   // ✅ addToCart function
//   const addToCart = (product) => {
//     setCart((prev) => {
//       const i = prev.findIndex((p) => p._id === product._id);
//       if (i !== -1) {
//         return prev.map((p, idx) =>
//           idx === i ? { ...p, qty: (p.qty || 1) + 1 } : p
//         );
//       }
//       return [...prev, { ...product, qty: 1 }];
//     });
//   };

//   // 🚫 Sidebar hidden on these pages
//   const hideSidebarRoutes = [
//     "/login",
//     "/register",
//     "/login-member",
//     "/member-dashboard", // Hide sidebar here
//     "/choose-role",
//     "/",
//     "/change-password",
//   ];

//   // 🚫 Header hidden on these pages (member-dashboard NOT here)
//   const hideHeaderRoutes = [
//     "/login",
//     "/register",
//     "/login-member",
//     "/choose-role",
//     "/",
//     "/change-password",
//   ];

//   return (
//     <CartProvider>
//       <div className="flex h-screen">
//         {/* Sidebar only if not hidden */}
//         {!hideSidebarRoutes.includes(location.pathname) && <Sidebar />}

//         <div className="flex-1 bg-gray-100 overflow-y-auto flex flex-col">
//           {/* Header only if not hidden */}
//           {!hideHeaderRoutes.includes(location.pathname) && (
//             <header className="flex justify-between items-center bg-white px-6 py-4 border-b shadow">
//               <div className="flex items-center space-x-2">
//                 <span className="text-2xl font-extrabold text-blue-600">
//                   Gym
//                 </span>
//                 <span className="text-2xl font-extrabold text-gray-700">
//                   Manager
//                 </span>
//               </div>

//               {user?.name && (
//                 <div className="flex items-center gap-4">
//                   <span className="text-sm text-gray-600">
//                     Logged in as: <strong>{user.name}</strong>
//                   </span>
//                   <LogoutButton />
//                 </div>
//               )}
//             </header>
//           )}

//           {/* Main Routes */}
//           <main
//             className={`flex-1 ${
//               hideSidebarRoutes.includes(location.pathname) ? "p-0" : "p-6"
//             }`}
//           >
//             <Routes>
//               {/* Public */}
//               <Route
//                 path="/login"
//                 element={
//                   <Login
//                     showLogin={true}
//                     onClose={() => navigate("/members")}
//                   />
//                 }
//               />
//               <Route path="/register" element={<Register />} />
//               <Route path="/login-member" element={<MemberLogin />} />
//               <Route
//                 path="/"
//                 element={
//                   <LandingPage
//                     cart={cart}
//                     setCart={setCart}
//                     addToCart={addToCart}
//                   />
//                 }
//               />
//               <Route path="/choose-role" element={<ChooseRole />} />

//               {/* Member */}
//               <Route
//                 path="/member-dashboard"
//                 element={
//                   <MemberPrivateRoute>
//                     <MemberDashboard />
//                   </MemberPrivateRoute>
//                 }
//               />

//               {/* Admin + Superadmin */}
//               <Route
//                 path="/dashboard"
//                 element={
//                   <PrivateRoute allowedRoles={["admin", "superadmin"]}>
//                     <Dashboard />
//                   </PrivateRoute>
//                 }
//               />
//               <Route
//                 path="/members"
//                 element={
//                   <PrivateRoute allowedRoles={["admin", "superadmin"]}>
//                     <Members />
//                   </PrivateRoute>
//                 }
//               />
//               <Route
//                 path="/settings"
//                 element={
//                   <PrivateRoute allowedRoles={["admin", "superadmin"]}>
//                     <Settings />
//                   </PrivateRoute>
//                 }
//               />

//               {/* ✅ POS */}
//               <Route
//                 path="/products"
//                 element={<ProductsPage addToCart={addToCart} cart={cart} />}
//               />
//               <Route
//                 path="/cart"
//                 element={<CartPage cart={cart} setCart={setCart} />}
//               />

//               {/* Superadmin only */}
//               <Route
//                 path="/superadmin"
//                 element={
//                   <PrivateRoute allowedRoles={["superadmin"]}>
//                     <SuperAdminPanel />
//                   </PrivateRoute>
//                 }
//               />

//               <Route
//                 path="/change-password"
//                 element={
//                   <PrivateRoute
//                     allowedRoles={["member", "admin", "superadmin"]}
//                   >
//                     <ChangePassword />
//                   </PrivateRoute>
//                 }
//               />
//               <Route
//                 path="/admin/products"
//                 element={
//                   <PrivateRoute allowedRoles={["admin", "superadmin"]}>
//                     <AdminProducts />
//                   </PrivateRoute>
//                 }
//               />
//             </Routes>
//           </main>
//         </div>

//         {/* Toast Notifications */}
//         <ToastContainer position="top-right" autoClose={3000} pauseOnHover />
//       </div>
//     </CartProvider>
//   );
// };

// export default App;
///////////////////////////////////////////////working/////////////////////////////////////////////////////////
import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./context/AuthContext.jsx";
import { useCart, CartProvider } from "./context/CartContext";

import Sidebar from "./components/Sidebar.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Members from "./pages/Members.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import LogoutButton from "./components/LogoutButton.jsx";
import Settings from "./pages/Settings.jsx";
import MemberLogin from "./pages/MemberLogin.jsx";
import ChangePassword from "./pages/ChangePassword";
import MemberDashboard from "./pages/MemberDashboard.jsx";
import ChooseRole from "./pages/ChooseRole.jsx";
import SuperAdminPanel from "./pages/SuperAdminPanel.jsx";
import MemberPrivateRoute from "./components/MemberPrivateRoute.jsx";
import AdminProducts from "./pages/AdminProducts.jsx";
import LandingPage from "./pages/LandingPage";

// ✅ POS Pages
import ProductsPage from "./pages/ProductsPage.jsx";
import CartPage from "./pages/CartPage.jsx";

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cart } = useCart(); // ✅ cart from context

  // 🚫 Sidebar hidden on these pages
  const hideSidebarRoutes = [
    "/login",
    "/register",
    "/login-member",
    "/member-dashboard",
    "/choose-role",
    "/",
    "/change-password",
  ];

  // 🚫 Header hidden on these pages
  const hideHeaderRoutes = [
    "/login",
    "/register",
    "/login-member",
    "/choose-role",
    "/",
    "/change-password",
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar only if not hidden */}
      {!hideSidebarRoutes.includes(location.pathname) && <Sidebar />}

      <div className="flex-1 bg-gray-100 overflow-y-auto flex flex-col">
        {/* Header only if not hidden */}
        {!hideHeaderRoutes.includes(location.pathname) && (
          <header className="flex justify-between items-center bg-white px-6 py-4 border-b shadow">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-extrabold text-blue-600">
                Gym
              </span>
              <span className="text-2xl font-extrabold text-gray-700">
                Manager
              </span>
            </div>

            {user?.name && (
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  Logged in as: <strong>{user.name}</strong>
                </span>
                <LogoutButton />
              </div>
            )}
          </header>
        )}

        {/* Main Routes */}
        <main
          className={`flex-1 ${
            hideSidebarRoutes.includes(location.pathname) ? "p-0" : "p-6"
          }`}
        >
          <Routes>
            {/* Public */}
            <Route
              path="/login"
              element={
                <Login
                  showLogin={true}
                  onClose={() => navigate("/members")}
                />
              }
            />
            <Route path="/register" element={<Register />} />
            <Route path="/login-member" element={<MemberLogin />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/choose-role" element={<ChooseRole />} />

            {/* Member */}
            <Route
              path="/member-dashboard"
              element={
                <MemberPrivateRoute>
                  <MemberDashboard />
                </MemberPrivateRoute>
              }
            />

            {/* Admin + Superadmin */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute allowedRoles={["admin", "superadmin"]}>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/members"
              element={
                <PrivateRoute allowedRoles={["admin", "superadmin"]}>
                  <Members />
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute allowedRoles={["admin", "superadmin"]}>
                  <Settings />
                </PrivateRoute>
              }
            />

            {/* ✅ POS */}
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />

            {/* Superadmin only */}
            <Route
              path="/superadmin"
              element={
                <PrivateRoute allowedRoles={["superadmin"]}>
                  <SuperAdminPanel />
                </PrivateRoute>
              }
            />

            <Route
              path="/change-password"
              element={
                <PrivateRoute
                  allowedRoles={["member", "admin", "superadmin"]}
                >
                  <ChangePassword />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/products"
              element={
                <PrivateRoute allowedRoles={["admin", "superadmin"]}>
                  <AdminProducts />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
      </div>



      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} pauseOnHover />
    </div>
  );
};

const App = () => (
  <CartProvider>
    <AppContent />
  </CartProvider>
);

export default App;
