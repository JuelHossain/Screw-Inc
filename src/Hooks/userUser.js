import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase";

const useUser = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const {
    data: userr,
    isLoading: usersLoading,
    error: usersError,
    refetch: refetchUsers,
  } = useQuery(
    "users",
    async () => await axios(`/users/${user.email}`))
  const user1 = userr.data
  return { user1, usersLoading, usersError, refetchUsers };
};

export default useUser;
