import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase";

const useUser = () => {
  const [luser, loading] = useAuthState(auth);
  const {
    data: usr,
    isLoading,
    error: userError,
    refetch: refetchUser,
  } = useQuery(
    `user-${luser?.email}`,
    async () => await axios(`/users/${luser?.email}`),
    { enabled: !loading }
  );
  const userLoading = isLoading || loading;
  const user = usr?.data;
  return { user, userLoading, userError, refetchUser };
};

export default useUser;
