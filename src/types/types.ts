import {
  SET_ACCOUNT_EXISTS,
  SET_AUTH,
  SET_INCORECT_AUTH,
  SET_PHONE,
} from "./../redux/reducer";

export type dataType = {
  login: string;
  password: string;
};
export type setAuthType = {
  type: typeof SET_AUTH;
};
export type setPhoneType = {
  type: typeof SET_PHONE;
  number: string;
};
export type setAcountExistsType = {
  type: typeof SET_ACCOUNT_EXISTS;
};
export type setIncorectAuthType = {
  type: typeof SET_INCORECT_AUTH;
};
export type actionType = setPhoneType &
  setAuthType &
  setAcountExistsType &
  setIncorectAuthType;
export type initialStateType = {
  auth: boolean;
  incorectAuth: boolean;
  phone: string;
  accountExists: boolean;
};
