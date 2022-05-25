import axios from "axios";
import { useState } from "react";
import useAdmin from "./useAdmin";

const useUserRoleManager = () => {
    const [changingRole, setChangingRole] = useState(false);
    const [role, setRole] = useState(false);
    const [roleChanged, setRoleChanged] = useState(false);
    const [roleChangeError, setRoleChangeError] = useState(null);
    const { isUserAdmin } = useAdmin();
    const changeUserRole = async (email) => {
        setChangingRole(true);
        console.log(true);
        await isUserAdmin(email) ? setRole(false) : setRole(true);;
        console.log(role);
        await axios
          .put(`/users/admin/${email}`, { admin: role })
          .then((res) => {
              if (res.data.acknowledged) {
                  console.log(res.data);
                  
                setRoleChanged(true);
                  setChangingRole(false);
                  return res.data
            }
          })
            .catch((error) => {
                setRoleChangeError(error);
                setChangingRole(false);
          });
    }
    return { changeUserRole,changingRole, roleChanged, roleChangeError };
}

export default useUserRoleManager;