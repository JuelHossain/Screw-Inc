import axios from "axios"
import { useQuery } from "react-query"

const useProducts = (page, size) => {
      const {
        data,
        isLoading: productsLoading,
        refetch: refetchProducts,
      } = useQuery("products", () => axios(`/products?page=${page}&size=${size}`));
    const products = data?.data;
    return {products,productsLoading,refetchProducts}
}
export default useProducts;