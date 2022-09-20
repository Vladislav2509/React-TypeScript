import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Post } from '../types/posts.types'
export enum APIstatus {
  IDLE,
  PENDING,
  REJECTED,
  FULFILLED,
}

export type APIError = { message: string; code: number };

export type APIData<DataType = any> = {
  status: string;
  error?: APIError;
  data?: DataType;
};

export const internalError = {
  message: "Internal Error",
  code: -500,
};

export const onFulfilledRequest = (response: AxiosResponse) => response;
export const onRejectedResponse = (error: any) => Promise.reject(internalError);

export const publicRequest = axios.create({
  baseURL: "https://studapi.teachmeskills.by/",
});

publicRequest.interceptors.response.use(onFulfilledRequest, onRejectedResponse);



export type Response = { results: Post[] };

export const getPosts = createAsyncThunk<
  any,
  void,
  { rejectValue: APIError }
>(
  "https://studapi.teachmeskills.by/blog/posts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await publicRequest.get<Response>("/blog/posts", {
        
        params: {
          limit: 250,
        },
      });
      const data = response.data;
      return data;
    } catch (ex) {
      return rejectWithValue(getExceptionPayload(ex));
    }
  }
);

export const initialState = {
  fetchPosts: { status: APIstatus.IDLE },
};

export const getExceptionPayload = (ex: unknown): APIError => {
  if (typeof ex !== "object" || !ex) {
    return internalError;
  }

  const typeException = ex as APIError;
  if (
    ex.hasOwnProperty("message") &&
    typeof typeException.message === "string" &&
    ex.hasOwnProperty("code") &&
    typeof typeException.code === "number"
  ) {
    return {
      message: typeException.message,
      code: typeException.code,
    };
  }
  return internalError;
};