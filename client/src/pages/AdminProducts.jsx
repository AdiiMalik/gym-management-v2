import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: '', description: '', price: '' });
  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);

  // Load products
  const loadProducts = () => {
    setLoading(true);
    axiosInstance.get('/products')
      .then(res => setProducts(res.data))
      .catch(() => alert('Error loading products'))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // Handle input changes
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = e => {
    setImageFile(e.target.files[0]);
  };

  // Add or update product
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('description', form.description);
      formData.append('price', parseFloat(form.price));
      if (imageFile) formData.append('image', imageFile);

      if (editingId) {
        await axiosInstance.put(`/products/${editingId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        alert('Product updated');
      } else {
        await axiosInstance.post('/products', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        alert('Product added');
      }

      setForm({ name: '', description: '', price: '' });
      setImageFile(null);
      setEditingId(null);
      loadProducts();
    } catch {
      alert('Error saving product');
    }
  };

  const startEdit = product => {
    setForm({ name: product.name, description: product.description || '', price: product.price });
    setEditingId(product._id);
    setImageFile(null);
  };

  const handleDelete = async id => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axiosInstance.delete(`/products/${id}`);
        alert('Product deleted');
        loadProducts();
      } catch {
        alert('Error deleting product');
      }
    }
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{editingId ? 'Edit Product' : 'Add New Product'}</h1>
      <form onSubmit={handleSubmit} className="mb-6 max-w-md space-y-4" encType="multipart/form-data">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Product Description"
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          required
          min="0"
          step="0.01"
          className="w-full p-2 border rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          {editingId ? 'Update Product' : 'Add Product'}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setForm({ name: '', description: '', price: '' });
              setImageFile(null);
              setEditingId(null);
            }}
            className="ml-2 px-4 py-2 rounded border"
          >
            Cancel
          </button>
        )}
      </form>

      <h2 className="text-xl font-bold mb-4">Products List</h2>
      {products.length === 0 && <p>No products found.</p>}
     <ul className="space-y-4">
  {products.map(product => (
    <li
      key={product._id}
      className="flex justify-between items-center bg-white shadow p-4 rounded"
    >
      {/* Product info */}
      <div className="flex items-center space-x-4">
        {product.imageURL && (
          <img
            src={`http://localhost:5000${product.imageURL}`}
            alt={product.name}
            className="w-24 h-24 object-contain rounded border"
          />
        )}
        <div>
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-gray-600 text-sm">{product.description}</p>
          <p className="font-bold">${product.price.toFixed(2)}</p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex space-x-2">
        <button
          onClick={() => startEdit(product)}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 text-sm"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(product._id)}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm"
        >
          Delete
        </button>
      </div>
    </li>
  ))}
</ul>

    </div>
  );
}
