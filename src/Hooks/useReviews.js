import axios from "axios"
import { useQuery } from "react-query"

const useReviews = (size) => {
    const { data,isLoading:reviewsLoading, error:reviewError,refetch:refetchReviews } = useQuery('reviews', () => axios(`/reviews?size=${size}`));
    const reviews = data?.data;
    return {reviews,reviewsLoading,reviewError,refetchReviews}
}

export default useReviews;