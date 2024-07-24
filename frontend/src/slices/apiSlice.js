import { createApi } from '@reduxjs/toolkit/query'

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Product', 'User', 'Order'],
    endpoints: (builder) => ({}),
})