// import { CreateApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// export interface Book {
//   _id: string;
//   title: string;
//   author: string;
//   genre: string;
//   isbn: string;
//   description?: string;
//   copies: number;
//   available: boolean;
// }

// export interface Borrow{

// _id: string,
// bookId: string,
// quantity: number,
// dueDate: string,
// bookTitle: string,
// isbn: string;

// }

// export interface BorrowSummaryItem{

//   bookTitle:string,
//   isbn: string;
//   totalQuery: number;

// }

// export const booksApi = createApi({

// reducerPath: 'booksApi',
// baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api'})
// tagTypes: ['Books','Borrows'],
// endpoints: (builder) => ({

// getBooks: builder.query<Book[],void>({

// query: ()=> '/books',
// providesTags:(result)=>result?[...result.map(({_id}) =>({type:'Books' as const, id:_id})),{type: 'Books', id: 'LIST'}]: [{type: 'Books', id: 'LIST'}],

// }),

// getBook: builder.query<Book, string>({

//     query: (id)=> `/books/${id}`,
//     providesTags: (result,error,id)=>[{type:'Books',id}],

// }),

// addBook: builder.mutation<Book, Partial<Book>>({

// query: (body)=> ({

//     url: '/books',
//     method:'POST',
//     body,

// }),
// invalidatesTags: [{type: 'Books', id: 'LIST'}],

// }),

// })

// })

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
}

export interface Borrow {
  _id: string;
  bookId: string;
  quantity: number;
  dueDate: string;
  bookTitle: string;
  isbn: string;
}

export interface BorrowSummaryItem {
  bookTitle: string;
  isbn: string;
  totalQuantity: number;
}

const API_BASE_URL =
  (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/$/, "") +
  "/api";

console.log("API_BASE_URL:", API_BASE_URL);
console.log("Environment variables:", import.meta.env);
console.log("Full books URL:", API_BASE_URL + "/books");

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: ["Books", "Borrows"],
  endpoints: (builder) => ({
    getBooks: builder.query<Book[], void>({
      query: () => "/books",
      transformResponse: (response: { data: Book[] }) => response.data,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: "Books" as const, id: _id })),
              { type: "Books", id: "LIST" },
            ]
          : [{ type: "Books", id: "LIST" }],
    }),
    getBook: builder.query<Book, string>({
      query: (id) => `/books/${id}`,
      transformResponse: (response: { data: Book }) => response.data,
      providesTags: (_, __, id) => [{ type: "Books", id }],
    }),
    addBook: builder.mutation<Book, Partial<Book>>({
      query: (body) => ({
        url: "/books",
        method: "POST",
        body,
      }),
      transformResponse: (response: { data: Book }) => response.data,
      invalidatesTags: [{ type: "Books", id: "LIST" }],
    }),
    updateBook: builder.mutation<Book, { id: string; body: Partial<Book> }>({
      query: ({ id, body }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body,
      }),
      transformResponse: (response: { data: Book }) => response.data,
      invalidatesTags: (_, __, { id }) => [{ type: "Books", id }],
    }),
    deleteBook: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response: {
        data: { success: boolean; id: string };
      }) => response.data,
      invalidatesTags: [{ type: "Books", id: "LIST" }],
    }),
    borrowBook: builder.mutation<
      Borrow,
      { bookId: string; quantity: number; dueDate: string }
    >({
      query: ({ bookId, quantity, dueDate }) => ({
        url: `/borrows/${bookId}`,
        method: "POST",
        body: { quantity, dueDate },
      }),
      transformResponse: (response: { data: Borrow }) => response.data,
      invalidatesTags: [
        { type: "Books", id: "LIST" },
        { type: "Borrows", id: "SUMMARY" },
      ],
    }),
    getBorrowSummary: builder.query<BorrowSummaryItem[], void>({
      query: () => "/borrows/summary",
      transformResponse: (response: { data: BorrowSummaryItem[] }) =>
        response.data,
      providesTags: [{ type: "Borrows", id: "SUMMARY" }],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useBorrowBookMutation,
  useGetBorrowSummaryQuery,
} = booksApi;
