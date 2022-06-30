import axios from "axios";
import { useQuery } from "react-query";

const useReview = (id) => {
  const {
    data,
    isLoading: reviewLoading,
    error: reviewError,
    refetch:
    refetchReview,
  } = useQuery(`review${id}`, () => axios(`/reviews/${id}`));
    const review = data?.data;
  return { review, reviewLoading, reviewError, refetchReview };
};

export default useReview
