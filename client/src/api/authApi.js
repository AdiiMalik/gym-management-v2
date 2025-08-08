
// src/api/authApi.js

// import axiosInstance from "./axiosInstance";

// import axiosInstance from './/axiosInstance'



// // ✅ Use named functions inside an object for clarity and default export
// const authApi = {
//   login: async (email, password) => {
//     try {
//       const data = await axiosInstance('post', '/auth/login', { email, password });
//       console.debug('Login response:', data);
//       return data;
//     } catch (error) {
//       console.error('Login failed:', error);
//       throw error;
//     }
//   },

//   register: async (userData) => {
//     try {
//       const data = await axiosInstance('post', '/auth/register', userData);
//       console.debug('Registration response:', data);
//       return data;
//     } catch (error) {
//       console.error('Registration failed:', error);
//       throw error;
//     }
//   },

//   updateAccount: async (updateData) => {
//     try {
//       const data = await axiosInstance('put', '/auth/update', updateData);
//       console.debug('Update response:', data);
//       return data;
//     } catch (error) {
//       console.error('Update failed:', error);
//       throw error;
//     }
//   }
// };

// export default authApi;
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Generic request handler
// const makeRequest = async (method, url, data = null) => {
//   try {
//     const response = await axiosInstance({
//       method,
//       url,
//       data,
//       validateStatus: status => status >= 200 && status < 500,
//     });

//     if (response.data?.error) {
//       throw new Error(response.data.error);
//     }

//     return response.data;
//   } catch (error) {
//     console.error('❌ API Error:', error);
//     throw error;
//   }
// };

// // Define all API functions
// export const login = async (credentials) => {
//   try {
//     const response = await api.post('/auth/login', credentials);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

//   register: async (userData) => {
//     return await axiosInstance('post', '/auth/register', userData);
//   },

//   updateAccount: async (updateData) => {
//     return await axiosInstance('put', '/auth/update', updateData);
//   },

//   // Add more APIs here as needed...
// };

// // ✅ Default export so this works everywhere:
// // import api from './authApi.js';
// export default api;

// Add more functions here as needed:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// src/api/authApi.js

import axiosInstance from './axiosInstance';

// ========== Auth APIs ==========

// Login
// export const login = async ({ email, password }) => {
//   try {
//     const response = await axiosInstance.post('/auth/login', {
//       email,
//       password
//     });
//     console.log('✅ API login response:', response);
//     return response.data;
//   } catch (error) {
//     console.error('❌ Login error in authApi:', error);
//     throw error;
//   }
// };
export const login = async ({ email, password }) => {
  try {
    const response = await axiosInstance.post('/auth/login', {
      email,
      password
    });

    const { user } = response.data;

    // ✅ Handle rejected admin account
    if (user.role === 'admin' && user.status === 'rejected') {
      throw new Error('Your admin request has been rejected by the superadmin.');
    }

    // ✅ Handle pending admin account
    if (user.role === 'admin' && user.status === 'pending') {
      throw new Error('Your admin request is still pending approval from the superadmin.');
    }

    console.log('✅ API login response:', response);
    return response.data;

  } catch (error) {
    console.error('❌ Login error in authApi:', error);
    throw error;
  }
};


// Register
export const register = async (userData) => {
  try {
    const response = await axiosInstance.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

// Update Account
export const updateAccount = async (data) => {
  try {
    const response = await axiosInstance.put('/auth/update', data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

