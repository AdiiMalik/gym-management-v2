


// import React, { useEffect, useState } from 'react';
// import { addMember, updateMember } from '../api/memberApi';
// import { toast } from 'react-toastify';

// const MemberForm = ({ member, onMemberAdded, clearEditingMember }) => {
//   const [form, setForm] = useState({
//     name: '',
//     age: '',
//     email: '',
//     phone: '',
//     membershipType: '',
//   });
  

//   useEffect(() => {
//     if (member) {
//       setForm({
//         name: member.name || '',
//         age: member.age || '',
//         email: member.email || '',
//         phone: member.phone || '',
//         membershipType: member.membershipType || '',
//       });
//     } else {
//       setForm({ name: '', age: '', email: '', phone: '', membershipType: '' });
//     }
//   }, [member]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     if (member) {
//   //       await updateMember(member._id, form);
//   //       toast.success('✅ Member updated successfully!');
//   //     } else {
//   //       await addMember(form);
//   //       toast.success('✅ Member added successfully!');
//   //     }
//   //     onMemberAdded();
//   //     setForm({ name: '', age: '', email: '', phone: '', membershipType: '' });
//   //     clearEditingMember();
//   //   } catch (error) {
//   //     console.error(error);
//   //     toast.error('Something went wrong.');
//   //   }
//   // };
// // const handleSubmit = async (e) => {
// //   e.preventDefault();
// //   try {
// //     const user = JSON.parse(localStorage.getItem('user')); // or from useAuth()
// //     const userId = user?._id;

// //     if (!userId) {
// //       toast.error('User not logged in');
// //       return;
// //     }

// //     if (member) {
// //       await updateMember(member._id, { ...form });
// //       toast.success('✅ Member updated successfully!');
// //     } else {
// //       await addMember({ ...form, userId }); // attach userId here
// //       toast.success('✅ Member added successfully!');
// //     }

// //     onMemberAdded();
// //     setForm({ name: '', age: '', email: '', phone: '', membershipType: '' });
// //     clearEditingMember();
// //   } catch (error) {
// //     console.error(error);
// //     toast.error('Something went wrong.');
// //   }
// // };
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const user = JSON.parse(localStorage.getItem('user')); // or from useAuth()
//     const userId = user?._id;

//     if (!userId) {
//       toast.error('User not logged in');
//       return;
//     }

//     if (member) {
//       await updateMember(member._id, { ...form });
//       toast.success('✅ Member updated successfully!');
//     } else {
//       await addMember({ ...form, userId }); // attach userId here
//       toast.success('✅ Member added successfully!');
//     }

//     onMemberAdded();
//     setForm({ name: '', age: '', email: '', phone: '', membershipType: '' });
//     clearEditingMember();
//   } catch (error) {
//     console.error('❌ Add/Update Member Error:', error);

//     // ✅ Handle specific backend error response
//     if (error.response) {
//       if (error.response.status === 404) {
//         toast.error('❌ Member email not registered. Please register the member first.');
//       } else {
//         toast.error(`❌ Error: ${error.response.data.message || 'Something went wrong.'}`);
//       }
//     } else {
//       toast.error('❌ Server unreachable or unknown error.');
//     }
//   }
// };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-6">
//       <div className="grid grid-cols-2 gap-4">
//         <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="border p-2" />
//         <input name="age" value={form.age} onChange={handleChange} placeholder="Age" type="number" required className="border p-2" />
//         <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="border p-2" />
//         <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required className="border p-2" />
//         <select name="membershipType" value={form.membershipType} onChange={handleChange} required className="border p-2 col-span-2">
//           <option value="">Select Membership Type</option>
//           <option value="Gold">Gold</option>
//           <option value="Silver">Silver</option>
//           <option value="Premium">Premium</option>
//         </select>
//       </div>

//       <button
//         type="submit"
//         className={`px-4 py-2 mt-4 rounded text-white ${
//           !form.name ||
//           !form.age ||
//           !form.email ||
//           !form.phone ||
//           !form.membershipType
//             ? 'bg-gray-400 cursor-not-allowed'
//             : 'bg-blue-600 hover:bg-blue-700'
//         }`}
//         disabled={
//           !form.name ||
//           !form.age ||
//           !form.email ||
//           !form.phone ||
//           !form.membershipType
//         }
//       >
//         {member ? 'Update Member' : 'Add Member'}
//       </button>
//     </form>
//   );
// };

// export default MemberForm;




// import React, { useEffect, useState } from 'react';
// import { addMember, updateMember } from '../api/memberApi';
// import { toast } from 'react-toastify';

// const MemberForm = ({ member, onMemberAdded, clearEditingMember }) => {
//   const [form, setForm] = useState({
//     name: '',
//     age: '',
//     email: '',
//     phone: '',
//     membershipType: '',
//   });

//   useEffect(() => {
//     if (member) {
//       setForm({
//         name: member.name || '',
//         age: member.age || '',
//         email: member.email || '',
//         phone: member.phone || '',
//         membershipType: member.membershipType || '',
//       });
//     } else {
//       setForm({ name: '', age: '', email: '', phone: '', membershipType: '' });
//     }
//   }, [member]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const user = JSON.parse(localStorage.getItem('user'));
//       const userId = user?._id;

//       if (!userId) {
//         toast.error('User not logged in');
//         return;
//       }

//       if (member) {
//         await updateMember(member._id, { ...form });
//         toast.success('✅ Member updated successfully!');
//       } else {
//         await addMember({ ...form, userId });
//         toast.success('✅ Member added successfully!');
//       }

//       onMemberAdded();
//       setForm({ name: '', age: '', email: '', phone: '', membershipType: '' });
//       clearEditingMember();
//     } catch (error) {
//       console.error('❌ Add/Update Member Error:', error);
//       if (error.response) {
//         if (error.response.status === 404) {
//           toast.error('❌ Member email not registered. Please register the member first.');
//         } else {
//           toast.error(`❌ Error: ${error.response.data.message || 'Something went wrong.'}`);
//         }
//       } else {
//         toast.error('❌ Server unreachable or unknown error.');
//       }
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-gradient-to-br from-white via-blue-50 to-white p-6 rounded-2xl shadow-xl border border-blue-100 mb-8"
//     >
//       <h2 className="text-xl font-bold text-blue-700 mb-4">
//         {member ? '✏️ Update Member' : '➕ Add New Member'}
//       </h2>
//       <div className="grid grid-cols-2 gap-4">
//         <input
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Full Name"
//           required
//           className="border border-blue-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
//         />
//         <input
//           name="age"
//           value={form.age}
//           onChange={handleChange}
//           placeholder="Age"
//           type="number"
//           required
//           className="border border-blue-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
//         />
//         <input
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Email Address"
//           type="email"
//           required
//           className="border border-blue-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
//         />
//         <input
//           name="phone"
//           value={form.phone}
//           onChange={handleChange}
//           placeholder="Phone Number"
//           required
//           className="border border-blue-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
//         />
//         <select
//           name="membershipType"
//           value={form.membershipType}
//           onChange={handleChange}
//           required
//           className="border border-blue-300 rounded-lg p-3 col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
//         >
//           <option value="">Select Membership Type</option>
//           <option value="Gold">Gold</option>
//           <option value="Silver">Silver</option>
//           <option value="Premium">Premium</option>
//         </select>
//       </div>

//       <button
//         type="submit"
//         className={`w-full mt-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 ${
//           !form.name ||
//           !form.age ||
//           !form.email ||
//           !form.phone ||
//           !form.membershipType
//             ? 'bg-gray-400 cursor-not-allowed'
//             : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
//         }`}
//         disabled={
//           !form.name ||
//           !form.age ||
//           !form.email ||
//           !form.phone ||
//           !form.membershipType
//         }
//       >
//         {member ? 'Update Member' : 'Add Member'}
//       </button>
//     </form>
//   );
// };

// export default MemberForm;


import React, { useEffect, useState } from 'react';
import { addMember, updateMember } from '../api/memberApi';
import { toast } from 'react-toastify';

const MemberForm = ({ member, onMemberAdded, clearEditingMember }) => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    membershipType: '',
  });

  useEffect(() => {
    if (member) {
      setForm({
        name: member.name || '',
        age: member.age || '',
        email: member.email || '',
        phone: member.phone || '',
        membershipType: member.membershipType || '',
      });
    } else {
      setForm({ name: '', age: '', email: '', phone: '', membershipType: '' });
    }
  }, [member]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const userId = user?._id;

      if (!userId) {
        toast.error('User not logged in');
        return;
      }

      if (member) {
        await updateMember(member._id, { ...form });
        toast.success('✅ Member updated successfully!');
      } else {
        await addMember({ ...form, userId });
        toast.success('✅ Member added successfully!');
      }

      onMemberAdded();
      setForm({ name: '', age: '', email: '', phone: '', membershipType: '' });
      clearEditingMember();
    } catch (error) {
      console.error('❌ Add/Update Member Error:', error);
      if (error.response) {
        if (error.response.status === 404) {
          toast.error('❌ Member email not registered.');
        } else {
          toast.error(`❌ ${error.response.data.message || 'Something went wrong.'}`);
        }
      } else {
        toast.error('❌ Server error.');
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 p-6 rounded-xl shadow-md mb-8"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {member ? '✏️ Update Member' : '➕ Add New Member'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          type="number"
          required
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          type="email"
          required
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <select
          name="membershipType"
          value={form.membershipType}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md p-3 col-span-1 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <option value="">Select Membership Type</option>
          <option value="Gold">Gold</option>
          <option value="Silver">Silver</option>
          <option value="Premium">Premium</option>
        </select>
      </div>

      <button
        type="submit"
        className={`w-full mt-6 py-3 rounded-md text-white font-medium transition-all ${
          !form.name ||
          !form.age ||
          !form.email ||
          !form.phone ||
          !form.membershipType
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
        disabled={
          !form.name ||
          !form.age ||
          !form.email ||
          !form.phone ||
          !form.membershipType
        }
      >
        {member ? 'Update Member' : 'Add Member'}
      </button>
    </form>
  );
};

export default MemberForm;
