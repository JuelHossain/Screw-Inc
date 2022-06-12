import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase";

const useUser = () => {
  const [user,loading] = useAuthState(auth);
  const {
    data: userr,
    isLoading: userLoading,
    error: userError,
    refetch: refetchUser,
  } = useQuery(
    "user",
    async () => await axios(`/users/${user.email}`),{enabled:!loading})
  const user1 = userr?.data
  return { user1, userLoading, userError, refetchUser };
};

export default useUser;
