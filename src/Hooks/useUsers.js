import axios from "axios";
import { useQuery } from "react-query";

const useUsers = () => {
      const {
        data: users,
        isLoading:usersLoading,
        error:usersError,
        refetch:refetchUsers,
      } = useQuery(
        "users",
        async () => await axios("/users").then((res) => res.data)
        );
    return { users, usersLoading, usersError, refetchUsers };
}

export default useUsers;
