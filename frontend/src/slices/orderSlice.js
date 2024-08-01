import { ORDER_URL } from "../constant";
import { apiSlice } from "./apiSlice";

const orderSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addOrder: builder.mutation({
      query: (order) => ({
        url: `${ORDER_URL}/addorder`,
        method: "POST",
        body: { ...order },
      }),
    }),
    getOrderById: builder.query({
      query: (id) => ({
        url: `${ORDER_URL}/${id}`,
      }),
    }),
    getMyOrders: builder.query({
      query: () => ({
        url: `${ORDER_URL}/myorders`,
      }),
    }),
  }),
});

export const {
  useAddOrderMutation,
  useGetOrderByIdQuery,
  useGetMyOrdersQuery,
} = orderSlice;
