import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
    reducerPath:"todos",
    baseQuery:fetchBaseQuery({baseUrl:"https://jsonplaceholder.typicode.com/"}),
    endpoints(builder) {
        return {
            fetchTodos: builder.query({
                query: () => {
                    return {
                        method:"GET",
                        url:"/todos"
                    }
                }
            }),
            sendPost: builder.mutation({
                query: (user) => {
                    return {
                        method:"POST",
                        body:{
                            title: user.title,
                            body: user.body,
                            userId: user.userId
                        },
                        url:"/posts"
                    }
                }
            })
        }
    }
})

export const {useFetchTodosQuery,useSendPostMutation} = todoApi;