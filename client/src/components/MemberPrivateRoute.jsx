// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const MemberPrivateRoute = ({ children }) => {
//   const { user } = useAuth();
//   const location = useLocation();

//   if (!user) {
//     return <Navigate to="/login-member" state={{ from: location }} replace />;
//   }

//   if (user.role !== 'member') {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default MemberPrivateRoute;

import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const MemberPrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login-member" state={{ from: location }} replace />;
  }

  // 🚫 If user is not a member, block access
  if (user.role !== 'member') {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default MemberPrivateRoute;
