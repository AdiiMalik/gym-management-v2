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
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, Settings as SettingsIcon } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r shadow-sm hidden md:flex flex-col">
      <div className="px-6 py-5 border-b">
        <h1 className="text-2xl font-extrabold text-blue-600">Gym<span className="text-gray-700">Manager</span></h1>
      </div>
      <nav className="flex-1 flex flex-col py-4 space-y-1">
        <NavLink
          to="/Dashboard"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 transition rounded-r-full ${
              isActive ? 'bg-blue-100 text-blue-600 font-semibold' : ''
            }`
          }
        >
          <Home className="mr-3 w-5 h-5" />
          Dashboard
        </NavLink>
        <NavLink
          to="/members"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 transition rounded-r-full ${
              isActive ? 'bg-blue-100 text-blue-600 font-semibold' : ''
            }`
          }
        >
          <Users className="mr-3 w-5 h-5" />
          Members
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 transition rounded-r-full ${
              isActive ? 'bg-blue-100 text-blue-600 font-semibold' : ''
            }`
          }
        >
          <SettingsIcon className="mr-3 w-5 h-5" />
          Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;

