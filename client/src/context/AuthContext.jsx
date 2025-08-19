
// import { createContext, useContext, useState, useEffect } from 'react';
// import { login as authLogin } from '../api/authApi'; // Import fixed login
// import axiosInstance from '../api/axiosInstance';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const login = async (email, password) => {
//     console.log('Trying to login with:', { email, password });
//     try {
//       const data = await axiosInstance(email, password);
//       setUser(data.user);
//       localStorage.setItem('token', data.token);
//       return data;
//     } catch (error) {
//       console.error('Login error:', error?.message || error);
//       throw error;
//     }
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('token');
//   };

  
// useEffect(() => {
//   const token = localStorage.getItem('token');
//   const storedUser = localStorage.getItem('user');

//   if (token && storedUser) {
//     authLogin({
//       token,
//       user: JSON.parse(storedUser),
      
//     });
//   }
// }, []);


//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         login,
//         logout,
//         loading,
//         isAuthenticated: !!user,
//       }}
//     >
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);
/////////////////////////////////////////////////////////////////////////////////////////////////19/8

// import { createContext, useContext, useState, useEffect } from 'react';
// import { login as authLogin } from '../api/authApi'; // Correctly import API function

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const login = async ({ email, password }) => {
//   try {
//     const res = await authLogin({ email, password }); // ✅ Use correct API
//     const { token, user } = res.data;

//     setUser(user);
//     localStorage.setItem('token', token);
//     localStorage.setItem('user', JSON.stringify(user)); // ✅ Save user to localStorage
//     return { token, user };
//   } catch (error) {
//     console.error('Login error:', error?.message || error);
//     throw error;
//   }
// };


//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//   };

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const storedUser = localStorage.getItem('user');

//     if (token && storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//     setLoading(false); // Important to unblock UI
//   }, []);

//   return (
//    <AuthContext.Provider
//   value={{
//     user,
//     setUser, 
//     login,
//     logout,
//     loading,
//     isAuthenticated: !!user,
//   }}
// >
    
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }

// export const useAuth = () => useContext(AuthContext);


import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as authLogin } from '../api/authApi.js';
import axiosInstance from '../api/axiosInstance.js';
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // 👈

  const login = async ({ email, password }) => {
    try {
      const res = await authLogin({ email, password });
      const { token, user: userData } = res.data;

      setUser(userData);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(userData));

      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      return { token, user: userData };
    } catch (error) {
      console.error('Login error:', error?.message || error);
      throw error;
    }
  };

   const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete axiosInstance.defaults.headers.common["Authorization"];
    
    navigate("/"); // ✅ redirect to home after logout
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (token && storedUser) {
      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 > Date.now()) {
        setUser(JSON.parse(storedUser));
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } else {
        logout();
      }
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        loading,
        isAuthenticated: !!user,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

