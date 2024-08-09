import { PRODUCT_URL, UPLOAD_URL } from "../constant";
import { apiSlice } from "./apiSlice";

const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({pageNumber, keyword}) => ({
        url: PRODUCT_URL,
        params: {pageNumber, keyword}  // /api/v1/prooducts/pageNumber=3&keyword=phone
      }),
      providesTags: ["Product"],
      keepUnusedDataFor: 5,
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `${PRODUCT_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
    addProduct: builder.mutation({
      query: () => ({
        url: PRODUCT_URL,
        method: "POST",
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}/${data._id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    uploadProductImage: builder.mutation({
      query: (data) => ({
        url: UPLOAD_URL,
        method: "POST",
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `${PRODUCT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    addReview: builder.mutation({
      query: (data) => ({
        url: `${PRODUCT_URL}/${data._id}/addreview`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useDeleteProductMutation,
  useAddReviewMutation
} = productSlice;
