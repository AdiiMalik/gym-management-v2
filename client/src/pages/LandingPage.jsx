// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// export default function LandingPage() {
//   return (
//     <div className="w-full min-h-screen bg-cover bg-center relative font-sans"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2070&auto=format&fit=crop')",
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* ===== Hero Section ===== */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
//         >
//           Build Strength.
//           <span className="text-blue-500"> Manage Smarter.</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="max-w-2xl text-lg text-gray-200 mb-8"
//         >
//           Your all-in-one gym management solution — track members, monitor progress, and grow your business effortlessly.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//           className="flex gap-4"
//         >
//           <Link
//             to="/choose-role"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
//           >
//             Get Started
//           </Link>
//           <Link
//             to="/login"
//             className="bg-gray-200 text-gray-900 hover:bg-gray-300 px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
//           >
//             Login
//           </Link>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import ProductsPage from "./ProductsPage.jsx";
// import Login from "./Login.jsx";
// import CartPage from "./CartPage.jsx";
// export default function LandingPage() {
//   const [showHeader, setShowHeader] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [showShop, setShowShop] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);
//   const [cart, setCart] = useState([]);
// const [showCart, setShowCart] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);


//  const addToCart = (product) => {
//   setCart((prev) => [...prev, product]);
//   console.log("Cart updated:", [...cart, product]);
//   setShowCart(true); // 🔹 Open cart modal
// };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > lastScrollY) {
//         setShowHeader(false);
//       } else {
//         setShowHeader(true);
//       }
//       setLastScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
    
//     <div
//       className="w-full min-h-screen bg-cover bg-center relative font-sans"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2070&auto=format&fit=crop')",
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* ===== Transparent Navbar ===== */}
//       <motion.header
//         initial={{ y: -80, opacity: 0 }}
//         animate={{
//           y: showHeader ? 0 : -80,
//           opacity: showHeader ? 1 : 0,
//         }}
//         transition={{ duration: 0.4 }}
//         className="fixed top-0 left-0 w-full z-20 flex justify-between items-center px-8 py-5 backdrop-blur-sm"
//       >
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-2xl font-bold text-white tracking-wide drop-shadow-lg"
//         >
//           🏋️ Gym<span className="text-blue-500">Manager</span>
//         </Link>

//         {/* Menu */}
//         <nav className="hidden md:flex gap-8 text-white font-medium">
//           <button
//             onClick={() => setShowShop(true)}
//             className="hover:text-blue-400 transition"
//           >
//             Shop
//           </button>
//           <Link to="/choose-role" className="hover:text-blue-400 transition">
//             Join Us
//           </Link>
//         </nav>

//         {/* Buttons */}
//         <div className="flex gap-3">
//           <Link
//             to="/choose-role"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition transform hover:scale-105"
//           >
//             Get Started
//           </Link>
//           <button
//             onClick={() => setShowLogin(true)}
//             className="bg-gray-200 text-gray-900 hover:bg-gray-300 px-5 py-2 rounded-lg font-semibold transition transform hover:scale-105"
//           >
//             Login
//           </button>
//         </div>
//       </motion.header>

//       {/* ===== Hero Section ===== */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg"
//         >
//           Build Strength.
//           <span className="text-blue-500"> Manage Smarter.</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="max-w-2xl text-lg text-gray-200"
//         >
//           Your all-in-one gym management solution — track members, monitor
//           progress, and grow your business effortlessly.
//         </motion.p>
//       </div>
// <AnimatePresence>
//   {showCart && (
//     <>
//       {/* Backdrop */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.8 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.4 }}
//         className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
//         onClick={() => setShowCart(false)}
//       />
      
//       {/* Slide-up Cart */}
//       <motion.div
//         initial={{ y: "100%", opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: "100%", opacity: 0 }}
//         transition={{ duration: 0.5 }}
//         className="fixed bottom-0 left-0 w-full h-[70%] bg-white rounded-t-2xl shadow-2xl z-50 p-6 overflow-y-auto"
//       >
//         <button
//           onClick={() => setShowCart(false)}
//           className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center"
//         >
//           ✕
//         </button>

//         <h2 className="text-xl font-bold mb-4">Your Cart</h2>
//         {cart.length === 0 ? (
//           <p>Your cart is empty</p>
//         ) : (
//           cart.map((item, idx) => (
//             <div key={idx} className="border-b py-2">
//               {item.name} - ${item.price}
//             </div>
//           ))
//         )}
//       </motion.div>
//     </>
//   )}
// </AnimatePresence>
//       {/* ===== Shop Modal ===== */}
//       <AnimatePresence>
//         {showShop && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.8 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4, ease: "easeOut" }}
//               className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
//               onClick={() => setShowShop(false)}
//             />

//             {/* Slide-up modal */}
//     {/* Slide-up modal */}
// <motion.div
//   initial={{ y: "100%", opacity: 0 }}
//   animate={{ y: 0, opacity: 1 }}
//   exit={{ y: "100%", opacity: 0 }}
//   transition={{ duration: 0.5, ease: "easeOut" }}
//   className="fixed bottom-0 left-0 w-full h-[90%] bg-white rounded-t-2xl shadow-2xl z-50 overflow-y-auto"
// >
  
// <button
//   onClick={() => setShowShop(false)}
//   className="fixed top-4 right-4 z-[9999] bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-lg"
// >
//   ✕
// </button>

//   {/* IMPORTANT: pass inModal (and addToCart if you have it here) */}
  
//   <div>
//    <ProductsPage inModal addToCart={addToCart} />
//       {isCartOpen && (
//   <CartPage
//     cart={cart}
//     setCart={setCart}
//     closeCart={() => setIsCartOpen(false)}
//   />
// )}
    
//   </div>
// </motion.div>

//           </>
//         )}
//       </AnimatePresence>

//       {/* ===== Login Modal ===== */}
//       {/* ===== Login Modal ===== */}
//       <AnimatePresence>
//         {showLogin && (
//           <>
//             {/* Backdrop */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.8 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4, ease: "easeOut" }}
//               className="fixed inset-0 bg-black/70 backdrop-blur-lg z-40"
//               onClick={() => setShowLogin(false)}
//             />

//             {/* Center Wrapper */}
//             <div className="fixed inset-0 flex items-center justify-center z-50">
//               {/* Glassmorphism modal */}
//               <motion.div
//                 initial={{ scale: 0.8, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.8, opacity: 0 }}
//                 transition={{ duration: 0.4, ease: "easeOut" }}
//                 className="bg-white/10 backdrop-blur-xl border border-white/20
//                      rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative"
//               >
//                 {/* Close Button */}
//                 <button
//                   onClick={() => setShowLogin(false)}
//                   className="absolute top-4 right-4 bg-white/30 hover:bg-white/50 
//                        text-gray-900 rounded-full w-10 h-10 flex items-center 
//                        justify-center text-lg font-bold"
//                 >
//                   ✕
//                 </button>

//                 {/* Login Form Content */}
//                 <h2 className="text-2xl font-bold text-white mb-6 text-center">
//                   Welcome Back
//                 </h2>
//                 <form className="flex flex-col gap-4">
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     className="p-3 rounded-lg bg-white/20 border border-white/30 
//                          text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <input
//                     type="password"
//                     placeholder="Password"
//                     className="p-3 rounded-lg bg-white/20 border border-white/30 
//                          text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                   <button
//                     type="submit"
//                     className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg 
//                          font-semibold transition transform hover:scale-105"
//                   >
//                     Login
//                   </button>
//                 </form>
//               </motion.div>
//             </div>
//           </>
//         )}
//       </AnimatePresence>

//     </div>
//   );
// }
//////////////////////////////////////////////////////////////////////working///////////////////////////////////

// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import ProductsPage from "./ProductsPage.jsx";
// import Login from "./Login.jsx";
// import CartPage from "./CartPage.jsx";

// export default function LandingPage() {
//   const [showHeader, setShowHeader] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const [showShop, setShowShop] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);

//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);

//   // Add/merge items into cart
//   // const addToCart = (product) => {
//   //   setCart((prev) => {
//   //     const i = prev.findIndex((p) => p._id === product._id);
//   //     if (i !== -1) {
//   //       return prev.map((p, idx) =>
//   //         idx === i ? { ...p, qty: (p.qty || 1) + 1 } : p
//   //       );
//   //     }
//   //     return [...prev, { ...product, qty: 1 }];
//   //   });
//   //   setShowCart(true); // open the cart modal
//   // };
// const addToCart = (product) => {
//   setCart(prev => {
//     const i = prev.findIndex(p => p._id === product._id);
//     if (i !== -1) {
//       return prev.map((p, idx) => (idx === i ? { ...p, qty: (p.qty || 1) + 1 } : p));
//     }
//     return [...prev, { ...product, qty: 1 }];
//   });
// };
//   const openCart = () => setShowCart(true);
//   const closeCart = () => setShowCart(false);

//   const cartCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowHeader(window.scrollY <= lastScrollY);
//       setLastScrollY(window.scrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <div
//       className="w-full min-h-screen bg-cover bg-center relative font-sans"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2070&auto=format&fit=crop')",
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black/60"></div>

//       {/* ===== Transparent Navbar ===== */}
//       <motion.header
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: showHeader ? 0 : -80, opacity: showHeader ? 1 : 0 }}
//         transition={{ duration: 0.4 }}
//         className="fixed top-0 left-0 w-full z-20 flex justify-between items-center px-8 py-5 backdrop-blur-sm"
//       >
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-2xl font-bold text-white tracking-wide drop-shadow-lg"
//         >
//           🏋️ Gym<span className="text-blue-500">Manager</span>
//         </Link>

//         {/* Menu */}
//     <nav className="hidden md:flex gap-8 text-white font-medium ml-[65rem]">
//   <button
//     onClick={() => setShowShop(true)}
//     className="hover:text-blue-400 transition"
//   >
//     Shop
//   </button>
// </nav>

//         {/* Buttons */}
//         <div className="flex gap-3 items-center">
       
//           <button
//             onClick={() => setShowLogin(true)}
//             className="bg-gray-200 text-gray-900 hover:bg-gray-300 px-5 py-2 rounded-lg font-semibold transition transform hover:scale-105"
//           >
//             Login
//           </button>
//           {/* Cart Button */}
//           <button
//             onClick={openCart}
//             className="relative bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold transition transform hover:scale-105"
//           >
//             🛒
//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
//                 {cartCount}
//               </span>
//             )}
//           </button>
//         </div>
//       </motion.header>

//       {/* ===== Hero Section ===== */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg"
//         >
//           Build Strength.<span className="text-blue-500"> Manage Smarter.</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="max-w-2xl text-lg text-gray-200"
//         >
//           Your all-in-one gym management solution — track members, monitor
//           progress, and grow your business effortlessly.
//         </motion.p>
//       </div>

//       {/* ===== Cart Modal ===== */}
//       <AnimatePresence>
//         {showCart && (
//           <CartPage cart={cart} setCart={setCart} closeCart={closeCart} />
//         )}
//       </AnimatePresence>

//       {/* ===== Shop Modal ===== */}
//       <AnimatePresence>
//         {showShop && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.8 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4, ease: "easeOut" }}
//               className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
//               onClick={() => setShowShop(false)}
//             />
//             <motion.div
//               initial={{ y: "100%", opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: "100%", opacity: 0 }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//               className="fixed bottom-0 left-0 w-full h-[90%] bg-white rounded-t-2xl shadow-2xl z-50 overflow-y-auto"
//             >
//               <button
//                 onClick={() => setShowShop(false)}
//                 className="fixed top-4 right-4 z-[9999] bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-lg"
//               >
//                 ✕
//               </button>
//               <div>
//                 <ProductsPage
//                   inModal
//                   addToCart={addToCart}
//                   openCart={openCart}
//                   cartCount={cartCount}
//                 />
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>

//       {/* ===== Login Modal ===== */}
//       <button onClick={() => setShowLogin(true)} className="btn">Login</button>

//       {/* Reuse your full login logic with modal animation */}
//       <Login showLogin={showLogin} onClose={() => setShowLogin(false)} />
//     </div>
//   );
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext"; // ✅ use global cart
import ProductsPage from "./ProductsPage.jsx";
import Login from "./Login.jsx";
import CartPage from "./CartPage.jsx";

export default function LandingPage() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [showShop, setShowShop] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // ✅ Get cart from context instead of local state
  const { cart, addToCart, setCart } = useCart();

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  const cartCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center relative font-sans"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* ===== Transparent Navbar ===== */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: showHeader ? 0 : -80, opacity: showHeader ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 w-full z-20 flex justify-between items-center px-8 py-5 backdrop-blur-sm"
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white tracking-wide drop-shadow-lg"
        >
          🏋️ Gym<span className="text-blue-500">Manager</span>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-white font-medium ml-[65rem]">
          <button
            onClick={() => setShowShop(true)}
            className="hover:text-blue-400 transition"
          >
            Shop
          </button>
        </nav>

        {/* Buttons */}
        <div className="flex gap-3 items-center">
          <button
            onClick={() => setShowLogin(true)}
            className="bg-gray-200 text-gray-900 hover:bg-gray-300 px-5 py-2 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Login
          </button>

          {/* Cart Button */}
          <button
            onClick={openCart}
            className="relative bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold transition transform hover:scale-105"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </motion.header>

      {/* ===== Hero Section ===== */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg"
        >
          Build Strength.<span className="text-blue-500"> Manage Smarter.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-2xl text-lg text-gray-200"
        >
          Your all-in-one gym management solution — track members, monitor
          progress, and grow your business effortlessly.
        </motion.p>
      </div>

      {/* ===== Cart Modal ===== */}
      <AnimatePresence>
        {showCart && (
          <CartPage cart={cart} setCart={setCart} closeCart={closeCart} />
        )}
      </AnimatePresence>

      {/* ===== Shop Modal ===== */}
      <AnimatePresence>
        {showShop && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
              onClick={() => setShowShop(false)}
            />
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="fixed bottom-0 left-0 w-full h-[90%] bg-white rounded-t-2xl shadow-2xl z-50 overflow-y-auto"
            >
              <button
                onClick={() => setShowShop(false)}
                className="fixed top-4 right-4 z-[9999] bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-lg"
              >
                ✕
              </button>
              <div>
                <ProductsPage
                  inModal
                  addToCart={addToCart}
                  openCart={openCart}
                  cartCount={cartCount}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ===== Login Modal ===== */}
      <Login showLogin={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}
