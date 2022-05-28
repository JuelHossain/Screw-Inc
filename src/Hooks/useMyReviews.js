import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase";

const useMyReviews = () => {
    const [user, userLoading] = useAuthState(auth);
    const {
      data,
      isLoading: myReviewsLoading,
      error: myReviewsError,
      refetch:refetchMyReviews,
    } = useQuery("MyReviews", () => axios(`/myreviews?email=${user?.email}`), {
      enabled: !userLoading,
    });
    const myReviews = data?.data;
    return { myReviews, myReviewsLoading, myReviewsError, refetchMyReviews };
};

export default useMyReviews;