import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase";
import Loading from '../../Components/Shared/Loading'

const RequireAuth = ({ children }) => {
  let location = useLocation();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    <Loading></Loading>;
  } else if (!user) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
