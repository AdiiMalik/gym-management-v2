const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border rounded-xl p-4 shadow-md hover:shadow-lg transition-all bg-white">
      {product.imageURL && (
        <div className="w-full h-48 mb-3 overflow-hidden rounded-lg">
          <img
            src={product.imageURL}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-sm text-gray-600 mt-1">{product.description}</p>

      <div className="flex justify-between items-center mt-3">
        <p className="text-lg font-bold text-green-600">${product.price}</p>
        <p className="text-xs text-gray-500">Stock: {product.stock}</p>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-700 w-full transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
