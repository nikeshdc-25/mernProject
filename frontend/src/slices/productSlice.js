import { apiSlice } from "./apiSlice";

const productSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        getProducts: () =>({
        })
    })
})