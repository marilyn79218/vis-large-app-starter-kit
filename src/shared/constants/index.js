// @flow
export const BASENAME: string = process.env.PUBLIC_URL || '/';
export const DEVELOPMENT: string = 'development';
export const NODE_ENV: string = process.env.NODE_ENV || DEVELOPMENT;

export type FetchStatus = 'NOT_FETCHED' | 'FETCHING' | 'FETCH_SUCCESS' | 'FETCH_FAILURE';
export const FETCH_STATUS_MAP: {
  [key: string]: FetchStatus
} = {
  NOT_FETCHED: 'NOT_FETCHED',
  FETCHING: 'FETCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_FAILURE: 'FETCH_FAILURE',
};

export const TOKEN_KEY: string = 'VISION_API_TOKEN_KEY';

export const LOGIN_STATUS = {
  NOT_LOGIN: 'NOT_LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
};
