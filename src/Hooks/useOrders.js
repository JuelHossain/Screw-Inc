import axios from "axios";
import { useQuery } from "react-query";

const useOrders = () => {
  const {
    data,
      isLoading: ordersLoading,
    error:ordersError,
    refetch: refetchOrders,
  } = useQuery("orders", () => axios(`/orders`));
    const orders = data?.data;
  return { orders, ordersLoading,ordersError, refetchOrders };
};
export default useOrders;
