import { PRODUCT_URL } from "../constant";
import { apiSlice } from "./apiSlice";

const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCT_URL,
      }),
      keepUnusedDataFor: 5, //cache is removed after 5 seconds
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `${PRODUCT_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getProducts: builder.query({
      query: () => ({
        url: PRODUCT_URL,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productSlice;
