// import React from 'react';
// import { Link } from 'react-router-dom';


// const Sidebar = () => {
//   return (
//     <div className="w-64 bg-gray-900 text-white flex flex-col justify-between p-6">
//       <div>
//         <h1 className="text-2xl font-bold mb-8">Gym Admin</h1>
//         <ul className="space-y-4">
//           <li><Link to="/" className="hover:underline">Dashboard</Link></li>
//           <li><Link to="/members" className="hover:underline">Members</Link></li>
//           <li><Link to="/settings" className="hover:underline">Settings</Link></li>
//         </ul>
//       </div>

    
//     </div>
//   );
// };

// export default Sidebar;
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { Home, Users, Settings as SettingsIcon } from 'lucide-react';

// const Sidebar = () => {
//   return (
//     <aside className="w-64 bg-white border-r shadow-sm hidden md:flex flex-col">
//       <div className="px-6 py-5 border-b">
//         <h1 className="text-2xl font-extrabold text-blue-600">Gym<span className="text-gray-700">Manager</span></h1>
//       </div>
//       <nav className="flex-1 flex flex-col py-4 space-y-1">
//         <NavLink
//           to="/Dashboard"
//           className={({ isActive }) =>
//             `flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 transition rounded-r-full ${
//               isActive ? 'bg-blue-100 text-blue-600 font-semibold' : ''
//             }`
//           }
//         >
//           <Home className="mr-3 w-5 h-5" />
//           Dashboard
//         </NavLink>
//         <NavLink
//           to="/members"
//           className={({ isActive }) =>
//             `flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 transition rounded-r-full ${
//               isActive ? 'bg-blue-100 text-blue-600 font-semibold' : ''
//             }`
//           }
//         >
//           <Users className="mr-3 w-5 h-5" />
//           Members
//         </NavLink>
//         <NavLink
//           to="/settings"
//           className={({ isActive }) =>
//             `flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 transition rounded-r-full ${
//               isActive ? 'bg-blue-100 text-blue-600 font-semibold' : ''
//             }`
//           }
//         >
//           <SettingsIcon className="mr-3 w-5 h-5" />
//           Settings
//         </NavLink>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;


import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, Settings as SettingsIcon, X, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext'; // <-- make sure this path is correct

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { user } = useAuth(); // 👈 Get current user

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-40 z-30 transition-opacity duration-300 ${
          sidebarOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white border-r shadow-sm z-40 transform transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:static md:flex md:flex-col`}
      >
        {/* Mobile Header */}
        <div className="px-6 py-5 border-b flex justify-between items-center md:hidden">
          <h1 className="text-2xl font-extrabold text-blue-600">
            Gym<span className="text-gray-700">Manager</span>
          </h1>
          <button onClick={() => setSidebarOpen(false)}>
            <X className="text-gray-700" />
          </button>
        </div>

        {/* Desktop Header */}
        <div className="px-6 py-5 border-b hidden md:block">
          <h1 className="text-2xl font-extrabold text-blue-600">
            Gym<span className="text-gray-700">Manager</span>
          </h1>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 flex flex-col py-4 space-y-1">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 transition rounded-r-full ${
                isActive ? 'bg-blue-100 text-blue-600 font-semibold' : ''
              }`
            }
            onClick={() => setSidebarOpen(false)}
          >
            <Home className="mr-3 w-5 h-5" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/members"
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 transition rounded-r-full ${
                isActive ? 'bg-blue-100 text-blue-600 font-semibold' : ''
              }`
            }
            onClick={() => setSidebarOpen(false)}
          >
            <Users className="mr-3 w-5 h-5" />
            <span>Members</span>
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 transition rounded-r-full ${
                isActive ? 'bg-blue-100 text-blue-600 font-semibold' : ''
              }`
            }
            onClick={() => setSidebarOpen(false)}
          >
            <SettingsIcon className="mr-3 w-5 h-5" />
            <span>Settings</span>
          </NavLink>

          {/* ✅ Show only for Super Admin */}
          {user?.role === 'superadmin' && (
            <NavLink
              to="/superadmin"
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 transition rounded-r-full ${
                  isActive ? 'bg-blue-100 text-blue-600 font-semibold' : ''
                }`
              }
              onClick={() => setSidebarOpen(false)}
            >
              <Shield className="mr-3 w-5 h-5" />
              <span>Super Admin Panel</span>
            </NavLink>
          )}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
