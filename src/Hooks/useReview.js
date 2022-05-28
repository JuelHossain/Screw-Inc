import axios from "axios";
import { useQuery } from "react-query";

const useReview = (id) => {
  const {
    data,
    isLoading: reviewLoading,
    error: reviewError,
    refetch:
    refetchReview,
  } = useQuery(`review`, () => axios(`/reviews/${id}`));
    const review = data?.data;
    console.log(review);
  return { review, reviewLoading, reviewError, refetchReview };
};

export default useReview
