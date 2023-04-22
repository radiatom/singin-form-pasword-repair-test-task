import reducer, {  setAcountExists, setAuth, setIncorectAuth, setPhone } from "./reducer";

const initialState = {
    auth: false,
    incorectAuth: false,
    phone: "",
    accountExists: false,
  }

describe("reducer", () => {
  it("auth", () => {
    const newState= reducer (initialState,setAuth());
    expect(newState.auth).toBe(true)
  });
  it("incorectAuth", () => {
    const newState= reducer (initialState,setIncorectAuth());
    expect(newState.incorectAuth).toBe(true)
  });
  it("phone add", () => {
    const newState= reducer (initialState,setPhone('0501234567'));
    expect(newState.phone).toBe('0501234567')
  });
  it("accountExists", () => {
    const newState= reducer (initialState,setAcountExists('false'));
    expect(newState.accountExists).toBe('false')
  });
  
});
