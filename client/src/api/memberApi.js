


//const BASE_URL = `${import.meta.env.VITE_API_BASE}/api/members`;
 
// export const getMembers = () => axios.get(BASE_URL);
// export const addMember = (data) => axios.post(BASE_URL, data);
// export const deleteMember = (id) => axios.delete(`${BASE_URL}/${id}`);
// export const updateMember = (id, data) => axios.put(`${BASE_URL}/${id}`, data);

import axiosInstance from "./axiosInstance";

const API_URL = '/members';

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
};

export const getMembers = async () => {
  const res = await axiosInstance.get(API_URL, { headers: getAuthHeaders() });
  return res.data;
};

export const addMember = async (memberData) => {
  const res = await axiosInstance.post(API_URL, memberData, { headers: getAuthHeaders() });
  return res.data;
};

export const deleteMember = async (id) => {
  const res = await axiosInstance.delete(`${API_URL}/${id}`, { headers: getAuthHeaders() });
  return res.data;
};

export const updateMember = async (id, memberData) => {
  const res = await axiosInstance.put(`${API_URL}/${id}`, memberData, { headers: getAuthHeaders() });
  return res.data;
};

// export const getMemberProfile = async () => {
//   const res = await api.get(`${API_URL}/profile`, { headers: getAuthHeaders() });
//   return res.data;
// };


export const getMemberProfile = async () => {
  const res = await axiosInstance.get('/members/profile');
  return res.data;
};