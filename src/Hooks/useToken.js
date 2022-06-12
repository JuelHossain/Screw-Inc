import axios from "axios";
import { useState,useEffect } from "react";


const useToken = (user) => {
    const [token, setToken] = useState('');
    const [isPosted, setIsPosted] = useState(false);
    const [tError, setTerror] = useState(false);
    useEffect(() => {
        if (user) {
            axios.put(`users/${user.user.email}`, user.user).then((res) => {
                setToken(res.data.token);
                setIsPosted(res.data.result.acknowledged);
               
            }).catch(error => setTerror(error));
        }
    }, [user]);
    token && localStorage.setItem('accessToken', token);
    return [isPosted,tError];
}

export default useToken;