// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const SuperAdminPanel = () => {
//   const [pendingAdmins, setPendingAdmins] = useState([]);
//   const [loadingId, setLoadingId] = useState(null);

//   const fetchPendingAdmins = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/admins/pending`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setPendingAdmins(res.data.admins || []);
//     } catch (err) {
//       toast.error('Failed to fetch pending admins');
//       console.error(err);
//       setPendingAdmins([]);
//     }
//   };

//   const handleAction = async (id, action) => {
//     try {

//       const token = localStorage.getItem('token');
//       setLoadingId(id);
//       await axios.patch(
//         `${import.meta.env.VITE_API_BASE_URL}/admins/${id}/approve`,
//         { status: action === "approve" ? "approved" : "rejected" },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setLoadingId(null);
//       toast.success(`Admin ${action}ed successfully`);
//       fetchPendingAdmins();
//     } catch (err) {
//       toast.error(`Failed to ${action} admin`);
//       console.error(err);
//     }
//   };

// useEffect(() => {
//   const role = localStorage.getItem("role");
//   if (role !== "superadmin") {
//     window.location.href = "/login-member"; // or show 403 page
//   } else {
//     fetchPendingAdmins();
//   }
// }, []);
//   const handleApprove = async (adminId) => {
//     try {
//       const token = localStorage.getItem('token');

//       const response = await axios.patch(
//         `http://localhost:5000/api/admins/${adminId}/approve`,
//         { action: 'approve' },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );


//       const handleReject = async (adminId) => {
//     try {
//       const token = localStorage.getItem('token');

//       const response = await axios.patch(
//         `http://localhost:5000/api/admins/${adminId}/approve`,
//         { action: 'reject' },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Pending Admin Requests</h2>

//       {pendingAdmins?.length > 0 ? (
//         <>
//           <p>Total pending: {pendingAdmins.length}</p>
//           <table className="w-full border text-left mt-4">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="p-2">Name</th>
//                 <th className="p-2">Email</th>
//                 <th className="p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {pendingAdmins.map((admin) => (
//                 <tr key={admin._id} className="border-t">
//                   <td className="p-2">{admin.name}</td>
//                   <td className="p-2">{admin.email}</td>
//                   <td className="p-2 space-x-2">
//                     <button onClick={() => handleApprove(admin._id)} className="bg-green-600 text-white px-3 py-1 rounded mr-2">Approve</button>
//                     <button onClick={() => handleReject(admin._id)} className="bg-red-600 text-white px-3 py-1 rounded">Reject</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </>
//       ) : (
//         <p className="text-gray-500">No pending admins found.</p>
//       )}
//     </div>
//   );
// };

// export default SuperAdminPanel;



// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const SuperAdminPanel = () => {
//   const [pendingAdmins, setPendingAdmins] = useState([]);
//   const [loadingId, setLoadingId] = useState(null);

//   const fetchPendingAdmins = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/admins/pending`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setPendingAdmins(res.data.admins || []);
//     } catch (err) {
//       toast.error('Failed to fetch pending admins');
//       console.error(err);
//       setPendingAdmins([]);
//     }
//   };

//   const handleAction = async (adminId, action) => {
//     try {
//       const token = localStorage.getItem('token');
//       setLoadingId(adminId);

//       await axios.patch(
//         `${import.meta.env.VITE_API_BASE_URL}/admins/${adminId}/approve`,
//         { action }, // ✅ Backend expects { action: 'approve' | 'reject' }
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );

//       toast.success(`Admin ${action}ed successfully`);
//       fetchPendingAdmins();
//     } catch (err) {
//       toast.error(`Failed to ${action} admin`);
//       console.error(err);
//     } finally {
//       setLoadingId(null);
//     }
//   };

//   useEffect(() => {
//     const role = localStorage.getItem("role");
//     if (role !== "superadmin") {
//       window.location.href = "/login-member"; // or show a 403 page
//     } else {
//       fetchPendingAdmins();
//     }
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Pending Admin Requests</h2>

//       {pendingAdmins?.length > 0 ? (
//         <>
//           <p>Total pending: {pendingAdmins.length}</p>
//           <table className="w-full border text-left mt-4">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="p-2">Name</th>
//                 <th className="p-2">Email</th>
//                 <th className="p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {pendingAdmins.map((admin) => (
//                 <tr key={admin._id} className="border-t">
//                   <td className="p-2">{admin.name}</td>
//                   <td className="p-2">{admin.email}</td>
//                   <td className="p-2 space-x-2">
//                     <button
//                       onClick={() => handleAction(admin._id, 'approve')}
//                       disabled={loadingId === admin._id}
//                       className="bg-green-600 text-white px-3 py-1 rounded"
//                     >
//                       {loadingId === admin._id ? 'Approving...' : 'Approve'}
//                     </button>
//                     <button
//                       onClick={() => handleAction(admin._id, 'reject')}
//                       disabled={loadingId === admin._id}
//                       className="bg-red-600 text-white px-3 py-1 rounded"
//                     >
//                       {loadingId === admin._id ? 'Rejecting...' : 'Reject'}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </>
//       ) : (
//         <p className="text-gray-500">No pending admins found.</p>
//       )}
//     </div>
//   );
// };

// export default SuperAdminPanel;



import { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';

const SuperAdminPanel = () => {
  const [pendingAdmins, setPendingAdmins] = useState([]);
  const [loadingId, setLoadingId] = useState(null);
const { user } = useAuth();
  const fetchPendingAdmins = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axiosInstance.get(`/admins/pending`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPendingAdmins(res.data.admins || []);
    } catch (err) {
      toast.error('Failed to fetch pending admins');
      console.error(err);
      setPendingAdmins([]);
    }
  };

  const handleAction = async (adminId, action) => {
    try {
      const token = localStorage.getItem('token');
      setLoadingId(adminId);

      await axiosInstance.patch(
        `/admins/${adminId}/approve`,
        { action }, // ✅ Backend expects { action: 'approve' | 'reject' }
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success(`Admin ${action}ed successfully`);
      fetchPendingAdmins();
    } catch (err) {
      toast.error(`Failed to ${action} admin`);
      console.error(err);
    } finally {
      setLoadingId(null);
    }
  };

useEffect(() => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || user.role !== "superadmin") {
    window.location.href = "/login-member";
  } else {
    fetchPendingAdmins();
  }
}, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Pending Admin Requests</h2>

      {pendingAdmins?.length > 0 ? (
        <>
          <p>Total pending: {pendingAdmins.length}</p>
          <table className="w-full border text-left mt-4">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingAdmins.map((admin) => (
                <tr key={admin._id} className="border-t">
                  <td className="p-2">{admin.name}</td>
                  <td className="p-2">{admin.email}</td>
                  <td className="p-2 space-x-2">
                    <button
                      onClick={() => handleAction(admin._id, 'approve')}
                      disabled={loadingId === admin._id}
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      {loadingId === admin._id ? 'Approving...' : 'Approve'}
                    </button>
                    <button
                      onClick={() => handleAction(admin._id, 'reject')}
                      disabled={loadingId === admin._id}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      {loadingId === admin._id ? 'Rejecting...' : 'Reject'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p className="text-gray-500">No pending admins found.</p>
      )}
    </div>
  );
};

export default SuperAdminPanel;

