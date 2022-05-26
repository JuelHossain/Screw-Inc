import axios from "axios";
import { useQuery } from "react-query";

const useOrder = (id) => {
  const {
    data,
    isLoading: orderLoading,
    refetch:refetchOrder,
  } = useQuery("order", () => axios(`/orders/${id}`));
  const order = data?.data;
  return { order, orderLoading, refetchOrder };
};
export default useOrder;
