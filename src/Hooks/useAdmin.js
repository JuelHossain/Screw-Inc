import axios from "axios"
import { useQuery } from "react-query"

const useAdmin = (user) => {
    const {
      data,
      isLoading,
      error,
      refetch,
    } = useQuery(
      "users",
      async () => await axios(`/users/admin/${user.email}`).then((res) => res.data)
    );
    console.log(data);
    return [data, isLoading, error,refetch];
}

export default useAdmin