import axios from "axios"
import {  useQuery } from "react-query"

const useProduct = (id) => {
    const {
      data,
      isLoading: productLoading,
      refetch:refetchProduct,
    } = useQuery(`product${id}`, () => axios(`/products/${id}`));
    const product = data?.data;
    return{product,productLoading,refetchProduct}
}
export default useProduct;