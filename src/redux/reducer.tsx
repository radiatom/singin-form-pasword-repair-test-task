import { getAccountIsExists, getAuth } from "../api/api";
import { ThunkDispatch } from "redux-thunk";
import {
  actionType,
  initialStateType,
  setAcountExistsType,
  setAuthType,
  setIncorectAuthType,
  setPhoneType,
} from "../types/types";

export const SET_AUTH: string = "reducer/SET_AUTH";
export const setAuth = (): setAuthType => {
  return {
    type: SET_AUTH,
  };
};

export const SET_PHONE: string = "reducer/SET_PHONE";
export const setPhone = (number: string): setPhoneType => {
  return {
    type: SET_PHONE,
    number: number,
  };
};

export const SET_ACCOUNT_EXISTS: string = "reducer/SET_ACCOUNT_EXISTS";
export const setAcountExists = (): setAcountExistsType => {
  return {
    type: SET_ACCOUNT_EXISTS,
  };
};

export const SET_INCORECT_AUTH: string = "redicer/SET_INCORECT_AUTH";
export const setIncorectAuth = (): setIncorectAuthType => {
  return {
    type: SET_INCORECT_AUTH,
  };
};
const initialState: initialStateType = {
  auth: false,
  incorectAuth: false,
  phone: "",
  accountExists: false,
};

const reducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case SET_AUTH: {
      return {
        ...state,
        auth: true,
      };
    }
    case SET_PHONE: {
      return {
        ...state,
        phone: action.number,
      };
    }
    case SET_ACCOUNT_EXISTS: {
      return {
        ...action,
        accountExists: true,
      };
    }
    case SET_INCORECT_AUTH: {
      return {
        ...state,
        incorectAuth: true,
      };
    }
    default: {
      return state;
    }
  }
};

export const isAuth =
  (login: string, password: string) =>
  (dispatch: ThunkDispatch<initialStateType, unknown, actionType>) => {
    const auth = getAuth(login, password);
    //@ts-ignore
    auth === true ? dispatch(setAuth()) :dispatch(setIncorectAuth());
  };
export const acountExists =
  (number: string) =>
  (dispatch: ThunkDispatch<initialStateType, unknown, actionType>) => {
    if (getAccountIsExists(number) === false) {
    //@ts-ignore
      dispatch(setAcountExists());
    } else {
    //@ts-ignore
      setPhone(number());
    }
  };
export default reducer;
