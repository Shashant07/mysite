import { apiSlice } from './apiSlice';
import { MESSAGES_URL } from '../constants';

export const messageApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (data) => ({
        url: `${MESSAGES_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    getMessages: builder.query({
      query: () => ({
        url: MESSAGES_URL,
      }),
      providesTags: ['Message'],
      keepUnusedDataFor: 5,
    }),
    deleteMessage: builder.mutation({
      query: (messageId) => ({
        url: `${MESSAGES_URL}/${messageId}`,
        method: 'DELETE',
      }),
    }),
    getMessageDetails: builder.query({
      query: (id) => ({
        url: `${MESSAGES_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useSendMessageMutation,
  useGetMessagesQuery,
  useDeleteMessageMutation,
  useGetMessageDetailsQuery,
} = messageApiSlice;
