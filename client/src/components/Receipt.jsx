import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Receipt = ({ sale }) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="mt-6 border p-4" ref={componentRef}>
      <h2 className="font-bold text-center">Gym Receipt</h2>
      <p>Date: {new Date(sale.createdAt).toLocaleString()}</p>
      <hr className="my-2" />
      <table className="w-full">
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {sale.products.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.qty}</td>
              <td>${p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr className="my-2" />
      <p className="font-bold">Total: ${sale.totalAmount}</p>
      <p>Payment: {sale.paymentMethod}</p>
      <button
        onClick={handlePrint}
        className="bg-blue-500 text-white px-3 py-1 mt-3 rounded"
      >
        Print Receipt
      </button>
    </div>
  );
};

export default Receipt;
