import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'a1ed504064msh02d72eef8d5e540p16ecd3jsnc1f9a0e7ef7e',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        headers:cryptoNewsHeaders,
    }),
    endpoints:(builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count}) => `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        })
    })
})

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;