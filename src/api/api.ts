import { dataType } from "../types/types";

const data: dataType = {
  login: "0501234567",
  password: "1234",
};
export const getAuth = (login: string, password: string): boolean => {
  if (login === data.login && password === data.password) {
    return true;
  } else {
    return false;
  }
};

export const getAccountIsExists = (login: string): boolean => {
  return login === data.login ? true : false;
};
