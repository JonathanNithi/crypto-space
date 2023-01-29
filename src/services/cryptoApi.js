import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

//const createRequest = (url) => ({ url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        headers:cryptoApiHeaders,
    }),
    endpoints:(builder) => ({
        getCryptos: builder.query({
            query: (count) => `/coins?limit=${count}`
        }),
        getCryptoDetails: builder.query({
            query: (coinuuId) => `/coin/${coinuuId}`
        }),
        getCryptoHistory: builder.query({
            query: ({coinId,timePeriod}) => `/coin/${coinId}/history?timePeriod=${timePeriod}`
        })
    })
})

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery
} = cryptoApi;