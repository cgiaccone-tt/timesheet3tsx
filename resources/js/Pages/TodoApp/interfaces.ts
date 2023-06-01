import { Key } from "react";

export interface Todo {
    id: number;
    title: string;
    isComplete: boolean;
    isEditing: boolean;
  }

  export interface IReddit {
    data: Array<IRedditPostWithData> | null;
    isLoading: boolean | null;
    errorMessage: string | null;
  }

  export interface IRedditPostWithData {
    data: {
      title: string;
      permalink: string;
      id: Key | null | undefined;
      children?: React.ReactNode;
    };
  }

  export interface IRedditUseQuery {
    data: Array<IRedditPostWithData> | null;
    isLoading: boolean | null;
    isError: boolean | null;
    error: string | null;
    isSuccess: boolean | null;
  } 