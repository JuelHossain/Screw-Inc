import axios from "axios";
import { useState } from "react";
import useUsers from '../Hooks/useUsers'
const useDeleteUser = () => {
    const [deleteUserError, setDeleteUserError] = useState(null);
    const [userDeleted, setUserDeleted] = useState(false);
    const [deletingUser, setDeletingUser] = useState(false);
    const { refetchUsers } = useUsers();
  const deleteUser = async (email) => {
    setDeletingUser(true);
        await axios
          .delete(`/users/${email}`)
          .then((res) => {
            if (res.data.acknowledged) {
              setUserDeleted(true);
              setDeletingUser(false);
              refetchUsers();
            }
          })
          .catch((err) => setDeleteUserError(err));
    }
    return {deleteUser,deletingUser, userDeleted, deleteUserError };
}
export default useDeleteUser