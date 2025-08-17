// import React from 'react';
// import { motion } from 'framer-motion';

// export default function CartPage({ cart, setCart, closeCart }) {
//   const removeFromCart = (id) => {
//     setCart(cart.filter(item => item._id !== id));
//   };

//   const increaseQty = (id) => {
//     setCart(cart.map(item =>
//       item._id === id ? { ...item, qty: item.qty + 1 } : item
//     ));
//   };

//   const decreaseQty = (id) => {
//     setCart(cart.map(item =>
//       item._id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
//     ));
//   };

//   const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

//   const printReceipt = () => {
//     const receiptWindow = window.open('', '', 'width=600,height=400');
//     receiptWindow.document.write('<h1>Receipt</h1>');
//     receiptWindow.document.write('<ul>');
//     cart.forEach(item => {
//       receiptWindow.document.write(
//         `<li>${item.name} (x${item.qty}) - $${item.price * item.qty}</li>`
//       );
//     });
//     receiptWindow.document.write('</ul>');
//     receiptWindow.document.write(`<h3>Total: $${total}</h3>`);
//     receiptWindow.document.close();
//     receiptWindow.print();
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
//     >
//       <div className="bg-white p-6 rounded-xl w-[90%] max-w-md relative">
//         <button
//           onClick={closeCart}
//           className="absolute top-3 right-3 bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center font-bold"
//         >
//           ✕
//         </button>

//         <h1 className="text-2xl font-bold mb-4">Cart</h1>

//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <div className="space-y-4">
//             {cart.map(item => (
//               <div key={item._id} className="flex justify-between items-center bg-white shadow p-4 rounded-lg">
//                 <div>
//                   <h2 className="font-semibold">{item.name}</h2>
//                   <p>${item.price} x {item.qty}</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <button
                  
//                     onClick={() => decreaseQty(item._id)}
//                     className="bg-gray-300 px-2 rounded"
//                   >
//                     -
//                   </button>
//                   <span>{item.qty}</span>
//                   <button
//                     onClick={() => increaseQty(item._id)}
//                     className="bg-gray-300 px-2 rounded"
//                   >
//                     +
//                   </button>
//                   <button
//                     onClick={() => removeFromCart(item._id)}
//                     className="bg-red-500 text-white px-2 py-1 rounded"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}

//             <h2 className="text-xl font-bold">Total: ${total}</h2>

//             <button
//               onClick={printReceipt}
//               className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//             >
//               Print Receipt
//             </button>
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// }


import React from 'react';
import { motion } from 'framer-motion';

export default function CartPage({ cart = [], setCart, closeCart }) {
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item._id !== id));
  };

  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item._id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item._id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    ));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const printReceipt = () => {
    const receiptWindow = window.open('', '', 'width=600,height=600');
    receiptWindow.document.write('<h1>Receipt</h1><hr>');
    receiptWindow.document.write('<table style="width:100%;border-collapse:collapse;">');
    receiptWindow.document.write('<tr><th align="left">Item</th><th>Qty</th><th>Price</th></tr>');
    cart.forEach(item => {
      receiptWindow.document.write(
        `<tr>
          <td>${item.name}</td>
          <td align="center">${item.qty}</td>
          <td align="right">$${(item.price * item.qty).toFixed(2)}</td>
        </tr>`
      );
    });
    receiptWindow.document.write('</table><hr>');
    receiptWindow.document.write(`<h3>Total: $${total.toFixed(2)}</h3>`);
    receiptWindow.document.close();
    receiptWindow.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    >
      <div className="bg-white p-6 rounded-xl w-[95%] max-w-lg relative max-h-[90vh] flex flex-col">
        <button
          onClick={closeCart}
          className="absolute top-3 right-3 bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center font-bold"
        >
          ✕
        </button>

        <h1 className="text-2xl font-bold mb-4">Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {/* Scrollable Items */}
            <div className="space-y-4 overflow-y-auto flex-1 pr-2">
              {cart.map(item => (
                <div key={item._id} className="flex justify-between items-center bg-gray-50 shadow p-4 rounded-lg">
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p>${item.price} x {item.qty}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQty(item._id)}
                      className="bg-gray-300 px-2 rounded"
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => increaseQty(item._id)}
                      className="bg-gray-300 px-2 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Fixed Footer */}
            <div className="mt-4 border-t pt-4">
              <h2 className="text-xl font-bold mb-2">Total: ${total.toFixed(2)}</h2>
              <button
                onClick={printReceipt}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
              >
                Print Receipt
              </button>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
