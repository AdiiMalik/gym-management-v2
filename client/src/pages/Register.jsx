// import { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";
// import { toast } from "react-toastify";

// const Register = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       console.log("🚀 Sending registration data:", formData);
//       const res = await axios.post(
//   `${import.meta.env.VITE_API_BASE_URL}/auth/register`,
//   formData
// );

//       console.log("✅ Registration successful:", res.data);
//       console.log("Welcome", res?.data?.user?.name);

//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       toast.success("Registration successful!");
//       navigate("/login"); // 👈 Change if your route is different
//     } catch (err) {
//       console.error("❌ Registration error:", err);
//       toast.error(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded shadow w-full max-w-sm space-y-4"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Enter name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border rounded"
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border rounded"
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//           className="w-full p-2 border rounded"
//         />

//         <button
//           type="submit"
//           className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
//         >
//           Register
//         </button>

//         <p className="mt-4 text-center">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-600 hover:underline">Login here</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Register;
/////////////////////////////////////////////////////////////////////////////////////////////////////first phase ended here//////

// import { useState } from "react";
// import axiosInstance from "../api/axiosInstance";
// import { useNavigate, Link } from "react-router-dom";
// import { toast } from "react-toastify";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "member",
//   });
//   const [role, setRole] = useState('member');
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));

//     // Real-time password validation
//     if (name === "password") {
//       if (value.length > 0 && value.length < 6) {
//         setErrors((prev) => ({
//           ...prev,
//           password: "Password must be at least 6 characters",
//         }));
//       } else {
//         setErrors((prev) => ({ ...prev, password: "" }));
//       }
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     if (formData.password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       toast.error("Please fix the errors in the form");
//       return;
//     }

//     try {
//       const response = await axiosInstance.post(
//         `${import.meta.env.VITE_API_BASE_URL}/auth/register`,
//         formData
//       );

//       console.log("✅ Registration success:", response.data);
//       toast.success(`✅ ${role.charAt(0).toUpperCase() + role.slice(1)} registered successfully!`);

//       // Clear form fields
//       setFormData({
//         name: "",
//         email: "",
//         password: "",
//         role: "member",
//       });

//       // Optional: Navigate or reload
//       // navigate("/members");

//     } catch (error) {
//       console.error("❌ Registration error:", error);
//       toast.error(error?.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded shadow w-full max-w-sm space-y-4"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>

//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//         >
//           <option value="member">Member</option>
//           <option value="admin">Admin (needs approval)</option>
//         </select>

//         <div>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//           {errors.name && (
//             <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//           )}
//         </div>

//         <div>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-2 border rounded"
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//           )}
//         </div>

//         <div>
//           <input
//             type="password"
//             name="password"
//             placeholder="Password (min 6 characters)"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             minLength={6}
//             className="w-full p-2 border rounded"
//           />
//           {errors.password && (
//             <p className="text-red-500 text-sm mt-1">{errors.password}</p>
//           )}
//           <p className="text-gray-500 text-xs mt-1">
//             Password must be at least 6 characters long
//           </p>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
//         >
//           Register
//         </button>

//         <p className="mt-4 text-center">
//           Already have an account?{" "}
//           <Link to="/login" className="text-blue-600 hover:underline">
//             Login here
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Register;



// import { useState } from 'react';
// import axiosInstance from '../api/axiosInstance';
// import { toast } from 'react-toastify';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'member',
//   });

//   const { name, email, password, role } = formData;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     return name && email && password && role;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       toast.error("⚠️ All fields are required");
//       return;
//     }

//     try {
//       const res = await axiosInstance.post(
//         `${import.meta.env.VITE_API_BASE_URL}/auth/register`,
//         formData
//       );

//       toast.success(`${role === 'admin' ? 'Admin' : 'Member'} registered successfully!`);

//       // ✅ Reset fields after success
//       setFormData({
//         name: '',
//         email: '',
//         password: '',
//         role: 'member',
//       });
//     } catch (err) {
//       console.error("❌ Registration error:", err);
//       toast.error(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Register</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">

//         <div>
//           <label className="block font-medium">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={name}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//             placeholder="Enter name"
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//             placeholder="Enter email"
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//             placeholder="Enter password"
//           />
//         </div>

//         <div>
//           <label className="block font-medium">Role</label>
//           <select
//             name="role"
//             value={role}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           >
//             <option value="member">Member</option>
//             <option value="admin">Admin</option>
//             {/* 🔒 No superadmin option in UI */}
//           </select>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//         >
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;

import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "member",
  });

  const [errors, setErrors] = useState({});

  const { name, email, password, role } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "password") {
      if (value.length > 0 && value.length < 6) {
        setErrors((prev) => ({
          ...prev,
          password: "Password must be at least 6 characters",
        }));
      } else {
        setErrors((prev) => ({ ...prev, password: "" }));
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password || password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    try {
      const response = await axiosInstance.post(
        `${import.meta.env.VITE_API_BASE_URL}/auth/register`,
        formData
      );

      toast.success(
        `✅ ${formData.role.charAt(0).toUpperCase() + formData.role.slice(1)} registered successfully!`
      );

      // Reset fields after success
      setFormData({
        name: "",
        email: "",
        password: "",
        role: "member",
      });
      setErrors({});
    } catch (error) {
      console.error("❌ Registration error:", error);
      toast.error(error?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>

        <select
          name="role"
          value={role}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="member">Member</option>
          <option value="admin">Admin (needs approval)</option>
        </select>

        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password (min 6 characters)"
            value={password}
            onChange={handleChange}
            required
            minLength={6}
            className="w-full p-2 border rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
          <p className="text-gray-500 text-xs mt-1">
            Password must be at least 6 characters long
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
        >
          Register
        </button>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
