import axios from "axios";
import { useState,useEffect } from "react";


const useToken = (user) => {
    const [token, setToken] = useState('');
    const [isPosted, setIsPosted] = useState(false);
    const [tError, setTerror] = useState(false);
    useEffect(() => {
        if (user) {
            axios.put(`users/${user.user.email}`, user.user).then((res) => {
                console.log(res);
                setToken(res.data.token);
                setIsPosted(res.data.result.acknowledged);
                console.log(user.user.displayName,'posted')
            }).catch(error => setTerror(error));
        }
    }, [user]);
    token && localStorage.setItem('accessToken', token);
    return [isPosted,tError];
}

export default useToken;