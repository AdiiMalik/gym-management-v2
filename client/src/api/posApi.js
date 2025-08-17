import axios from "axios";

const posApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + "/",
});

// Products
export const getProducts = () => posApi.get("products");
export const addProduct = (data) => posApi.post("products", data);
export const updateProduct = (id, data) => posApi.put(`products/${id}`, data);
export const deleteProduct = (id) => posApi.delete(`products/${id}`);

// Sales
export const createSale = (data) => posApi.post("sales", data);
export const getSales = () => posApi.get("sales");

export default posApi;
