import { appStateType } from "../redux/redux";

export const authDataSelector = (state: appStateType) => {
    //@ts-ignore
  return state.reducer.auth;
};
export const incorectAuthDataSelector = (state: appStateType) => {
  //@ts-ignore
return state.reducer.incorectAuth;
};