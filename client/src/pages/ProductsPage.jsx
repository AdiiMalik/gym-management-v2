// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../api/axiosInstance';

// export default function ProductsPage({ addToCart }) {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axiosInstance.get('/products')
//       .then(res => {
//         setProducts(res.data);
//       })
//       .catch(err => {
//         console.error('Failed to load products', err);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <p>Loading products...</p>;

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {products.map(product => (
//          <div key={product._id} className="bg-white shadow p-4 rounded-lg">
//   {product.imageURL && (
//     <img
//   src={`http://localhost:5000${product.imageURL}`}
//   alt={product.name}
//   className="w-full object-contain rounded"
// />
//   )}
//   <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
//   <p className="text-gray-600">{product.detail || product.description}</p>
//   <p className="font-bold mt-2">${product.price.toFixed(2)}</p>
//   <button
//     onClick={() => addToCart(product)}
//     className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//   >
//     Add to Cart
//   </button>
// </div>

//         ))}
//       </div>

//       <button
//         onClick={() => navigate('/cart')}
//         className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//       >
//         Go to Cart
//       </button>
//     </div>
//   );
// }
// import React, { useEffect, useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import axiosInstance from "../api/axiosInstance";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaShoppingCart, FaTimes } from "react-icons/fa";

// export default function ProductsPage({ addToCart, inModal = false }) {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [cartCount, setCartCount] = useState(0);
//   const [showCloseBtn, setShowCloseBtn] = useState(true);
//   const [selectedProduct, setSelectedProduct] = useState(null); // product for bottom bar
//   const toastId = useRef(null);

//   useEffect(() => {
//     axiosInstance
//       .get("/products")
//       .then((res) => setProducts(res.data))
//       .catch((err) => console.error("Failed to load products", err))
//       .finally(() => setLoading(false));
//   }, []);

//   // Auto-hide close button after 3s (only in non-modal view)
//   useEffect(() => {
//     if (!inModal) {
//       const timer = setTimeout(() => setShowCloseBtn(false), 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [inModal]);

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     setCartCount((prev) => prev + 1);
//     setSelectedProduct(product);

//     if (toastId.current) {
//       toast.dismiss(toastId.current);
//     }

//     toastId.current = toast.success("✅ Item added to cart", {
//       position: "top-right",
//       autoClose: 3000,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: false,
//       closeButton: true,
//     });
//   };

//   if (loading) return <p>Loading products...</p>;

// return (
//   <div className={inModal ? "px-6 py-8" : "relative min-h-screen bg-gray-50 px-6 py-8"}>

//     {/* Top-right floating cart */}
//     <div className="fixed top-6 right-6 z-[100]">
//       <button
//         onClick={() => navigate("/cart")}
//         className="relative bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-full shadow hover:scale-110 transform transition duration-300 ease-in-out"
//       >
//         <FaShoppingCart size={22} />
//         {cartCount > 0 && (
//           <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow">
//             {cartCount}
//           </span>
//         )}
//       </button>
//     </div>

//     {/* Fixed Close button */}
//     {!inModal && showCloseBtn && (
//       <button
//         onClick={() => setShowCloseBtn(false)}
//         className="fixed top-20 right-6 z-[101] bg-gray-700 text-white p-3 rounded-full shadow hover:bg-gray-800 transition"
//       >
//         <FaTimes />
//       </button>
//     )}

//     {/* Title */}
//     <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
//       Our Products
//     </h1>

//     {/* Products Grid */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-24">
//       {products.map((product) => (
//         <div
//           key={product._id}
//           className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transform transition duration-300 flex flex-col"
//         >
//           {product.imageURL && (
//             <img
//               src={`http://localhost:5000${product.imageURL}`}
//               alt={product.name}
//               className="w-full h-52 object-contain bg-gray-100 p-4"
//             />
//           )}
//           <div className="p-5 flex flex-col flex-1">
//             <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>
//             <p className="text-gray-500 mt-1 text-sm line-clamp-2">{product.detail || product.description}</p>
//             <p className="font-bold mt-3 text-xl text-green-600">${product.price.toFixed(2)}</p>

//             {/* Button selects product for bottom bar */}
//             <button
//               onClick={() => setSelectedProduct(product)}
//               className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>

//     <ToastContainer />
//   </div>
// );


// }



// import React, { useEffect, useState, useRef } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaShoppingCart, FaTimes } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// export default function ProductsPage({ addToCart, inModal = false }) {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [cartCount, setCartCount] = useState(0);
//   const [showCloseBtn, setShowCloseBtn] = useState(true);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [cartVisible, setCartVisible] = useState(false);
//   const toastId = useRef(null);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/products")
//       .then(res => res.json())
//       .then(data => setProducts(data))
//       .catch(err => console.error("Failed to load products", err))
//       .finally(() => setLoading(false));
//   }, []);

//   useEffect(() => {
//     if (!inModal) {
//       const timer = setTimeout(() => setShowCloseBtn(false), 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [inModal]);

//   const handleAddToCart = (product) => {
//     addToCart(product);
//     setCartCount(prev => prev + 1);
//     setSelectedProduct(product);
//     setCartVisible(true); // open bottom cart

//     if (toastId.current) toast.dismiss(toastId.current);
//     toastId.current = toast.success("✅ Item added to cart", {
//       position: "top-right",
//       autoClose: 3000,
//     });
//   };

//   if (loading) return <p>Loading products...</p>;

//   return (
//     <div className={inModal ? "px-6 py-8" : "relative min-h-screen bg-gray-50 px-6 py-8"}>

//       {/* Top-right floating cart */}
//       <div className="fixed top-6 right-6 z-[100]">
//         <button
//           onClick={() => setCartVisible(true)}
//           className="relative bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-full shadow hover:scale-110 transition"
//         >
//           <FaShoppingCart size={22} />
//           {cartCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow">
//               {cartCount}
//             </span>
//           )}
//         </button>
//       </div>

//       {/* Close button */}
//       {!inModal && showCloseBtn && (
//         <button
//           onClick={() => setShowCloseBtn(false)}
//           className="fixed top-20 right-6 z-[101] bg-gray-700 text-white p-3 rounded-full shadow hover:bg-gray-800 transition"
//         >
//           <FaTimes />
//         </button>
//       )}

//       {/* Title */}
//       <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
//         Our Products
//       </h1>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-24">
//         {products.map(product => (
//           <div key={product._id} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transform transition flex flex-col">
//             {product.imageURL && (
//               <img src={`http://localhost:5000${product.imageURL}`} alt={product.name} className="w-full h-52 object-contain bg-gray-100 p-4"/>
//             )}
//             <div className="p-5 flex flex-col flex-1">
//               <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>
//               <p className="text-gray-500 mt-1 text-sm line-clamp-2">{product.detail || product.description}</p>
//               <p className="font-bold mt-3 text-xl text-green-600">${product.price.toFixed(2)}</p>

//               <button
//                 onClick={() => handleAddToCart(product)}
//                 className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>



//       <ToastContainer />
//     </div>
//   );
// }


// import React, { useEffect, useState, useRef } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaShoppingCart, FaTimes } from "react-icons/fa";

// export default function ProductsPage({ addToCart, inModal = false }) {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [cartCount, setCartCount] = useState(0);
//   const [showCloseBtn, setShowCloseBtn] = useState(true);
//   const toastId = useRef(null);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((err) => console.error("Failed to load products", err))
//       .finally(() => setLoading(false));
//   }, []);

//   useEffect(() => {
//     if (!inModal) {
//       const timer = setTimeout(() => setShowCloseBtn(false), 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [inModal]);

//   const handleAddToCart = (product) => {
//     if (typeof addToCart === "function") {
//       addToCart(product);
//     } else {
//       console.warn("⚠ addToCart function not provided — using local count only");
//     }

//     setCartCount((prev) => prev + 1);

//     if (toastId.current) toast.dismiss(toastId.current);
//     toastId.current = toast.success("✅ Item added to cart", {
//       position: "top-right",
//       autoClose: 3000,
//     });
//   };

//   if (loading) return <p>Loading products...</p>;

//   return (
//     <div
//       className={
//         inModal
//           ? "px-6 py-8"
//           : "relative min-h-screen bg-gray-50 px-6 py-8"
//       }
//     >
//       {/* Top-right floating cart */}
//       <div className="fixed top-6 right-6 z-[100]">
//         <button
//           onClick={() => console.log("Open cart modal here")}
//           className="relative bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-full shadow hover:scale-110 transition"
//         >
//           <FaShoppingCart size={22} />
//           {cartCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow">
//               {cartCount}
//             </span>
//           )}
//         </button>
//       </div>

//       {/* Close button */}
//       {!inModal && showCloseBtn && (
//         <button
//           onClick={() => setShowCloseBtn(false)}
//           className="fixed top-20 right-6 z-[101] bg-gray-700 text-white p-3 rounded-full shadow hover:bg-gray-800 transition"
//         >
//           <FaTimes />
//         </button>
//       )}

//       {/* Title */}
//       <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
//         Our Products
//       </h1>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-24">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transform transition flex flex-col"
//           >
//             {product.imageURL && (
//               <img
//                 src={`http://localhost:5000${product.imageURL}`}
//                 alt={product.name}
//                 className="w-full h-52 object-contain bg-gray-100 p-4"
//               />
//             )}
//             <div className="p-5 flex flex-col flex-1">
//               <h2 className="text-lg font-semibold text-gray-800 truncate">
//                 {product.name}
//               </h2>
//               <p className="text-gray-500 mt-1 text-sm line-clamp-2">
//                 {product.detail || product.description}
//               </p>
//               <p className="font-bold mt-3 text-xl text-green-600">
//                 ${product.price.toFixed(2)}
//               </p>

//               <button
//                 onClick={() => handleAddToCart(product)}
//                 className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <ToastContainer />
//     </div>
//   );
// }


// import React, { useEffect, useState, useRef } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaShoppingCart, FaTimes } from "react-icons/fa";
// import CartPage from "./CartPage.jsx";
// export default function ProductsPage({ inModal = false }) {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showCloseBtn, setShowCloseBtn] = useState(true);
//   const toastId = useRef(null);

//   // Local cart state
//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);

//   // Fetch products
//   useEffect(() => {
//     fetch("http://localhost:5000/api/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((err) => console.error("Failed to load products", err))
//       .finally(() => setLoading(false));
//   }, []);

//   // Hide close button after delay (if not in modal)
//   useEffect(() => {
//     if (!inModal) {
//       const timer = setTimeout(() => setShowCloseBtn(false), 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [inModal]);

//   // LandingPage style addToCart
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


//     if (toastId.current) toast.dismiss(toastId.current);
//     toastId.current = toast.success("✅ Item added to cart", {
//       position: "top-right",
//       autoClose: 2000,
//     });
//   };

//   const openCart = () => setShowCart(true);
//   const closeCart = () => setShowCart(false);

//   const cartCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

//   if (loading) return <p>Loading products...</p>;

//   return (
//     <div className={inModal ? "px-6 py-8" : "relative min-h-screen bg-gray-50 px-6 py-8"}>

//      {/* Floating cart button */}
//        <div className="fixed bottom-6 right-6 z-[100]">
//         <button
//           onClick={openCart}
//           className="relative bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-full shadow hover:scale-110 transition"
//         >
//           <FaShoppingCart size={22} />
//           {cartCount > 0 && (
//             <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow">
//               {cartCount}
//             </span>
//           )}
//         </button>
//       </div>


//       {/* Optional close button */}
//       {!inModal && showCloseBtn && (
//         <button
//           onClick={() => setShowCloseBtn(false)}
//           className="fixed top-20 right-6 z-[101] bg-gray-700 text-white p-3 rounded-full shadow hover:bg-gray-800 transition"
//         >
//           <FaTimes />
//         </button>
//       )}

//       {/* Title */}
//       <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
//         Our Products
//       </h1>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-24">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transform transition flex flex-col"
//           >
//             {product.imageURL && (
//               <img
//                 src={`http://localhost:5000${product.imageURL}`}
//                 alt={product.name}
//                 className="w-full h-52 object-contain bg-gray-100 p-4"
//               />
//             )}
//             <div className="p-5 flex flex-col flex-1">
//               <h2 className="text-lg font-semibold text-gray-800 truncate">
//                 {product.name}
//               </h2>
//               <p className="text-gray-500 mt-1 text-sm line-clamp-2">
//                 {product.detail || product.description}
//               </p>
//               <p className="font-bold mt-3 text-xl text-green-600">
//                 ${product.price.toFixed(2)}
//               </p>

//               <button
//                 onClick={() => addToCart(product)}
//                 className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Cart Modal */}
//   {showCart && (
//   <CartPage
//     cart={cart}
//     closeCart={closeCart}
//     setCart={setCart}
//   />
// )}

//       <ToastContainer />
//     </div>
//   );
// }


import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import CartPage from "./CartPage.jsx";
import { useCart } from "../context/CartContext";

export default function ProductsPage({ inModal = false }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCloseBtn, setShowCloseBtn] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const toastId = useRef(null);

  // ✅ Use cart from context only
  const { cart, setCart, addToCart } = useCart();

  // Fetch products
useEffect(() => {
  const url = `${import.meta.env.VITE_API_BASE_URL}/products`;
  console.log("Fetching:", url);
  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((data) => setProducts(data))
    .catch((err) => console.error("Failed to load products", err))
    .finally(() => setLoading(false));
}, []);


  // Hide close button after delay (if not in modal)
  useEffect(() => {
    if (!inModal) {
      const timer = setTimeout(() => setShowCloseBtn(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [inModal]);

  // ✅ Add to cart + toast
  const handleAddToCart = (product) => {
    addToCart(product);
    if (toastId.current) toast.dismiss(toastId.current);
    toastId.current = toast.success("✅ Item added to cart", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  // ✅ Safely calculate cart count
  const cartCount = Array.isArray(cart)
    ? cart.reduce((sum, item) => sum + (item.qty || 1), 0)
    : 0;

  if (loading) return <p>Loading products...</p>;

  return (
    <div
      className={
        inModal ? "px-6 py-8" : "relative min-h-screen bg-gray-50 px-6 py-8"
      }
    >
      {/* Floating cart button */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <button
          onClick={openCart}
          className="relative bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-full shadow hover:scale-110 transition"
        >
          <FaShoppingCart size={22} />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      {/* Optional close button */}
      {!inModal && showCloseBtn && (
        <button
          onClick={() => setShowCloseBtn(false)}
          className="fixed top-20 right-6 z-[101] bg-gray-700 text-white p-3 rounded-full shadow hover:bg-gray-800 transition"
        >
          <FaTimes />
        </button>
      )}

      {/* Title */}
      <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
        Our Products
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-24">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] transform transition flex flex-col"
          >
            {/* {product.imageURL && ( */}
            {/* <img
                src={`${import.meta.env.VITE_API_BASE_URL}${product.imageURL}`}
                alt={product.name}
                className="w-full h-52 object-contain bg-gray-100 p-4"
              /> */}
            {/* )} */}
            <img
              src={
                product.imageURL
                  ? `${import.meta.env.VITE_API_BASE_URL}${product.imageURL}`
                  : "https://via.placeholder.com/150"
              }
              alt={product.name}
              className="w-full h-52 object-contain bg-gray-100 p-4"
            />


            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {product.name}
              </h2>
              <p className="text-gray-500 mt-1 text-sm line-clamp-2">
                {product.detail || product.description}
              </p>
              <p className="font-bold mt-3 text-xl text-green-600">
                ${product.price.toFixed(2)}
              </p>

              <button
                onClick={() => handleAddToCart(product)}
                className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Modal */}
      {showCart && (
        <CartPage cart={cart} closeCart={closeCart} setCart={setCart} />
      )}


    </div>
  );
}
