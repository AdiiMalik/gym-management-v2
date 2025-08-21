// // src/pages/POSPage.jsx
// import { useState, useEffect } from "react";
// import axiosInstance from "../api/axiosInstance";

// const POSPage = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [paymentMethod, setPaymentMethod] = useState("Cash");
//   const [sales, setSales] = useState([]);

//   // Load products and sales history
//   useEffect(() => {
//     fetchProducts();
//     fetchSales();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const res = await axiosInstance.get(`${import.meta.env.VITE_API_BASE_URL}/products`);
//       setProducts(res.data);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     }
//   };

//   const fetchSales = async () => {
//     try {
//       const res = await axiosInstance.get(`${import.meta.env.VITE_API_BASE_URL}/sales`);
//       setSales(res.data);
//     } catch (err) {
//       console.error("Error fetching sales:", err);
//     }
//   };

//   // Add product with qty
//   const addToSale = (product, qty) => {
//     if (qty <= 0) return;
//     setSelectedItems((prev) => {
//       const existing = prev.find((item) => item.productId === product._id);
//       if (existing) {
//         return prev.map((item) =>
//           item.productId === product._id
//             ? { ...item, qty: item.qty + qty }
//             : item
//         );
//       }
//       return [
//         ...prev,
//         {
//           productId: product._id,
//           name: product.name,
//           price: product.price,
//           qty,
//         },
//       ];
//     });
//   };

//   const totalAmount = selectedItems.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );

//   // Save sale
//   const saveSale = async () => {
//     try {
//       const saleProducts = selectedItems.map((item) => ({
//         productId: item.productId,  // ✅ correct field
//         qty: item.qty,              // match backend expectation
//         totalPrice: item.price * item.qty,
//       }));

//       await axiosInstance.post(`${import.meta.env.VITE_API_BASE_URL}/sales`, {
//         products: saleProducts,
//         totalAmount,
//         paymentMethod,
//       });

//       alert("Sale recorded successfully!");
//       setSelectedItems([]);
//       fetchProducts();
//       fetchSales();
//     } catch (err) {
//       console.error("Error saving sale:", err.response?.data || err.message);
//     }
//   };



//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-2xl font-bold">POS - Sales Management</h1>

//       {/* Product list */}
//       <div className="grid grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div key={product._id} className="border rounded-lg p-4 shadow">
//             <img
//               src={`${import.meta.env.VITE_API_BASE_URL}${product.imageURL}`}
//               alt={product.name}
//               className="h-32 w-full object-contain mb-2"
//             />
//             <h2 className="font-semibold">{product.name}</h2>
//             <p>Price: ${product.price}</p>
//             <p>Stock: {product.stock}</p>
//             <div className="flex gap-2 mt-2">
//               <input
//                 type="number"
//                 min="1"
//                 className="border p-1 w-16"
//                 placeholder="Qty"
//                 id={`qty-${product._id}`}
//               />
//               <button
//                 className="bg-blue-600 text-white px-3 py-1 rounded"
//                 onClick={() => {
//                   const qty = parseInt(
//                     document.getElementById(`qty-${product._id}`).value
//                   );
//                   addToSale(product, qty);
//                 }}
//               >
//                 Add
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Selected items (current sale) */}
//       {selectedItems.length > 0 && (
//         <div className="border p-4 rounded shadow">
//           <h2 className="text-xl font-semibold mb-2">Current Sale</h2>
//           <ul>
//             {selectedItems.map((item) => (
//               <li key={item.productId}>
//                 {item.name} - {item.qty} x ${item.price} = $
//                 {item.qty * item.price}
//               </li>
//             ))}
//           </ul>
//           <ul>
//             {sales.map((sale, i) => (
//               <li key={i} className="mb-2">
//                 {sale.products.map((item, j) => (
//                   <div key={j}>
//                     {item.productId?.name} - {item.qty} pcs = Rs. {item.totalPrice}
//                   </div>
//                 ))}
//                 <strong>Total: Rs. {sale.totalAmount}</strong> | Method: {sale.paymentMethod}
//               </li>
//             ))}
//           </ul>
//           <h3 className="font-bold mt-2">Total: ${totalAmount}</h3>
//           <div className="flex gap-4 mt-2">
//             <select
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//               className="border p-1"
//             >
//               <option value="Cash">Cash</option>
//               <option value="Card">Card</option>
//             </select>
//             <button
//               className="bg-green-600 text-white px-4 py-2 rounded"
//               onClick={saveSale}
//             >
//               Save Sale
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Sales history */}
//       <div className="mt-6">
//         <h2 className="text-xl font-semibold">Sales History</h2>
//         <table className="w-full border mt-2">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border px-2 py-1">Date</th>
//               <th className="border px-2 py-1">Products</th>
//               <th className="border px-2 py-1">Total</th>
//               <th className="border px-2 py-1">Payment</th>
//             </tr>
//           </thead>
//           <tbody>
//             {sales.map((sale) => (
//               <tr key={sale._id}>
//                 <td className="border px-2 py-1">
//                   {new Date(sale.createdAt).toLocaleString()}
//                 </td>
//                 <td className="border px-2 py-1">
//                   {sale.products.map((p) =>
//                     `${p.name} (${p.qty} × $${p.price} = ${p.qty * p.price})`
//                   ).join(", ")}
//                 </td>
                
//                 <td className="border px-2 py-1">${sale.totalAmount}</td>
//                 <td className="border px-2 py-1">{sale.paymentMethod}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default POSPage;


// src/pages/POSPage.jsx
// src/pages/POSPage.jsx
// import { useState, useEffect } from "react";
// import axiosInstance from "../api/axiosInstance";

// const POSPage = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [paymentMethod, setPaymentMethod] = useState("Cash");
//   const [sales, setSales] = useState([]);

//   // Load products and sales history
//   useEffect(() => {
//     fetchProducts();
//     fetchSales();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const res = await axiosInstance.get(
//         `${import.meta.env.VITE_API_BASE_URL}/products`
//       );
//       setProducts(res.data);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     }
//   };

//   const fetchSales = async () => {
//     try {
//       const res = await axiosInstance.get(
//         `${import.meta.env.VITE_API_BASE_URL}/sales`
//       );
//       setSales(res.data);
//     } catch (err) {
//       console.error("Error fetching sales:", err);
//     }
//   };

//   // Add product with qty and update local stock
//   const addToSale = (product, qty) => {
//     if (!qty || qty <= 0) return;
//     if (qty > product.stock) {
//       alert(`Cannot add ${qty} items. Only ${product.stock} in stock.`);
//       return;
//     }

//     // Update selectedItems
//     setSelectedItems((prev) => {
//       const existing = prev.find((item) => item.productId === product._id);
//       if (existing) {
//         return prev.map((item) =>
//           item.productId === product._id
//             ? { ...item, qty: item.qty + qty }
//             : item
//         );
//       }
//       return [
//         ...prev,
//         {
//           productId: product._id,
//           name: product.name,
//           price: product.price,
//           qty,
//         },
//       ];
//     });

//     // Update products stock locally
//     setProducts((prevProducts) =>
//       prevProducts.map((p) =>
//         p._id === product._id ? { ...p, stock: p.stock - qty } : p
//       )
//     );

//     // Clear input
//     document.getElementById(`qty-${product._id}`).value = "";
//   };

//   const totalAmount = selectedItems.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );

//   // Save sale
// const saveSale = async () => {
//   if (selectedItems.length === 0) return alert("No items to save!");

//   try {
//     const saleProducts = selectedItems.map((item) => ({
//       productId: item.productId,
//       qty: item.qty, // exactly what backend needs
//     }));

//     await axiosInstance.post(`${import.meta.env.VITE_API_BASE_URL}/sales`, {
//       products: saleProducts,
//       totalAmount,
//       paymentMethod,
//     });

//     alert("Sale recorded successfully!");
//     setSelectedItems([]); // clear current sale
//     fetchProducts();      // fetch updated stock from backend
//     fetchSales();         // refresh sales history
//   } catch (err) {
//     console.error("Error saving sale:", err.response?.data || err.message);
//   }
// };


//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-2xl font-bold">POS - Sales Management</h1>

//       {/* Product list */}
//       <div className="grid grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div key={product._id} className="border rounded-lg p-4 shadow">
//             <img
//               src={`${import.meta.env.VITE_API_BASE_URL}${product.imageURL}`}
//               alt={product.name}
//               className="h-32 w-full object-contain mb-2"
//             />
//             <h2 className="font-semibold">{product.name}</h2>
//             <p>Price: ${product.price}</p>
//             <p>Stock: {product.stock}</p>
//             <div className="flex gap-2 mt-2">
//               <input
//                 type="number"
//                 min="1"
//                 className="border p-1 w-16"
//                 placeholder="Qty"
//                 id={`qty-${product._id}`}
//               />
//               <button
//                 className="bg-blue-600 text-white px-3 py-1 rounded"
//                 onClick={() => {
//                   const qty = parseInt(
//                     document.getElementById(`qty-${product._id}`).value
//                   );
//                   addToSale(product, qty);
//                 }}
//               >
//                 Add
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Current Sale */}
//       {selectedItems.length > 0 && (
//         <div className="border p-4 rounded shadow">
//           <h2 className="text-xl font-semibold mb-2">Current Sale</h2>
//           <ul>
//             {selectedItems.map((item) => (
//               <li key={item.productId}>
//                 {item.name} - {item.qty} × ${item.price} = $
//                 {item.qty * item.price}
//               </li>
//             ))}
//           </ul>
//           <h3 className="font-bold mt-2">Total: ${totalAmount}</h3>
//           <div className="flex gap-4 mt-2">
//             <select
//               value={paymentMethod}
//               onChange={(e) => setPaymentMethod(e.target.value)}
//               className="border p-1"
//             >
//               <option value="Cash">Cash</option>
//               <option value="Card">Card</option>
//             </select>
//             <button
//               className="bg-green-600 text-white px-4 py-2 rounded"
//               onClick={saveSale}
//             >
//               Save Sale
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Sales history */}
//       <div className="mt-6">
//         <h2 className="text-xl font-semibold">Sales History</h2>
//         <table className="w-full border mt-2">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border px-2 py-1">Date</th>
//               <th className="border px-2 py-1">Products</th>
//               <th className="border px-2 py-1">Total</th>
//               <th className="border px-2 py-1">Payment</th>
//             </tr>
//           </thead>
//           <tbody>
//             {sales.map((sale) => (
//               <tr key={sale._id}>
//                 <td className="border px-2 py-1">
//                   {new Date(sale.createdAt).toLocaleString()}
//                 </td>
//                 <td className="border px-2 py-1">
//                   {sale.products
//                     .map(
//                       (p) =>
//                         `${p.name} (${p.qty} × $${p.price} = $${p.qty * p.price})`
//                     )
//                     .join(", ")}
//                 </td>
//                 <td className="border px-2 py-1">${sale.totalAmount}</td>
//                 <td className="border px-2 py-1">{sale.paymentMethod}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default POSPage;


import { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

const POSPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [sales, setSales] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [presetRange, setPresetRange] = useState(""); // New state for Daily/Weekly/Monthly

  // Load products and sales history
  useEffect(() => {
    fetchProducts();
    fetchSales();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axiosInstance.get(
        `${import.meta.env.VITE_API_BASE_URL}/products`
      );
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  const fetchSales = async () => {
    try {
      const res = await axiosInstance.get(
        `${import.meta.env.VITE_API_BASE_URL}/sales`
      );
      setSales(res.data);
    } catch (err) {
      console.error("Error fetching sales:", err);
    }
  };

  // Fetch sales by date range
  const fetchFilteredSales = async () => {
    try {
      let url = `${import.meta.env.VITE_API_BASE_URL}/sales`;
      if (fromDate && toDate) {
        url += `?from=${fromDate}&to=${toDate}`;
      }
      const res = await axiosInstance.get(url);
      setSales(res.data);
    } catch (err) {
      console.error("Error fetching filtered sales:", err);
    }
  };

  // Handle preset range
  const handlePresetRange = (range) => {
    setPresetRange(range);
    const today = new Date();
    let from, to;

    switch (range) {
      case "Daily":
        from = today.toISOString().split("T")[0];
        to = from;
        break;
      case "Weekly":
        const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
        from = firstDayOfWeek.toISOString().split("T")[0];
        to = new Date().toISOString().split("T")[0];
        break;
      case "Monthly":
        const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        from = firstDayOfMonth.toISOString().split("T")[0];
        to = new Date().toISOString().split("T")[0];
        break;
      default:
        from = "";
        to = "";
    }

    setFromDate(from);
    setToDate(to);
    fetchFilteredSales();
  };

  // Add product with qty and update local stock
  const addToSale = (product, qty) => {
    if (!qty || qty <= 0) return;
    if (qty > product.stock) {
      alert(`Cannot add ${qty} items. Only ${product.stock} in stock.`);
      return;
    }

    setSelectedItems((prev) => {
      const existing = prev.find((item) => item.productId === product._id);
      if (existing) {
        return prev.map((item) =>
          item.productId === product._id
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }
      return [
        ...prev,
        {
          productId: product._id,
          name: product.name,
          price: product.price,
          qty,
        },
      ];
    });

    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p._id === product._id ? { ...p, stock: p.stock - qty } : p
      )
    );

    document.getElementById(`qty-${product._id}`).value = "";
  };

  const totalAmount = selectedItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const saveSale = async () => {
    if (selectedItems.length === 0) return alert("No items to save!");

    try {
      const saleProducts = selectedItems.map((item) => ({
        productId: item.productId,
        qty: item.qty,
      }));

      await axiosInstance.post(`${import.meta.env.VITE_API_BASE_URL}/sales`, {
        products: saleProducts,
        totalAmount,
        paymentMethod,
      });

      alert("Sale recorded successfully!");
      setSelectedItems([]);
      fetchProducts();
      fetchSales();
    } catch (err) {
      console.error("Error saving sale:", err.response?.data || err.message);
    }
  };
const handleDeleteSale = async (saleId) => {
    if (!window.confirm("Are you sure you want to delete this sale?")) return;

    try {
      await axiosInstance.delete(
        `${import.meta.env.VITE_API_BASE_URL}/sales/${saleId}`
      );
      alert("Sale deleted successfully!");
      fetchSales(); // refresh sales list, keeps current filter
    } catch (err) {
      console.error("Error deleting sale:", err.response?.data || err.message);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">POS - Sales Management</h1>

    

      {/* Product list */}
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border rounded-lg p-4 shadow">
          <img
  src={`${import.meta.env.VITE_API_BASE_URL.replace("/api", "")}${product.imageURL}`}
  alt={product.name}
  className="h-32 w-full object-contain mb-2"
/>
            <h2 className="font-semibold">{product.name}</h2>
            <p>Price: Rs.{product.price}</p>
            <p>Stock: {product.stock}</p>
            <div className="flex gap-2 mt-2">
              <input
                type="number"
                min="1"
                className="border p-1 w-16"
                placeholder="Qty"
                id={`qty-${product._id}`}
              />
              <button
                className="bg-blue-600 text-white px-3 py-1 rounded"
                onClick={() => {
                  const qty = parseInt(
                    document.getElementById(`qty-${product._id}`).value
                  );
                  addToSale(product, qty);
                }}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Current Sale */}
      {selectedItems.length > 0 && (
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Current Sale</h2>
          <ul>
            {selectedItems.map((item) => (
              <li key={item.productId}>
                {item.name} - {item.qty} × ${item.price} = $
                {item.qty * item.price}
              </li>
            ))}
          </ul>
          <h3 className="font-bold mt-2">Total: ${totalAmount}</h3>
          <div className="flex gap-4 mt-2">
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="border p-1"
            >
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
            </select>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded"
              onClick={saveSale}
            >
              Save Sale
            </button>
          </div>
        </div>
      )}

      {/* Sales history */}
      <div className="mt-6">
          {/* Filter by date + preset range */}
      <div className="flex gap-2 items-center mb-4 flex-wrap">
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="border p-1"
        />
        <input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="border p-1"
        />
        <button
          onClick={fetchFilteredSales}
          className="bg-blue-600 text-white px-3 py-1 rounded"
        >
          Filter
        </button>

        <select
          value={presetRange}
          onChange={(e) => handlePresetRange(e.target.value)}
          className="border p-1"
        >
          <option value="">Select Range</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>
        <h2 className="text-xl font-semibold">Sales History</h2>
        <table className="w-full border mt-2">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-2 py-1">Date</th>
              <th className="border px-2 py-1">Products</th>
              <th className="border px-2 py-1">Total</th>
              <th className="border px-2 py-1">Payment</th>
            </tr>
          </thead>
        <tbody>
  {sales.map((sale) => (
    <tr key={sale._id}>
      <td className="border px-2 py-1">
        {new Date(sale.createdAt).toLocaleString()}
      </td>
      <td className="border px-2 py-1">
        {sale.products
          .map(
            (p) =>
              `${p.name} (${p.qty} × $${p.price} = $${p.qty * p.price})`
          )
          .join(", ")}
      </td>
      <td className="border px-2 py-1">${sale.totalAmount}</td>
      <td className="border px-2 py-1">{sale.paymentMethod}</td>
      <td className="border px-2 py-1">
        <button
          onClick={() => handleDeleteSale(sale._id)}
          className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default POSPage;
