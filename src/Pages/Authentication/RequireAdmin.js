import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase";
import Loading from "../../Components/Shared/Loading";
import useAdmin from "../../Hooks/useAdmin";

const RequireAdmin = ({ children }) => {
  let location = useLocation();
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin();
  if (loading||adminLoading) {
    <Loading></Loading>;
  } else if (!user&&!admin) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAdmin;
