import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase";

const useAdmin = () => {
    const [user] = useAuthState(auth);
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(false);
  const [adminError, setAdminError] = useState(null);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      setAdminLoading(true);
      axios.get(`/admin/${email}`).then(res => {
        console.log(res);
        if (res.status===200) {
          console.log(res.data)
          setAdmin(res.data.isAdmin);
          setAdminLoading(false);
        } else {
          setAdminLoading(false);
        }
      }).catch(error => {
        setAdminError(error);
        signOut(auth);
      })
    }
  },[user])

  return [admin, adminLoading,adminError];
};

export default useAdmin
