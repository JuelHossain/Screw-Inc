import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase";

const useMyReviews = () => {
    const [user, userLoading] = useAuthState(auth);
    const { data, isLoading, error, refetch } = useQuery("MyReviews", () =>
      axios(`/myreviews?email=${user?.email}`),{enabled:!userLoading}
    );
    const myReviews = data?.data;
    console.log('my reviews',myReviews);
    return{myReviews,isLoading,error,refetch}
};

export default useMyReviews;