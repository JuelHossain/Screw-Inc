import axios from "axios"
import { useQuery } from "react-query"

const useProducts = () => {
    const { data, isLoading: productsLoading, refetch: refetchProducts } = useQuery('products', () => axios('/products'))
    const products = data?.data;
    return {products,productsLoading,refetchProducts}
}
export default useProducts;